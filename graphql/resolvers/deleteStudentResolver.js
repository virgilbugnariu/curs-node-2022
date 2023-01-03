const models = require("../../models");
module.exports = (source, { id }) => {
  return models.Student.destroy({
    where: {
      id,
    }
  })
}
