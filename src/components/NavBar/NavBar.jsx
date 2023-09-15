import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header>
          <nav>
              <Link to={'/'}>Home</Link>
              <Link to={'/promos'} >Promos</Link>
              <Link to={'/cabanas'} >Cabañas</Link>
          </nav>
      </header>
    </>
  )
}

export default NavBar