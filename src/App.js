//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import Home from './Components/Pages/Home';
import Collection from './Components/Pages/Collection';
import About from './Components/Pages/About';
import Navbar from './Components/inc/Navbar';
import Contact from './Components/Pages/Contact'

//import Menu from './Components/Pages/Menu';
//import Menu from './Components/Menu';

import React from 'react';
//import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
         
      <Router>
        <Navbar/>
        
       
      
        
      
        
     
        <Routes> 
        
          <Route exact path="/" element={<Home/>}/>

          <Route exact path="/about" element= {<About/>}/>
          <Route exact path="/collection" element = {<Collection/>}/>
          <Route exact path="/contact" element = {<Contact/>}/>
              
             
        </Routes>
      </Router>





    
    </div>
  );
}

export default App;
