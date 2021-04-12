import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Use AppFrame as environment/background
// import AppFrame from './AppFrame.js';
import Home from './components/Home/Home.js';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
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
