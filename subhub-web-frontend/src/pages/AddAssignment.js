import React, { Component } from 'react';
import { Grid, PageHeader, Row, Col, FormGroup, ControlLabel, FormControl, Radio, Button } from 'react-bootstrap';

class AddAssignment extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      form: {
        school: '',
        teacher: '',
        grade: '',
        date: '',
        adminRate: '',
        lessonPlansRate: '',
        studentsRate: '',
        schoolCultureRate: '',
        overallRate: '',
        goldList: false,
        redList: false,
        notes: ''
      }
    }
  }

  handleChange(event){
  const formState = Object.assign({}, this.state.form)
  formState[event.target.name] = event.target.value
  this.setState({form: formState})
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

              <FormGroup>
                <ControlLabel id='adminRate'>Rate the School Administration
                <br/>1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome<br/>
                </ControlLabel>
                <FormControl type='integer' name='adminRate'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.adminRate} />
                  <br/><Radio name='radioGroup' type='integer' value='1' inline>
                    1
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='2'inline>
                    2
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='3'inline>
                    3
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='4'inline>
                    4
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='5'inline>
                    5
                  </Radio>
              </FormGroup>

              <FormGroup>
                <ControlLabel id='lessonPlansRate'>Rate the Lesson Plans
                <br/>1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome<br/>
                </ControlLabel>
                <FormControl type='integer' name='lessonPlansRate'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.lessonPlansRate} />
                  <br/><Radio name='radioGroup' type='integer' value='1' inline>
                    1
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='2'inline>
                    2
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='3'inline>
                    3
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='4'inline>
                    4
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='5'inline>
                    5
                  </Radio>
              </FormGroup>

              <FormGroup>
                <ControlLabel id='studentsRate'>Rate the Students in Your Classes
                <br/>1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome<br/>
                </ControlLabel>
                <FormControl type='integer' name='studentsRate'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.studentsRate} />
                  <br/><Radio name='radioGroup' type='integer' value='1' inline>
                    1
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='2'inline>
                    2
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='3'inline>
                    3
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='4'inline>
                    4
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='5'inline>
                    5
                  </Radio>
              </FormGroup>
            </Col>
            <Col xs={1} md={1}>
            </Col>

            <Col xs={5} md={5}>
              <br/>
              <FormGroup>
                <ControlLabel id='schoolCultureRate'>Rate the School Culture
                <br/>1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome<br/>
                </ControlLabel>
                <FormControl type='integer' name='schoolCultureRate'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.schoolCultureRate} />
                  <br/><Radio name='radioGroup' type='integer' value='1' inline>
                    1
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='2'inline>
                    2
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='3'inline>
                    3
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='4'inline>
                    4
                  </Radio>{' '}
                  <Radio name='radioGroup' type='integer' value='5'inline>
                    5
                  </Radio>
              </FormGroup>

              <FormGroup>
                  <ControlLabel id='overallRate'>Rate the Assignment Overall
                  <br/>1=Avoid 2=Not Great 3=Okay 4=Good 5=Awesome<br/>
                  </ControlLabel>
                  <FormControl type='integer' name='overallRate'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.overallRate} />
                    <br/><Radio name='radioGroup' type='integer' value='1' inline>
                      1
                    </Radio>{' '}
                    <Radio name='radioGroup' type='integer' value='2'inline>
                      2
                    </Radio>{' '}
                    <Radio name='radioGroup' type='integer' value='3'inline>
                      3
                    </Radio>{' '}
                    <Radio name='radioGroup' type='integer' value='4'inline>
                      4
                    </Radio>{' '}
                    <Radio name='radioGroup' type='integer' value='5'inline>
                      5
                    </Radio>
                </FormGroup>

                <FormGroup>
                <ControlLabel id='goldList'>The Gold List
                <br/><i>I would go back in a heartbeat. Add it to my favorites.</i>
                </ControlLabel>
                <FormControl type='boolean' name='goldList'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.goldList} />
                  <br/><Radio name='radioGroup' type='boolean' value='true' inline>
                    Yes
                  </Radio>{' '}
                  <Radio name='radioGroup' type='boolean' value='false' inline>
                    No
                  </Radio>
              </FormGroup>

              <FormGroup>
                <ControlLabel id='redList'>The Red List
                <br/><i>It was a difficult assignment. Add it to the Red List. I want to remember to avoid this assignment in the future.</i>
                </ControlLabel>
                <FormControl type='boolean' name='redList'
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.redList} />
                  <br/><Radio name='radioGroup' type='boolean' value='true' inline>
                    Yes
                  </Radio>{' '}
                  <Radio name='radioGroup' type='boolean' value='false' inline>
                    No
                  </Radio>
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
              <Button type='submit' className='btn btn-secondary'>Submit Assignment</Button>
            </Col>
          </Row>


        </form>
      </Grid>
    ); 
  }
}

export default AddAssignment;