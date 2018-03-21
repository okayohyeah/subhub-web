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
                          <small className='date'>{assignment.date}</small><br/>
                          <small className='adminRate'>Admin Rating: {assignment.adminRate}</small><br/>
                          <small className='lessonPlansRate'>Lesson Plans Rating: {assignment.lessonPlansRate}</small><br/>
                          <small className='studentsRate'>Students Rating: {assignment.studentsRate}</small><br/>
                          <small className='schoolCultureRate'>School Culture Rating: {assignment.schoolCultureRate}</small><br/>
                          <small className='overallRate'>Overall Rating: {assignment.overallRate}</small><br/>
                          <small className='goldList'>Gold List: {assignment.goldList}</small><br/>
                          <small className='redList'>Red List: {assignment.redList}</small><br/>
                          <small className='notes'>Notes: {assignment.notes}</small>
                        </h4>
                      }>
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