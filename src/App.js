import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import HomePage from './components/Home.js';
import FrontCover from './components/FrontCover.js';
import Flyology from './components/Flyology.js';
import Resume from './components/Resume.js';
import Portfolio from './components/Portfolio.js';
import Babbage from './components/Babbage.js';
import BackCover from './components/BackCover.js';

// import TopMenu from './components/TopMenu.jsx';
import TopNavbar from './components/TopNavbar.js';


export default function App() {
  return(
    <Switch>
      {/* <div className="background"> */}
      <div className="app_frame">
        
        <div className="header">  {/* Transferred from TopNavbar.js & TopNavbar.css & TopMenu.jsx */}
          {/* Ada emblem */}
          <NavLink exact to="/"><image id="logo" src="./Licensed_Photos/logo.png" alt="Home"/></NavLink>
          
          <h1>PoeticScience.net</h1>
          
          <div className='menu-button'>
            <TopNavbar />
            {/* <TopMenu /> */}
              {/* <ul className="top_menu">
                <li><NavLink to="/about_me/resume">Resume</NavLink></li>
                <div className='line'></div>
                <li><NavLink to="/about_me/portfolio">Portfolio</NavLink></li>
              </ul> */}
            {/* </TopMenu> */}
          </div>
        </div>

        {/* <div className="app_frame"> */}
          <ul className="left_menu">
            <li><NavLink exact to="/intro">Front Cover</NavLink></li>
            <li><NavLink to="/flyology">Flyology</NavLink></li>
          </ul>
      
          <ul className="right_menu">
            <li><NavLink to="/babbage">Babbage</NavLink></li>
            <li><NavLink to="/outro">Back Cover</NavLink></li>
          </ul>
        </div>

        <div className="content">
        {/* when url path is ____ render _____ component */}
          <Route exact path="/" component={HomePage} />
          <Route path="/about_me/resume" component={Resume} />
          <Route path="/about_me/portfolio" component={Portfolio} />
          <Route path="/intro" component={FrontCover} />
          <Route path="/flyology" component={Flyology} />
          <Route path="/babbage" component={Babbage} />
          <Route path="/outro" component={BackCover} />
        </div>
    </Switch>
  )
}

// ----------------------
// import {
//   Route,
//    NavLink,
//    HashRouter
// } from 'react-router-dom';
// import TopNavbar from './components/TopNavbar';
// import LeftMenu from './components/LeftMenu.jsx';
// import RightMenu from './components/RightMenu.jsx';
// import Home from './components/Pages/Home.js';

// class Main extends Component {
//   render() {
//     return (
//       // define "routing region" with hash router component
//       <HashRouter>
//         <TopNavbar/>
//           <body>
//               <div className="background">

//                 <div className='leftMenu'>
//                   <LeftMenu />
//                 </div>

//                 <div className='rightMenu'>
//                   <RightMenu />
//                 </div>
                
//               </div>
//           </body>
//       </HashRouter>      
//     );
//   }
// }

// export default Main;

// ---------------------------------
// import React, { Component } from 'react';
// import {
//   Route,
//    NavLink,
//    HashRouter
// } from 'react-router-dom';
// import TopNavbar from './components/TopNavbar';
// import LeftMenu from './components/LeftMenu.jsx';
// import RightMenu from './components/RightMenu.jsx';
// import Home from './components/Pages/Home.js';
// // import Portfolio from;
// // import Resume from ;
// // import FrontCover from ;
// // import Flyology from ;
// // import Babbage from ;
// // import BackCover from ;

// class Main extends Component {
//   render() {
//     return (
//       // define "routing region" with hash router component
//       <HashRouter>
//         <TopNavbar/>
//           <body>
//               <div className="background">

//                 <div className='leftMenu'>
//                   <LeftMenu />
//                 </div>

//                 <div className='rightMenu'>
//                   <RightMenu />
//                 </div>
                
//               </div>
//           </body>
//       </HashRouter>      
//     );
//   }
// }

// export default Main;

// ---------------------------------
// import React from 'react';
// import TopNavbar from './components/TopNavbar';
// // import Contents from './components/Contents.js';
// import LeftMenu from './components/LeftMenu.jsx';
// import RightMenu from './components/RightMenu.jsx';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// // import Home from './components/Pages/Home/Home.js';


// function App() {
//   return (
//       <Router>
//         <TopNavbar/>
//           <body>
//               <div className="background">
//                   {/* <Contents /> */}
//                   <div className='leftMenu'>
//                     <LeftMenu />
//                   </div>
//                   <div className='rightMenu'>
//                     <RightMenu />
//                   </div>
//                   <Switch>
//                     <Route path='/' exact />
//                   </Switch>
//                 </div>
//             </body>
//       </Router>
//   );
// }

// export default App;