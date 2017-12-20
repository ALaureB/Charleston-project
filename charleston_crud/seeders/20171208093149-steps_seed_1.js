'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Steps', [{
      name : 'Shorty George',
      description: 'While performing the shorty George keep your knees close together and step forward in a straight narrow line stepping down on the balls of your feet. Avoid rotating your hips.',
      image: 'shorty_george.jpg',
      video: 'https://www.youtube.com/watch?v=fAcBBxrpx-4',
      createdAt: new Date(),
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Steps', null, {});
  }
};