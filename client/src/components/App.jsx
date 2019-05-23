import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import Home from './pages/Home';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


// import api from '../api';
import Navbar from './Navbar';

export default function App() {
    return (
      <div className="App">
        <header className="App-header">
         <Navbar />

        </header>
        <Switch>
          <Route path="/Home" component={Home} />
          {/* <Route path="/Profile" component={Profile} /> */}
          <Route path="/Contacts" component={Contacts} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Events" component={Events} />
          <Route path="/Services" component={Services} />
          <Route path="/Profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }

  