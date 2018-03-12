'use strict';

var SequelizeMock = require('sequelize-mock');
var dbMock = new SequelizeMock();

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Assignment', {
    school: 'Orange Glen Elementary School',
    teacher: 'Eli Perez',
    grade: 4,
    date: '2018-03-14T00:00:00.000Z',
    rating: 3,
    notes: 'Lesson plan provided. LA complex to teach as sub. No duty. Kids okay.'
  })
}