import React from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

import './App.css';

import Header from './components/Header';
import Section2 from './components/Section2';
import Section3 from './components/Section3';


function App() {
  React.useEffect(() =>{
    // const script = document.createElement("script");
    // script.src = "/interactive.js";
    // script.async = true;
    // document.body.appendChild(script);

  },[])
  gsap.registerPlugin(ScrollTrigger)
  return (
   <div className="container">
     <Header />
     <Section2 />
     <Section3 />
  </div>
  );
}

export default App;
