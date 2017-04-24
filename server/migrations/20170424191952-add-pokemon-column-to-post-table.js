'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { 
    return queryInterface.addColumn('Posts', 'pokemon', { type: Sequelize.STRING, allowNull: false }) 
  },
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('Posts', 'pokemon'),
};
