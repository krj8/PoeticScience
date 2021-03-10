import React from 'react';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import background_crutch from './Licensed_Photos/background_crutch.jpg';

function App() {
  return (
    <>
      <Router>
        <TopNavbar/>
          <body>
            {/* <div className='resize'> */}
            {/* <div className='background_alignment'> */}
              {/* <div className="crutch_background"></div> */}
              {/* <img src={background_crutch} alt="this is car image" /> */}
              <div className="background">
                  
                  {/* <LeftNavbar /> */}
                  {/* <RightNavbar /> */}
                  <Switch>
                    <Route path='/' exact />
                  </Switch>
                </div>
                {/* </div> */}
                {/* </div> */}
            </body>
      </Router>
    </>
  );
}

export default App;
