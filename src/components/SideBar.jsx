import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/SideBar.css';
import About from './About';
import Contact from './Contact';

const SideBar = () => {
  return(
    <div className={styles.sidebar}>
      <Link to='/about'>About</Link>
      <br />
      <Link to='contact'>Contact</Link>
      <About />
      <Contact />
    </div>
  );
};

export default SideBar;
