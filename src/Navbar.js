import React from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
import  styles from './Navbar.module.css';


const Navbar = () => {
      // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  };


  return (
    <Nav className={`${styles.navBar}`}>
      <NavMenu className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
        <img className={`${styles.imgLogo}`} src="https://allthingssportsanalysis-images.s3.amazonaws.com/ATSA_logo_3.0.png"/>
        <NavLink to='/' className={`${styles.navLink}`} >Home</NavLink>
        <NavLink to='/player-stats' className={`${styles.navLink}`} >Player Stats</NavLink>
        <NavLink to='/team-stats' className={`${styles.navLink}`} >Team Stats</NavLink>
        <NavLink to='/fantasy' className={`${styles.navLink}`} >Fantasy</NavLink>
        <NavLink to='/fanduel-optimizer' className={`${styles.navLink}`} >Fanduel Optimizer</NavLink>
        <NavLink to='/parlay' className={`${styles.navLink}`}>Parlay</NavLink>
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