import React from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

import './App.css';

import Header from './components/Header';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';

function App() {
  const animation = true
  React.useEffect(() =>{
    // const script = document.createElement("script");
    // script.src = "/interactive.js";
    // script.async = true;
    // document.body.appendChild(script);
    // Common JS
    document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
      control.addEventListener('click', e => {
          e.preventDefault()
      })
    })
    // End of Common JS
  },[])
  gsap.registerPlugin(ScrollTrigger)
  return (
   <div className="container">
     <Header animation={animation}/>
     <Section2 animation={animation}/>
     <Section3 animation={animation}/>
     <Section4 animation={animation}/>
     <Section5 animation={animation}/>
     <Section6 animation={animation}/>
  </div>
  );
}

export default App;
