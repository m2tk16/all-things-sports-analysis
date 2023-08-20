import React from 'react';
import { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import  styles from './Navbar.module.css';
import {
  Text,
} from "@aws-amplify/ui-react";

const Navbar = () => {
      // adding the states 
  const [isActive, setIsActive] = useState(false);
  const [tagValue, setTagValue] = useState('');

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
    console.log(currentPath())
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
    console.log(currentPath())
  };



const currentPath = () => {
  const value = ""
  const path = window.location.pathname.replace("/", "").replace("-", " ")
  if (path == "") {
    const value = "Home"
  }  else {
    const value = path
  }
  console.log("Current path: " + path);
  return path;
}

  return (
    <Nav className={`${styles.navBar}`}>
      <NavMenu className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
        <img className={`${styles.imgLogo}`} src="https://allthingssportsanalysis-images.s3.amazonaws.com/ATSA_logo_3.0.png"/>
        <NavLink to='/' className={`${styles.navLink}`} onClick={removeActive} >Home</NavLink>
        <NavLink to='/player-stats' className={`${styles.navLink}`} onClick={removeActive} >Player Stats</NavLink>
        <NavLink to='/team-stats' className={`${styles.navLink}`} onClick={removeActive} >Team Stats</NavLink>
        <NavLink to='/fantasy' className={`${styles.navLink}`}onClick={removeActive}  >Fantasy</NavLink>
        <NavLink to='/fanduel-optimizer' className={`${styles.navLink}`} onClick={removeActive} >Fanduel Optimizer</NavLink>
        <NavLink to='/parlay' className={`${styles.navLink}`} onClick={removeActive} >Parlay</NavLink>
      </NavMenu>
      <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
        <span className={`${styles.bar}`}></span>
      </div>
    </Nav>
  );
};
  
export default Navbar;