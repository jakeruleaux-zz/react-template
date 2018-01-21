import React from 'react';
import { Link } from 'react-router-dom';
import styles from './../styles/Contact.css';

const Contact = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.contactdata}>
        <h3>Title</h3>
        <p>Text.........</p>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Contact;
