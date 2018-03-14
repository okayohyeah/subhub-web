import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, PageHeader } from 'react-bootstrap';

import NavBar from './pages/NavBar';
import styles from './App.css';

class App extends Component {
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
              <Grid>
                <PageHeader id='header'>
                  How was your day? <small className='subtitle'>Let us make a record of your assignment.</small>
                </PageHeader>
              </Grid>
            </div>
          )} />   

          <Route exact path='/assignments' render={props => (
            <div>
              <NavBar />
              <Grid>
                <PageHeader id='header'>
                  Your Assignments <small className='subtitle'>The good, the bad, the ugly</small>
                </PageHeader>
              </Grid>
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

          <Route exact path='/avoidlist' render={props => (
            <div>
              <NavBar />
              <Grid>
                <PageHeader id='header'>
                  The Avoid List <small className='subtitle'>Never forget</small>
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
