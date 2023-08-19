import { useState } from 'react';
import  styles from './Navbar.module.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Nav = () => {
    
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }


  return (
      <header className="App-header">
     {/*
        <nav className={`${styles.navbar}`}>
         <Link to="/" className={`${styles.logo}`}>ATSA</Link>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
                <Link to="/" className={`${styles.navLink}`}>Home</Link>
            </li>

         
            <li onClick={removeActive}>
              <a href='/player-stats' className={`${styles.navLink}`}>Player Stats</a>
            </li>
            <li onClick={removeActive}>
              <a href='/team-stats' className={`${styles.navLink}`}>Team Stats</a>
            </li>
            <li onClick={removeActive}>
              <a href='/fantasy' className={`${styles.navLink}`}>Fantasy</a>
            </li>
            <li onClick={removeActive}>
              <a href='/fanduel-optimizer' className={`${styles.navLink}`}>Fanduel Optimizer</a>
            </li>
            <li onClick={removeActive}>
              <a href='/parlay' className={`${styles.navLink}`}>Parlay</a>
            </li>
  
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
    */}
      </header>
  );
}

export default Nav;