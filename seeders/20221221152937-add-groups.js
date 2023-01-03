'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Groups', [
      {
        name: "101",
        year: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "201",
        year: 2022,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    const groups = await models.Group.findAll();

    const students = await models.Student.findAll();

    for(let i = 0; i < students.length; i++) {
      const groupId = groups[Math.floor(Math.random() * groups.length)].id;
      await queryInterface.bulkUpdate('Students', {
        groupId: groupId,
      }, {
        id: students[i].id,
      });
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
