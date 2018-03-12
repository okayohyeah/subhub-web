var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var Assignment = require('./models').Assignment;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(validator());

// ROUTES
// ** root route
app.get('/', (req, res) => {
  res.json({message: 'API Example App'});
});

// **assignments ** GET ROUTE
app.get('/assignments', (req, res) => {
  Assignment.findAll().then((assignments) => {
    res.json({assignments: assignments});
  })
});

// **assignments ** POST ROUTE 
app.post('/assignments', (req, res) => {

  // setup validation check for all params
  req.checkBody('school', 'Is required').notEmpty();
  req.checkBody('teacher', 'Is required').notEmpty();
  req.checkBody('grade', 'Is required').notEmpty();
  req.checkBody('date', 'Is required').notEmpty();
  req.checkBody('rating', 'Is required').notEmpty();
  req.checkBody('notes', 'Is required').notEmpty();

  // run validations
  req.getValidationResult()
    .then((validationErrors) => {
      // no errors, create assignment
      if(validationErrors.isEmpty()) {
        Assignment.create({
          school: req.body.school,
          teacher: req.body.teacher,
          grade: req.body.grade,
          date: req.body.date,
          rating: req.body.rating,
          notes: req.body.notes
        }).then((assignment) => {
          res.status(201)
          res.json({assignment: assignment})
        })
      } else {
        res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
      }
  })
});

module.exports = app