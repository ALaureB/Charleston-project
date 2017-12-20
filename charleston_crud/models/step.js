'use strict';
module.exports = (sequelize, DataTypes) => {
  var Step = sequelize.define('Step', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    video: DataTypes.STRING
  });

  Step.associate =  function(models) {
    // relations
  };

  return Step;
};