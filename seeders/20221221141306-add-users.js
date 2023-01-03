'use strict';
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 8;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'virgil',
        password: await bcrypt.hash('admin123', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'adrian',
        password: await bcrypt.hash('admin123', SALT_ROUNDS),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
