const models = require("../../models");
module.exports = async (source, args, { tokenPayload }) => {
  const {
    id,
    firstName,
    lastName,
  } = args;
  if(!tokenPayload) {
    return null;
  }

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
