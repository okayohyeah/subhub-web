import React, { Component } from 'react';
import { Grid, PageHeader, Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, HelpBlock, Alert } from 'react-bootstrap';

var Rating = require('react-rating')

class AddAssignment extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      form: {
        school: '',
        teacher: '',
        grade: '',
        date: '',
        adminRate: 0,
        lessonPlansRate: 0,
        studentsRate: 0,
        schoolCultureRate: 0,
        overallRate: 0,
        goldList: false,
        redList: false,
        notes: ''
      }
    }
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form);
    formState[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({ ...this.state, form: formState });
    console.log('form state', formState);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form);
  }

  handleAdminRatingChange = (rating) => {
    // spread operator copies state
    this.setState({...this.state, form: {...this.state.form, adminRate: rating}});
  }

  handleLessonPlansRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, lessonPlansRate: rating}});
  }

  handleStudentsRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, studentsRate: rating}});
  }

  handleSchoolCultureRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, schoolCultureRate: rating}});
  }

  handleOverallRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, overallRate: rating}});
  }

  errorsFor(attribute) {
    var errorString='';
    if(this.props.errors) {
      const errors = this.props.errors.filter(error => error.param === attribute);
      if(errors) {
        errorString = errors.map(error => error.msg).join(', ')
      }
    }
    return errorString === '' ? null : errorString;
  }

  render() {
    return (

      <Grid>
        <PageHeader id='header'>
          How was your day? <small className='subtitle'>Let us make a record of your assignment.</small>
        </PageHeader>

        <form id='assignment-form'>

          <h3>Record your assignment</h3>

          <Row>
            <Col xs={12} md={8}>
              {this.props.errors && 
                <Alert bsStyle='danger'>
                  We are missing input in the form. Please check each field and submit again.
                </Alert>
              }
            </Col>
          </Row>
          
          <Row>
            <Col xs={5} md={5}>
              <FormGroup
                id='school-form-group'
                validationState={this.errorsFor('school') && 'error'}>
                <ControlLabel id='school'>School Name</ControlLabel>
                <FormControl type='text' name='school' placeholder='Juniper Elementary School' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.school}/>
                  {this.errorsFor('school') && <HelpBlock id='school-help-block'>{this.errorsFor('school')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='teacher-form-group'
                validationState={this.errorsFor('teacher') && 'error'}>
                <ControlLabel id='teacher'>Teacher Name</ControlLabel>
                <FormControl type='text' name='teacher' placeholder='Bernice Garcia' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.teacher}/>
                  {this.errorsFor('teacher') && <HelpBlock id='teacher-help-block'>{this.errorsFor('teacher')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='grade-form-group'
                validationState={this.errorsFor('grade') && 'error'}>
                <ControlLabel id='grade'>Grade Level</ControlLabel>
                <FormControl componentClass='select' type='text' name='grade' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.grade}>
                  <option value='select'>Select Grade Level</option>
                  <option value='TK'>Pre-school</option>
                  <option value='K'>Kindergarten</option>
                  <option value='TK/K'>Pre-school/Kindergarten Combo</option>
                  <option value='1'>1st Grade</option>
                  <option value='1/2'>1st/2nd Grade Combo</option>
                  <option value='2'>2nd Grade</option>
                  <option value='2/3'>2nd/3rd Grade Combo</option>
                  <option value='3'>3rd Grade</option>
                  <option value='3/4'>3rd/4th Grade Combo</option>
                  <option value='4'>4th Grade</option>
                  <option value='4/5'>4th/5th Grade Combo</option>
                  <option value='5'>5th Grade</option>
                  <option value='Roving'>Roving Teacher</option>
                  <option value='PE'>PE Teacher</option>
                  <option value='Other'>Other - not listed</option>
                </FormControl>
                {this.errorsFor('grade') && <HelpBlock id='grade-help-block'>{this.errorsFor('grade')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='date-form-group'
                validationState={this.errorsFor('date') && 'error'}>
                <ControlLabel id='date'>Date of Assignment</ControlLabel>
                <FormControl type='date' name='date' placeholder='03-13-2018' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.date} />
                  {this.errorsFor('date') && <HelpBlock id='date-help-block'>{this.errorsFor('date')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='adminRate-form-group'
                validationState={this.errorsFor('adminRate') && 'error'}>
                <ControlLabel id='adminRate'>Rate the School Administration
                </ControlLabel><br/>
                <Rating 
                  name='adminRate'
                  emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                  fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                  initialRating={this.state.form.adminRate}
                  onChange={this.handleAdminRatingChange} />
                  {this.errorsFor('adminRate') && <HelpBlock id='adminRate-help-block'>{this.errorsFor('adminRate')}</HelpBlock>}
                  
              </FormGroup>

              <FormGroup
                id='lessonPlansRate-form-group'
                validationState={this.errorsFor('lessonPlansRate') && 'error'}>
                <ControlLabel id='lessonPlansRate'>Rate the Lesson Plans
                </ControlLabel><br/>
                  <Rating 
                    name='lessonPlansRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.lessonPlansRate}
                    onChange={this.handleLessonPlansRatingChange} />
                    {this.errorsFor('lessonPlansRate') && <HelpBlock id='lessonPlansRate-help-block'>{this.errorsFor('lessonPlansRate')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='studentsRate-form-group'
                validationState={this.errorsFor('studentsRate') && 'error'}>
                <ControlLabel id='studentsRate'>Rate the Students in Your Classes
                </ControlLabel><br/>
                  <Rating 
                    name='studentsRate' 
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.studentsRate}
                    onChange={this.handleStudentsRatingChange} />
                    {this.errorsFor('studentsRate') && <HelpBlock id='studentsRate-help-block'>{this.errorsFor('studentsRate')}</HelpBlock>}
              </FormGroup>
            </Col>

            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5}>
              <br/>
              <FormGroup
                id='schoolCultureRate-form-group'
                validationState={this.errorsFor('schoolCultureRate') && 'error'}>
                <ControlLabel id='schoolCultureRate'>Rate the School Culture
                </ControlLabel><br/>
                  <Rating 
                    name='schoolCultureRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.schoolCultureRate}
                    onChange={this.handleSchoolCultureRatingChange} />
                    {this.errorsFor('schoolCultureRate') && <HelpBlock id='schoolCultureRate-help-block'>{this.errorsFor('schoolCultureRate')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='overallRate-form-group'
                validationState={this.errorsFor('overallRate') && 'error'}>
                <ControlLabel id='overallRate'>Rate the Assignment Overall
                </ControlLabel><br/>
                  <Rating 
                    name='overallRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.overallRate}
                    onChange={this.handleOverallRatingChange} />
                    {this.errorsFor('overallRate') && <HelpBlock id='overallRate-help-block'>{this.errorsFor('overallRate')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='goldList-form-group'
                validationState={this.errorsFor('goldList') && 'error'}>
                <ControlLabel id='goldList'>The Gold List
                <br/><i>I would go back in a heartbeat. Add it to my favorites.</i>
                </ControlLabel><br/>
                  <Checkbox
                    name='goldList'
                    checked={this.state.goldList}
                    onChange={this.handleChange.bind(this)}>Add to Gold List
                  </Checkbox>{this.errorsFor('goldList') && <HelpBlock id='goldList-help-block'>{this.errorsFor('goldList')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='redList-form-group'
                validationState={this.errorsFor('redList') && 'error'}>
                <ControlLabel id='redList'>The Red List
                <br/><i>It was a difficult assignment. Add it to the Red List. I want to remember to avoid this assignment in the future.</i>
                </ControlLabel><br/>
                  <Checkbox
                    name='redList'
                    checked={this.state.redList}
                    onChange={this.handleChange.bind(this)}>Add to Red List
                  </Checkbox>{this.errorsFor('redList') && <HelpBlock id='redList-help-block'>{this.errorsFor('redList')}</HelpBlock>}
              </FormGroup>

              <FormGroup
                id='notes-form-group'
                validationState={this.errorsFor('notes') && 'error'}>
                <ControlLabel id='notes'>Notes about the Assignment</ControlLabel>
                  <FormControl componentClass='textarea' name='notes' placeholder='Great administration. Helpful and friendly. Lesson plans were solid. Kids were great. Only a few problems. Recess duty. Was allowed to leave without having to stay until 3.'
                    onChange={this.handleChange.bind(this)}
                    value={this.state.form.notes} />
                    {this.errorsFor('notes') && <HelpBlock id='notes-help-block'>{this.errorsFor('notes')}</HelpBlock>}
              </FormGroup>

            </Col>
          </Row>

          <Row>
            <Col xs={5} md={5}>
            </Col>
            <Col xs={2} md={2}>
              <Button type='submit' className='btn btn-secondary' id='submit' onClick={this.handleSubmit.bind(this)}>Add Assignment</Button>
            </Col>
          </Row>

        </form>
      </Grid>
    ); 
  }
}

export default AddAssignment;