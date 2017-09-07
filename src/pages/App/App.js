import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import ProfilePage from '../ProfilePage/ProfilePage.js';
import ResourcesPage from '../ResourcesPage/ResourcesPage.js';
// import {Link} from 'react-router-dom';
import MainPage from '../MainPage/MainPage.js';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
    }
  }




  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
    }
  
    handleSignup = () => {
      this.setState({user: userService.getUser()});
    }
  
    handleLogin = () => {
      this.setState({user: userService.getUser()});
    }
  


// lifecycle method // 
componentDidMount() {
  let user = userService.getUser();
  this.setState({user});
}




  render() {
    return (
      <div>
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
            <Route exact path='/signup' render={(props) => 
              <SignupPage 
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
              />
            }/>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
