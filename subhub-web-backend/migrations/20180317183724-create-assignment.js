'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      school: {
        type: Sequelize.STRING
      },
      teacher: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATEONLY
      },
      adminRate: {
        type: Sequelize.INTEGER
      },
      lessonPlansRate: {
        type: Sequelize.INTEGER
      },
      studentsRate: {
        type: Sequelize.INTEGER
      },
      schoolCultureRate: {
        type: Sequelize.INTEGER
      },
      overallRate: {
        type: Sequelize.INTEGER
      },
      goldList: {
        type: Sequelize.BOOLEAN
      },
      redList: {
        type: Sequelize.BOOLEAN
      },
      notes: {
        type: Sequelize.TEXT
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Assignments');
  }
};