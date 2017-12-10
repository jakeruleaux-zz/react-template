import React from 'react';
import styles from './../styles/Home.css';
import SideBar from './SideBar';
import Header from './Header';

const Home = () => {
  return(
    <div className = {styles.home}>
      <Header />
      <SideBar />
    </div>
  );
};

export default Home;
