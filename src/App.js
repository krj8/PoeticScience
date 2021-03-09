import React from 'react';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        {/* <body  className="grid"> */}
        <TopNavbar/>
          <div className="background">
              
              {/* <LeftNavbar /> */}
              {/* <RightNavbar /> */}
              <Switch>
                <Route path='/' exact />
              </Switch>
            </div>
          {/* </body> */}
      </Router>
    </>
  );
}

export default App;
