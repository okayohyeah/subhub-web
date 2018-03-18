import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, PageHeader } from 'react-bootstrap';

import NavBar from './pages/NavBar';
import AddAssignment from './pages/AddAssignment';
import ViewAssignments from './pages/ViewAssignments';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      assignments: [
        {
          id: 1,
          school: 'Oak Hill Elementary School',
          teacher: 'John Blum',
          grade: '2',
          date: '2018-02-12', 
          adminRate: 4,
          lessonPlansRate: 5,
          studentsRate: 5,
          schoolCultureRate: 4,
          overallRate: 5,
          goldList: true,
          redList: false,
          notes: 'Best assignment ever. Solid!'
        },
        {
          id: 2,
          school: 'LR Green Elementary School',
          teacher: 'Amanda Rouse',
          grade: 'TK',
          date: '2018-02-12', 
          adminRate: 3,
          lessonPlansRate: 4,
          studentsRate: 4,
          schoolCultureRate: 3,
          overallRate: 4,
          goldList: false,
          redList: false,
          notes: 'Just another day with some kids.'
        },
        {
          id: 3,
          school: 'Rose Elementary School',
          teacher: 'Armando Lopez',
          grade: '4/5',
          date: '2017-11-22', 
          adminRate: 1,
          lessonPlansRate: 3,
          studentsRate: 1,
          schoolCultureRate: 2,
          overallRate: 1,
          goldList: false,
          redList: true,
          notes: 'Never Again! Worst school, class, students. Felt bad when I walked in.'
        },
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={props => (
            <div>
              <NavBar />
              <Grid>
                <PageHeader id='header'>
                  SubHub <small className='subtitle'>The place for subs</small>
                </PageHeader>
                <h2 id='greeting'>How was your day?</h2>
                <h4>
                  <Link to='/addassignment' id='add-assignment' className='links'>
                    + Add assignment
                  </Link>
                </h4>
              </Grid>
            </div>
          )} />   

          <Route exact path='/addassignment' render={props => (
            <div>
              <NavBar />
              <AddAssignment />
            </div>
          )} />   

          <Route exact path='/viewassignments' render={props => (
            <div>
              <NavBar />
              <ViewAssignments assignments={this.state.assignments} />
            </div>
          )} />   

          <Route exact path='/goldlist' render={props => (
            <div>
              <NavBar />
              <Grid>
                <PageHeader id='header'>
                  The Gold List <small className='subtitle'>Assignments that were golden!</small>
                </PageHeader>
              </Grid>
            </div>
          )} />  

          <Route exact path='/redlist' render={props => (
            <div>
              <NavBar />
              <Grid>
                <PageHeader id='header'>
                  The Red List <small className='subtitle'>Never forget</small>
                </PageHeader>
              </Grid>
            </div>
          )} />    

        </div>
      </Router>
    );
  }
}

export default App;
