import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from './Services';
// import api from '../api';
import Navbar from './Navbar';

export default function App() {
    return (
      <div className="App">
        <header className="App-header">
         <Navbar />

        </header>
        <Switch>
          <Route path="/Services" component={Services} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }

  