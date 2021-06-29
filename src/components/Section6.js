import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

const Section6 = () => {
  return (
    <React.Fragment>
      {/* Section 6 */}
      <section className='section-6 center'>
        <div className='section-6-icons'>
          <Link
            activeClass='active'
            to='section-1'
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className='icon-link'> 
           {/*  eslint-disable-next-line */}
            <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/Icons/home-icon.png' />
          </Link>
          <Link
            activeClass='active'
            to='section-2'
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className='icon-link'>
           {/*  eslint-disable-next-line */}
            <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/Icons/iphone-icon.png' />
          </Link>
          <Link
            activeClass='active'
            to='section-3'
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className='icon-link'>
           {/*  eslint-disable-next-line */}
            <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/Icons/macbook-icon.png' />
          </Link>
          <Link
            activeClass='active'
            to='section-4'
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className='icon-link'>
           {/*  eslint-disable-next-line */}
            <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/Icons/watch-icon.png' />
          </Link>
          <Link
            activeClass='active'
            to='section-5'
            spy={true}
            smooth={true}
            offset={-20}
            duration={250}
            className='icon-link'>
           {/*  eslint-disable-next-line */}
            <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/Icons/airpods-icon.png' />
          </Link>
        </div>
        <p className='copyright'>
          Copyright © CodeAndCreate All Rights Reserved
        </p>
      </section>
      {/* End of Section 6 */}
    </React.Fragment>
  )
}

export default Section6
