'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Steps', [{
      name : 'Suzy Q',
      description: 'The feet perform alternating cross steps and side steps with swivel action, as follows. On 1, put the right foot on the heel across the left foot and put the weight on this heel, the toe being in the air. On 2, swivel on the heel, the right toe swinging to the right, while doing a small step by the left foot to the side, almost in place or simply transferring the weight onto the left foot, or stepping slightly back.',
      image: 'suzy_q.jpg',
      video: 'https://www.youtube.com/watch?v=m1at-8ip7rc',
      createdAt: new Date(),
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Steps', null, {});
  }
};
