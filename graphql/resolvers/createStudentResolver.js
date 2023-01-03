const models = require("../../models");
module.exports = async (source, { firstName, lastName }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.Student.create({
    firstName,
    lastName
  });

  return user;
}
