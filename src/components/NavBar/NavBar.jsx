import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
    let nav = props.user ? 
 
    <div>
      <Link to ='/profile' className='NavBar-link'> PROFILE </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/resources' className='NavBar-link'>RESOURCES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>
    :
    <div>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/resources' className='NavBar-link'>RESOURCES</Link>
    </div>;


  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};


export default NavBar;