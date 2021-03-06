import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ? 
 
    <div>
      <Link to ='/profile' className='NavBar-link'> Profile </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/resources' className='NavBar-link'>Events</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >Log Out</Link>
    </div>
    :
    <div>
      <Link to="/login" className='NavBar-link'>Log In</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>Sign Up</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/resources' className='NavBar-link'>Events</Link>
    </div>;



  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};


export default NavBar;