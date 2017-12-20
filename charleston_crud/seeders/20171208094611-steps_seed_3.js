'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Steps', [{
      name : 'Crazy legs',
      description: 'Also known as "The Bee\'s Knees", this move generates the optical illusion that the dancer\'s knees are passing through each other—the dancer\'s hands move smoothly past each other as they cross, momentarily obscuring the knees to create the illusion.',
      image: 'crazy_legs.jpg',
      video: 'https://www.youtube.com/watch?v=dZdYQcxDFfY',
      createdAt: new Date(),
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Steps', null, {});
  }
};
