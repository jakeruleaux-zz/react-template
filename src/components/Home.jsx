import React from 'react';
import { Switch } from 'react-router-dom';
import styles from './../styles/Home.css';
import SideBar from './SideBar';
import Header from './Header';

const Home = () => {
  return(
    <div className = {styles.home}>
      <Header />
      <Switch>
      <SideBar />
      </Switch>
    </div>
  );
};

export default Home;
