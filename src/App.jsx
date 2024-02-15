
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import { Routes,Route } from "react-router-dom";
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Blog' element={<Home/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     
    </>
  )
}

export default App
