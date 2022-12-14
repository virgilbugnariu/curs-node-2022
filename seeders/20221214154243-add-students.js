'use strict';
const { 
  randFirstName, 
  randLastName, 
  randEmail 
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockStudents = [];
    
    for(let i = 0; i < 100; i++) {
      mockStudents.push({
        firstName: randFirstName(),
        lastName: randLastName(),
        email: randEmail(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert('Students', mockStudents, {});

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
