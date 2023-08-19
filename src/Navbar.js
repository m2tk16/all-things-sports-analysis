import { useState } from 'react';
import  styles from './Navbar.module.css';

function Nav() {
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
    <div className="App">
      <header className="App-header">

        <nav className={`${styles.navbar}`}>

          {/* logo */}
          <a href='#home' className={`${styles.logo}`}>ATSA</a>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <a href='#home' className={`${styles.navLink}`}>Home</a>
            </li>
            <li onClick={removeActive}>
              <a href='#player-stats' className={`${styles.navLink}`}>Player Stats</a>
            </li>
            <li onClick={removeActive}>
              <a href='#team-stats' className={`${styles.navLink}`}>Team Stats</a>
            </li>
            <li onClick={removeActive}>
              <a href='#analysis' className={`${styles.navLink}`}>Analysis</a>
            </li>
          </ul>

          <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>

      </header>
    </div>
  );
}

export default Nav;