import React from 'react';
// import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <TopNavbar/>
          {/* <LeftNavbar /> */}
          {/* <RightNavbar /> */}
          <Switch>
            <Route path='/' exact />
          </Switch>
      </Router>
    </>
  );
}

export default App;
