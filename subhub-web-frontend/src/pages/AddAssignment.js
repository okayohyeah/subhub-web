import React, { Component } from 'react';
import { Grid, PageHeader, Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';

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
        adminRate: 1,
        lessonPlansRate: 1,
        studentsRate: 1,
        schoolCultureRate: 1,
        overallRate: 1,
        goldList: 'off',
        redList: 'off',
        notes: ''
      }
    }
  }

  handleChange(event){
    const formState = Object.assign({}, this.state.form);
    formState[event.target.name] = event.target.value;
    this.setState({ ...this.state, form: formState });
    console.log('form state', formState);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form);
  }

  handleAdminRatingChange = (rating) => {
    // spread operator copies state
    this.setState({...this.state, form: {...this.state.form, adminRate: rating}});
    //check rating
    console.log('admin rating', rating);
  }

  handleLessonPlansRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, lessonPlansRate: rating}});
    //check rating
    console.log('lesson plans rating', rating);
  }

  handleStudentsRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, studentsRate: rating}});
    //check rating
    console.log('students rating', rating);
  }

  handleSchoolCultureRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, schoolCultureRate: rating}});
    //check rating
    console.log('school culture rating', rating);
  }

  handleOverallRatingChange = (rating) => {
    this.setState({...this.state, form: {...this.state.form, overallRate: rating}});
    //check rating
    console.log('overall rating', rating);
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
            <Col xs={5} md={5}>
              <FormGroup>
                <ControlLabel id='school'>School Name</ControlLabel>
                <FormControl type='text' name='school' placeholder='Juniper Elementary School' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.school}
                  />
              </FormGroup>

              <FormGroup>
                <ControlLabel id='teacher'>Teacher Name</ControlLabel>
                <FormControl type='text' name='teacher' placeholder='Bernice Garcia' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.teacher}/>
              </FormGroup>

              <FormGroup>
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
              </FormGroup>

              <FormGroup>
                <ControlLabel id='date'>Date of Assignment</ControlLabel>
                <FormControl type='date' name='date' placeholder='03-13-2018' 
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.date} />
              </FormGroup>

              // **** RATINGS ***
              // *********************************
              <FormGroup>
                <ControlLabel id='adminRate'>Rate the School Administration
                </ControlLabel><br/>
                <Rating 
                  name='adminRate'
                  emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                  fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                  initialRating={this.state.form.adminRate}
                  onChange={this.handleAdminRatingChange}
                  />
                  
              </FormGroup>

              <FormGroup>
                <ControlLabel id='lessonPlansRate'>Rate the Lesson Plans
                </ControlLabel><br/>
                  <Rating 
                    name='lessonPlansRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.lessonPlansRate}
                    onChange={this.handleLessonPlansRatingChange}
                  />
              </FormGroup>

              <FormGroup>
                <ControlLabel id='studentsRate'>Rate the Students in Your Classes
                </ControlLabel><br/>
                  <Rating 
                    name='studentsRate' 
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.studentsRate}
                    onChange={this.handleStudentsRatingChange}
                  />
              </FormGroup>
            </Col>

            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5}>
              <br/>
              <FormGroup>
                <ControlLabel id='schoolCultureRate'>Rate the School Culture
                </ControlLabel><br/>
                  <Rating 
                    name='schoolCultureRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.schoolCultureRate}
                    onChange={this.handleSchoolCultureRatingChange}
                  />
              </FormGroup>

              <FormGroup>
                <ControlLabel id='overallRate'>Rate the Assignment Overall
                </ControlLabel><br/>
                  <Rating 
                    name='overallRate'
                    emptySymbol={<img src='../star-empty.png' className='icon' alt='empty star' />}
                    fullSymbol={<img src='../star-full.png' className='icon' alt='filled star'/>}
                    initialRating={this.state.form.overallRate}
                    onChange={this.handleOverallRatingChange}
                  />
              </FormGroup>

              <FormGroup>
                <ControlLabel id='goldList'>The Gold List
                <br/><i>I would go back in a heartbeat. Add it to my favorites.</i>
                </ControlLabel><br/>
                  <Checkbox
                    name='goldList'
                    checked={this.state.goldList}
                    onChange={this.handleChange.bind(this)}>Add to Gold List
                  </Checkbox>
              </FormGroup>

              <FormGroup>
                <ControlLabel id='redList'>The Red List
                <br/><i>It was a difficult assignment. Add it to the Red List. I want to remember to avoid this assignment in the future.</i>
                </ControlLabel><br/>
                  <Checkbox
                    name='redList'
                    checked={this.state.redList}
                    onChange={this.handleChange.bind(this)}>Add to Red List
                  </Checkbox>
              </FormGroup>

              <FormGroup>
                <ControlLabel id='notes'>Notes about the Assignment</ControlLabel>
                <FormControl componentClass='textarea' name='notes' placeholder='Great administration. Helpful and friendly. Lesson plans were solid. Kids were great. Only a few problems. Recess duty. Was allowed to leave without having to stay until 3.'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.notes} />
              </FormGroup>

            </Col>
          </Row>

          <Row>
            <Col xs={5} md={5}>
            </Col>
            <Col xs={2} md={2}>
              <Button type='submit' className='btn btn-secondary' id='submit' onClick={this.handleSubmit.bind(this)}>Submit Assignment</Button>
            </Col>
          </Row>


        </form>
      </Grid>
    ); 
  }
}

export default AddAssignment;