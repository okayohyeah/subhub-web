'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Assignments', [{
      school: 'Oak Hill Elementary School',
      teacher: 'Beatrice Gonzalez',
      grade: '2',
      date: '2018-04-14', 
      adminRate: 5,
      lessonPlansRate: 4,
      studentsRate: 4,
      schoolCultureRate: 4,
      overallRate: 4,
      goldList: 'Yes',
      redList: 'No',
      notes: 'Friendly administration as always. Lesson plans provided good and easy to follow but LA was a difficult lesson to execute. Kids good for the most part. Overall great.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      school: 'Juniper Elementary School',
      teacher: 'Sandra Smith',
      grade: '3',
      date: '2018-02-24', 
      adminRate: 4,
      lessonPlansRate: 4,
      studentsRate: 2,
      schoolCultureRate: 4,
      overallRate: 2,
      goldList: 'No',
      redList: 'Yes',
      notes: 'Lesson plans provided good and easy to follow but the class was hard to manage with a handful of students with behaviorial issues. Had to call counselor to come in and intervene throughout the day.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      school: 'Bernardo Elementary School',
      teacher: 'John Wells',
      grade: '4',
      date: '2018-03-20', 
      adminRate: 4,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 2,
      goldList: 'No',
      redList: 'Yes',
      notes: 'Solid lesson plans. No duty. Student with severe behavorial problems made it a challenging day. Otherwise the school is great',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Assignments', null, {});
  }
};
