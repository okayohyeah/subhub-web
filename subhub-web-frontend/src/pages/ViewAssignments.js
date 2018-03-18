import React, { Component } from 'react';
import { Grid, PageHeader, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class ViewAssignments extends Component {
  render() {
    return (
      <Grid>
        <PageHeader id='header'>
          Your Assignments <small className='subtitle'>The good, the bad, the ugly</small>
        </PageHeader>

          <Row>
            <Col>
              <ListGroup>
                {this.props.assignments.map((assignment, index) =>{
                  return (
                    <ListGroupItem
                      key={index}
                      header={
                        <h4>
                          <span className='school'>{assignment.school}</span><br/>
                          <small className='teacher'>{assignment.teacher}</small><br/>
                          <small className='grade'>Grade: {assignment.grade}</small><br/>
                          <small className='date'>{assignment.date}</small>
                        </h4>
                      }>
                      <span className='adminRate'>Admin Rating: {assignment.adminRate}</span><br/>
                      <span className='lessonPlansRate'>Lesson Plans Rating: {assignment.lessonPlansRate}</span><br/>
                      <span className='studentsRate'>Students Rating: {assignment.studentsRate}</span><br/>
                      <span className='schoolCultureRate'>School Culture Rating: {assignment.schoolCultureRate}</span><br/>
                      <span className='overallRate'>Overall Rating: {assignment.overallRate}</span><br/>
                      <span className='goldList'>Gold List: {assignment.goldList}</span><br/>
                      <span className='redList'>Red List: {assignment.redList}</span><br/>
                      <span className='notes'>Notes: {assignment.notes}</span>

                    </ListGroupItem>
                  )
                })}
              </ListGroup>
            </Col>
          </Row>
      </Grid>

    );
  }
}

export default ViewAssignments;