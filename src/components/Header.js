import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
// import gsap, { Bounce } from 'gsap'

const Header = () => {
  // React.useEffect(() => {

  //   // Setting up elements ready for animation

  //   gsap.set(".section-1", { background: '#000' })
  //   gsap.set(".logo", { x: 600, y: 200, scale: 20 })
  //   gsap.set(".controls", { opacity: 0, scale: 0, rotate: 180 })
  //   gsap.set(".navbar-link", { opacity: 0, scale: 5, rotate: 180, y: 0 })
  //   gsap.set(".title", { color: 'rgba(255,255,255,1)' })
  //   gsap.set("#header-p", { opacity: 0 })


  //   //Animation delays
  //   const LogoDelay = 1
  //   const CubeDelay = 3
  //   const headDelay = 4

  //   //header background animation 
  //   gsap.to(".section-1", { background: '#6edae6', duration: 2, delay: LogoDelay })


  //   // logo Animation

  //   const tl = gsap.from(".logo", { duration: 1, rotate: 650, })
  //   tl.repeat(1)
  //   gsap.from(".logo i", { color: "#fff", duration: 2 })
  //   gsap.to(".logo", { x: 0, y: 0, scale: 1, rotate: 0, duration: 2, delay: LogoDelay, ease: Bounce.easeInOut })


  //   //Cube Animation

  //   gsap.from(".cube-wrapper", { scale: 0, duration: 2, delay: LogoDelay, ease: Bounce.easeInOut })

  //   gsap.to(".controls", { opacity: 1, scale: 1, duration: 1, delay: CubeDelay, rotate: 0 })

  //   //nav Animation

  //   gsap.to(".navbar-link", { y: 0, opacity: 1, scale: 1, duration: .25, delay: 2, rotate: 0, stagger: .1 })

  //   // Header Section
  //   gsap.to(".title", { color: '#000', duration: 5, delay: LogoDelay })
  //   gsap.to("#header-p", { opacity: 1, duration: 3, delay: headDelay })


  // }, [])


  return (
    <React.Fragment>
      {/* Section 1 */}
      <section className="section-1" id="section-1">
        {/* Logo */}
        <a href="/" className="logo" style={{ zIndex: 99 }}>
          <i className="fab fa-apple" />
        </a>
        {/*End of Logo */}
        {/* Navbar */}
        <nav className="navbar">

        <Link
            activeClass="active"
            to="section-2"
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className="navbar-link"
        > Iphone 12</Link>
          {/* <a href="#section-2" className="navbar-link">Features</a> */}
          <Link
            activeClass="active"
            to="section-3"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="navbar-link"
        > MacBook Air</Link>
          {/* <a href="" className="navbar-link"></a> */}
          <Link
            activeClass="active"
            to="section-4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
        > Watch</Link>
          <Link
            activeClass="active"
            to="section-5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="navbar-link"
        > AirPods</Link>
          {/* <a href="#section-4" className="navbar-link">AirPods</a> */}
        </nav>
        {/* End of Navbar */}
        {/* Cube */}

        <div className="cube-wrapper">
          <div className="cube">
            <div className="front-side">
              <img alt="iphone" src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/iphone.png" />
            </div>
            <div className="back-side center">
              <i className="fab fa-apple" />
            </div>
          </div>
          {/* Controls */}

{/*           
          <div className="controls">
            <a href="#" className="top-x-control">
              <i className="fas fa-arrow-up " />
            </a>
            <a href="#" className="bottom-x-control">
              <i className="fas fa-arrow-down " />
            </a>
            <a href="#" className="left-y-control">
              <i className="fas fa-arrow-left " />
            </a>
            <a href="#" className="right-y-control">
              <i className="fas fa-arrow-right " />
            </a>
            <a href="#" className="top-z-control">
              <i className="fas fa-arrow-down " />
            </a>
            <a href="#" className="bottom-z-control">
              <i className="fas fa-arrow-up " />
            </a>
          </div>
         
          */}
          {/* End of Controls */}
        </div>

        {/* End of Cube */}
        {/* Banner */}
        <div className="section-1-banner center">
          <div className="title">
            <span className="arr">  ←
            </span> <h1>Iphone 12.</h1>
          </div>
          <p id="header-p">"Creativity is just connecting things."</p>
          <span> - Steve Jobs</span>
          <button id="header-p" type="button">Buy Now</button>
        </div>
        {/* End of Banner */}
        {/* Slideshow */}
        {/* <div className="slideshow" /> */}
        {/* End of Slideshow */}
      </section>
      {/* End of Section 1 */}
    </React.Fragment>
  )
}

export default Header
