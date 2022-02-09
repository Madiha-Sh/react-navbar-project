import React, { useState, Component, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { links, social } from './data';

const NavBar = () => {
  const RefContainer = useRef(null);
  const linksRef = useRef(null);
  const [showContainer, setShowContainer] = useState(false);
  
  const handleToggle = () => {
    setShowContainer(!showContainer);
  };
  
  useEffect(() => {
    if(showContainer){
      const linksHeight = linksRef.current.getBoundingClientRect().height;
      RefContainer.current.style.height = `${linksHeight}px`;
    } else {
      RefContainer.current.style.height = '0px';
    }
  }, [showContainer]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src='https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/11-navbar/final/src/logo.svg' alt="logo" className="logo" />
          <button className="nav-toggle" onClick={handleToggle}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={RefContainer}>
          <ul className='links' ref={linksRef}>
            {links.map(link => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(link => {
            const {id, url, icon} = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;