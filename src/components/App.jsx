import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import styles from './../styles/App.css';
import Contact from './Contact';
import About from './About';

const App = () =>{
  return (
    <div className={styles.app}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
    </div>
  );
}

export default App;
