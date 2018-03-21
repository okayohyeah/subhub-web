'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assignment = sequelize.define('Assignment', {
    school: DataTypes.STRING,
    teacher: DataTypes.STRING,
    grade: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    adminRate: DataTypes.INTEGER,
    lessonPlansRate: DataTypes.INTEGER,
    studentsRate: DataTypes.INTEGER,
    schoolCultureRate: DataTypes.INTEGER,
    overallRate: DataTypes.INTEGER,
    goldList: DataTypes.STRING,
    redList: DataTypes.STRING,
    notes: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Assignment;
};