import React, {Component} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
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
    this.state = {
      user: null,
      discussions: []
    }
  }

// login stuff // 

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

  handleNewDiscussion = (discussion) => {
    this.setState({
      discussions: [...this.state.discussions, discussion]
    })
  }
  


// lifecycle method // 
componentDidMount() {
  let user = userService.getUser();
  this.setState({user});
  fetch('/api/discussions')
    .then(data => data.json())
    .then(data => this.setState({discussions: data}))
}




  render() {
    return (
      <div>
        <div className='titleBackground'>
        <h1 className='title'>
          Community
        </h1>
        <h2 className='subtitle'>
        a place for neighbors. 
        </h2>
        </div>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
          
          <Switch>
            <Route exact path='/' render={() =>
              <MainPage
                discussions={this.state.discussions}
                handleNewDiscussion={this.handleNewDiscussion}
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
        
      </div>
    );
  }
}

export default App;
