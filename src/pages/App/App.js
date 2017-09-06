import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import ProfilePage from '../ProfilePage/ProfilePage.js';
import ResourcesPage from '../ResourcesPage/ResourcesPage.js';
// import {Link} from 'react-router-dom';
import MainPage from '../MainPage/MainPage.js';




class App extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {

    }

  }

  render() {
    return (
      <div>
        <header className='header-footer'> --- Community Header ---- </header>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <MainPage 
              />
            } />
            <Route exact path='/profile' render={() =>
              <ProfilePage
              />
            } />
            <Route exact path='/resources' render={() =>
              <ResourcesPage
              />
            } />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
