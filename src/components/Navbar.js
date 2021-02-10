import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="navbar_logo"><a href="/">PersonaAI</a></div>
          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <li><a href="/">
                Alert less than 40 characters
              </a></li>
            </ul>
          </div>
          <div className="spacer" />
          <Link to="#" className="menu-bars">
            <button className="toggle-button" onClick={showSidebar} >
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
              <div className="toggle-button__line" />
            </button>
          </Link>
        </div>
      
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to="#" className="menu-bars">
                <button>
                  X
                </button>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
    
          </ul>
        </nav>

    </>
  )
}

export default Navbar
