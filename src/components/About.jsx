import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/About.css';

const About = () => {
  return(

    <div className={styles.wrapper}>
      <div className={styles.aboutdata}>
        <h3>Title</h3>
        <p>Text.........</p>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default About;
