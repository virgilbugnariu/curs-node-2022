'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addColumn(
      'Students',
      'groupId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Groups',
          },
          key: 'id'
        },
      }
    );

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Groups');
  }
};
