import './App.css';
import Navbar from '../components/template/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../components/home/Home'
import Reports from '../components/section/Timer_State'
import Products from '../components/section/CRUD_Spring_Boot'
import React, { Component }  from 'react';
import CRUD_Spring_Boot from '../components/section/CRUD_Spring_Boot';
import React_Photo_Gallery from '../components/section/React_Photo_Gallery';
import Photos_Node from '../components/section/Photos_Node';
import Time from '../components/section/Time';
import Money from '../components/section/Money';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Photos_Node' element={<Photos_Node/>}/>
          <Route exact path='/React_Photo_Gallery' element={<React_Photo_Gallery/>}/>
          <Route exact path='/CRUD_Spring_Boot' element={<CRUD_Spring_Boot/>}/>
          <Route exact path='/Time' element={<Time/>}/>
          <Route exact path='/Money' element={<Money/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;