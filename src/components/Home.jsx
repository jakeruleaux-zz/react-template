import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './../styles/Home.css';
import SideBar from './SideBar';
import Header from './Header';
import About from './About';
import Contact from './Contact';

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
