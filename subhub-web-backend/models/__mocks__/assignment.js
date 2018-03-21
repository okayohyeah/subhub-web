'use strict';

var SequelizeMock = require('sequelize-mock');
var dbMock = new SequelizeMock();

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Assignment', {
    school: 'Orange Glen Elementary School',
    teacher: 'Eli Perez',
    grade: '4',
    date: '2018-03-14',
    adminRate: 4,
    lessonPlansRate: 3,
    studentsRate: 4,
    schoolCultureRate: 2,
    overallRate: 3,
    goldList: 'No',
    redList: 'No',
    notes: 'Lesson plan provided. LA complex to teach as sub. No duty. Kids okay.'
  })
}