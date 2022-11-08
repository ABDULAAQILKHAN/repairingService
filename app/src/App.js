import React,{useState} from 'react';
import Navbar from './components/navbar.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home.js';
import Serviceform from './components/serviceform.js';
import Thank from './components/thank.js';

function App() {
 const [service, setservice] = useState();

  return (<>
 
    <BrowserRouter>
      <Navbar/>
    
    <Routes>
    <Route exact path='/' element={<Home setservice={setservice}/>}></Route>
    <Route path='/home' element={<Home setservice={setservice}/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/thank' element={<Thank service={service}/>}></Route>
    <Route path='/Serviceform' element={<Serviceform service={service}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
