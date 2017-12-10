import React from 'react';
import styles from './../styles/SideBar.css';
import About from './About';
import Contact from './Contact';

const SideBar = () => {
  return(
    <div className={styles.sidebar}>
      <About />
      <Contact />
    </div>
  );
};

export default SideBar;
