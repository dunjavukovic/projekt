import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import {Route,BrowserRouter as Router } from 'react-router-dom';
import Uvod from './components/Uvod.js';
import Opcenito from './components/Opcenito.js';
import Treca from './components/Treca.js';
import Galerija from './components/Galerija.js';
function App() {
  return (
  <div>
    <Header></Header>

      <Router>
        <Route exact path="/"component={Uvod}></Route>
        <Route exact path="/opcenito"component={Opcenito}></Route>
        <Route exact path="/treca"component={Treca}></Route>
        <Route exact path="/galerija"component={Galerija}></Route>
        </Router>
      
      <Footer></Footer>
    </div>
    
  );
}

export default App;