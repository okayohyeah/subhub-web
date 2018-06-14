const request = require('supertest');
const app = require('../app');

// MOCKS
jest.mock('../models/assignment');

// TESTING ROUTES
// ** root ** ROUTE
describe('App', ()=> {
  it('Tests the root path', ()=> {
    return request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
})

// ** assignments ** GET ** ROUTE
it('Lists assignments', ()=> {
  return request(app).get('/viewassignments').then(response => {
    expect(response.statusCode).toBe(200)
    expect(response.body.assignments[0].school).toBe('Orange Glen Elementary School')
  })
})

// ** assignments ** POST ** ROUTE
it('Creates assignments', ()=> {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14', 
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(201)
      expect(response.body.assignment.school).toBe('Juniper Elementary School')
      expect(response.body.assignment.teacher).toBe('Sam Silas')
      expect(response.body.assignment.grade).toBe('4'),
      expect(response.body.assignment.date).toBe('2018-03-14'),
      expect(response.body.assignment.adminRate).toBe(3),
      expect(response.body.assignment.lessonPlansRate).toBe(4),
      expect(response.body.assignment.studentsRate).toBe(3),
      expect(response.body.assignment.schoolCultureRate).toBe(4),
      expect(response.body.assignment.overallRate).toBe(3),
      expect(response.body.assignment.goldList).toBe(false),
      expect(response.body.assignment.redList).toBe(false),
      expect(response.body.assignment.notes).toBe('Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.')
    })
})

// ** assignments - SCHOOL ** VALIDATE POST
it('Validates school when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14', 
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('school')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - TEACHER ** VALIDATE POST
it('Validates teacher when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      grade: '4',
      date: '2018-03-14', 
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('teacher')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - GRADE ** VALIDATE POST
it('Validates grade when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      date: '2018-03-14', 
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('grade')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - DATE ** VALIDATE POST
it('Validates grade when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('date')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - ADMIN RATING ** VALIDATE POST
it('Validates admin rating when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      lessonPlansRate: 4,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('adminRate')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - LESSON PLANS RATING ** VALIDATE POST
it('Validates lesson plans rating when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      studentsRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('lessonPlansRate')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - STUDENTS RATING ** VALIDATE POST
it('Validates students rating when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      lessonPlansRate: 4,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('studentsRate')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - SCHOOL CULTURE RATING ** VALIDATE POST
it('Validates school culture rating when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      lessonPlansRate: 4,
      studentsRate: 3,
      overallRate: 3,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('schoolCultureRate')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - OVERALL RATING ** VALIDATE POST
it('Validates students rating when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      studentsRate: 3,
      lessonPlansRate: 4,
      schoolCultureRate: 4,
      goldList: false,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('overallRate')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - GOLD LIST ** VALIDATE POST
it('Validates gold list when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      studentsRate: 4,
      lessonPlansRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      redList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('goldList')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - RED LIST ** VALIDATE POST
it('Validates red list when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      studentsRate: 4,
      lessonPlansRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      notes: 'Okay administration. Lesson plans provided good and easy to follow but challenging at times with little prep time since I had morning duty. Kids okay for the most part. School culture was good. Overall okay.'
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('redList')
      expect(error.msg).toBe('Is required')
    })
})

// ** assignments - NOTES ** VALIDATE POST
it('Validates notes when creating assignment', () => {
  return request(app)
    .post('/viewassignments')
    .send({
      school: 'Juniper Elementary School',
      teacher: 'Sam Silas',
      grade: '4',
      date: '2018-03-14',
      adminRate: 3,
      studentsRate: 4,
      lessonPlansRate: 3,
      schoolCultureRate: 4,
      overallRate: 3,
      goldList: false,
      redList: false
    })
    .then(response => {
      expect(response.statusCode).toBe(400)
      const error = response.body.errors.validations[0]
      expect(error.param).toBe('notes')
      expect(error.msg).toBe('Is required')
    })
})

