import React, { lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Lazy load the Homepage component
const Homepage = lazy(() => import('./component/HomePage/homepage'));
// const About = lazy(() => import('./About'));

const TableTest1= lazy(()=> import("./component/TableTest1/TableTest1"));

const MobileDetails=lazy(()=>import("./component/MobileDetail/MobileDetails"));

const MobileRegister=lazy(()=>import("./component/MobileRegister/MobileRegister"));

 
const BasicForm=lazy(()=>import("./component/BasicForm/basicForm"));

const Box=lazy(()=>import("./component/Box/Box"));
function App() {
  return (
    <div className="App">
      <Router>
       
          <Routes>
            <Route path="/homepage" 
            name="Homepage"element={<Homepage />} />
            {/* <Route path="/about" element={<About />} /> */}

            <Route path="/tableTest1" element={<TableTest1 />} />


            <Route path='/mobileData'
            name="MobileDetails"
            element={<MobileDetails/>}/>

            <Route
            path="/mobileRegister"
            name="MobileRegister"
            element={< MobileRegister/>}/>

            <Route
            path="/box"
            name="Box"
            element={<Box/>}/>

            <Route
             path="/basicForm"
            name="BasicForm"
            element={<BasicForm/>}/>




          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
