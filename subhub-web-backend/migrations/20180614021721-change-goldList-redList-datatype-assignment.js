'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn( 'Assignments', 'goldList', {
      type: Sequelize.BOOLEAN
    });
    return queryInterface.changeColumn( 'Assignments', 'redList', {
      type: Sequelize.BOOLEAN
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn( 'Assignments', 'goldList', {
      type: Sequelize.STRING
    });
    return queryInterface.changeColumn( 'Assignments', 'redList', {
      type: Sequelize.STRING
    });
  }
};
