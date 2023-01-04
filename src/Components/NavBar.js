import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/posts'>POST</Link>
        <Link to='/profile'>PROFILE</Link>
        <Link to='/register'>REGISTER</Link>
      </nav>
    </header>
  )
}

export default NavBar;