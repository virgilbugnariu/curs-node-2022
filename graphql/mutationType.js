const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const models = require('../models');

const jwt = require('jsonwebtoken');

const studentType = require('./types/studentType');
const userSessionType = require('./types/userSessionType');

const JWT_KEY = '1158659639IFIUHSDIUSDF';

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createStudent: {
            type: studentType,
            args: {
                firstName: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                lastName: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: async (source, { firstName, lastName }, { tokenPayload }) => {
                if(!tokenPayload) {
                    return null;
                }
                
                if(tokenPayload.role === 'ADMIN') {
                    const user = await models.Student.create({
                        firstName,
                        lastName
                    });

                    return user;
                }

                return null;
            }
        },
        updateStudent: {
            type: studentType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                },
                firstName: {
                    type: GraphQLString,
                },
                lastName: {
                    type: GraphQLString,
                },
            },
            resolve: async (source, { id, firstName, lastName }, { tokenPayload }) => {
                if(!tokenPayload) {
                    return null;
                }
                
                if(tokenPayload.role === 'ADMIN') {
                    await models.Student.update({
                        firstName,
                        lastName
                    }, {
                        where: {
                            id,
                        }
                    });

                    return models.Student.findByPk(id);
                }


                return null;
            }
        },
        deleteStudent: {
            type: GraphQLBoolean,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                },
            },
            resolve: (source, { id }) => {
                return models.Student.destroy({
                    where: {
                        id, 
                    }
                })
            }
        },
        login: {
            type: userSessionType,
            args: {
                username: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                password: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve: (source, args) => {
                const {
                    username,
                    password
                } = args;

                if(username === 'virgil' && password === 'admin123') {
                    const token = jwt.sign({ role: 'ADMIN', userID: 0 }, JWT_KEY);
            
                    return {
                        token,
                    };
                } else if(username === 'adrian' && password === 'student123') {
                    const token = jwt.sign({ role: 'STUDENT', userID: 1 }, JWT_KEY);
            
                    return {
                        token,
                    };
                }

                return {
                    token: null,
                };
            }
        }
    }
});

module.exports = mutationType;