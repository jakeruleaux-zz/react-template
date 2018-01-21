import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import styles from './../styles/App.css';
import About from './About';
import Contact from './Contact';

function App(){
  return (
    <div className={styles.app}>
        <Home />
        <Switch>
            <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
    </div>
  );
}

export default App;
