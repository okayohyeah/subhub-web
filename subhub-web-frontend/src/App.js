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
      apiUrl: 'http://localhost:3000',
      assignments: [],
      newAssignmentSuccess: false,
      errors: null
    }
  }


  componentWillMount() {
    fetch(`${this.state.apiUrl}/viewassignments`)
    .then((rawResponse) => {
      return rawResponse.json();
    })
    .then((parsedResponse) => {
      this.setState({assignments: parsedResponse.assignments});
    })
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
