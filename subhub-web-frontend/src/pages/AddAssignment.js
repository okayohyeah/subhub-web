import React, { Component } from 'react';
import { Grid, PageHeader, Col, FormGroup, ControlLabel, FormControl, Radio, Button } from 'react-bootstrap';

class AddAssignment extends Component {
  render() {
    return (

      <Grid>
        <PageHeader id='header'>
          How was your day? <small className='subtitle'>Let us make a record of your assignment.</small>
        </PageHeader>
        <form id='assignment-form'>
          <h3 className='text-success'>Record your assignment</h3>

          <Col xs={6} md={4}>
            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-primary'>School Name</ControlLabel>
              <FormControl type='text' placeholder='Juniper Elementary School' />
            </FormGroup>

            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-primary'>Teacher Name</ControlLabel>{' '}
              <FormControl type='text' placeholder='Bernice Garcia' />
            </FormGroup>

            <FormGroup
              controlId='formsControlsSelect'
            >
              <ControlLabel className='text-primary'>Grade Level</ControlLabel>{' '}
              <FormControl componentClass='select'>
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


            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-primary'>Date of Assignment</ControlLabel>
              <FormControl type='integer' placeholder='2018-03-13' />
            </FormGroup>

            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-primary'>Rate the Assignment
              <br/><i>How did it go?</i>
              <br/>1=Horrible 2=Bad 3=Okay 4=Good 5=Awesome<br/>
              </ControlLabel>
              <br/><Radio name="radioGroup" type='integer' value='1' inline>
                1
              </Radio>{' '}
              <Radio name="radioGroup" type='integer' value='2'inline>
                2
              </Radio>{' '}
              <Radio name="radioGroup" type='integer' value='3'inline>
                3
              </Radio>{' '}
              <Radio name="radioGroup" type='integer' value='4'inline>
                4
              </Radio>{' '}
              <Radio name="radioGroup" type='integer' value='5'inline>
                5
              </Radio>
            </FormGroup>

            <FormGroup>
              <ControlLabel className='text-primary'>Notes about the assignment</ControlLabel>
              <FormControl componentClass='textarea' placeholder='Great administration. Helpful and friendly. Lesson plans were solid. Kids were great. Only a few problems. Recess duty. Was allowed to leave without having to stay until 3.' />
            </FormGroup>

            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-warning'>The Gold List?
              <br/><i>I would go back in a heartbeat. Add it to my favorites, the Gold List.</i>
              </ControlLabel>
              <br/><Radio name="radioGroup" type='text' value='Yes' inline>
                Yes!
              </Radio>{' '}
              <Radio name="radioGroup" type='text' value='No'inline>
                No
              </Radio>
            </FormGroup>

            <FormGroup
              controlId='formBasicText'
            >
              <ControlLabel className='text-danger'>The Avoid List?
              <br/><i>It was a difficult assignment. Add it to the Avoid List. I want to remember not to book this again.</i>
              </ControlLabel>
              <br/><Radio name="radioGroup" type='text' value='Yes' inline>
                Yes!
              </Radio>{' '}
              <Radio name="radioGroup" type='text' value='No'inline>
                No
              </Radio>
            </FormGroup>

            <Button type='submit' className='btn btn-secondary'>Submit Assignment</Button>
          </Col>
        </form>
      </Grid>
    ); 
  }
}

export default AddAssignment;

    