import React, { useState } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

  const [isOpen, setIsopen] = useState(false);

  const handleIsOpen = () => {
    setIsopen(!isOpen);
  }

  const hamburguerIcon = 
  <svg onClick={handleIsOpen} className="bi bi-list" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
  </svg>;

  const closeIcon = 
  <svg onClick={handleIsOpen} className="bi bi-x" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
  </svg>;

  return (
    <>
      <header>
        <nav className="navBar">
          <div className={`navItems ${isOpen && "open"}`}>
            <Link className='links' to={'/'} onClick={handleIsOpen}>Home</Link>
            <Link className='links' to={'/promos'} onClick={handleIsOpen} >Promos</Link>
            <Link className='links' to={'/cabanas'} onClick={handleIsOpen} >Cabañas</Link>
          </div>
          <div className="toggles">
            { isOpen ? closeIcon : hamburguerIcon }
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar