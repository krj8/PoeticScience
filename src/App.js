import React from 'react';
import TopNavbar from './components/TopNavbar';
// import Contents from './components/Contents.js';
import LeftMenu from './components/LeftMenu.jsx';
import RightMenu from './components/RightMenu.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import Home from './components/Pages/Home/Home.js';


function App() {
  return (
    <>
      <Router>
        <TopNavbar/>
          <body>
              <div className="background">
                  {/* <Contents /> */}
                  <div className='leftMenu'>
                    <LeftMenu />
                  </div>
                  <div className='rightMenu'>
                    <RightMenu />
                  </div>
                  <Switch>
                    <Route path='/' exact />
                  </Switch>
                </div>
            </body>
      </Router>
    </>
  );
}

// function App() {
//   return (
//     <>
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
//                     <Route path='/' exact component={Home}/>
//                   </Switch>
//                 </div>
//             </body>
//       </Router>
//     </>
//   );
// }

export default App;
