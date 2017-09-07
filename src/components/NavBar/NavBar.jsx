import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';


const NavBar = (props) => {
 

  return (
    <div className='NavBar'>
      <Link to ='/profile' className='NavBar-link'> PROFILE </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/resources' className='NavBar-link'>RESOURCES</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="/resources" class="btn btn-primary"><span class="fa fa-facebook"></span>Sign In With Facebook</a>
    </div>
  );
};


export default NavBar;