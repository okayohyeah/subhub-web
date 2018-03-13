'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assignment = sequelize.define('Assignment', {
    school: DataTypes.STRING,
    teacher: DataTypes.STRING,
    grade: DataTypes.INTEGER,
    date: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    goldlist: DataTypes.STRING,
    avoidlist: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Assignment;
};