import React from 'react'

const Section4 = ({animation}) => {
  React.useEffect(() => {
    if(animation){

      // Section 4
      const watchBands = document.querySelector('.watch-bands')
      const watchCases = document.querySelector('.watch-cases')
      
      const watchTopControl = document.querySelector('.watch-top-control')
      const watchRightControl = document.querySelector('.watch-right-control')
      const watchBottomControl = document.querySelector('.watch-bottom-control')
      const watchLeftControl = document.querySelector('.watch-left-control')
      
      let axisY = 0
      let axisX = 0
      
      const hideControl = () => {
        if (axisY === -280) {
          watchTopControl.classList.add('hideControl')
        } else {
          watchTopControl.classList.remove('hideControl')
        }
        
        if (axisY === 280) {
          watchBottomControl.classList.add('hideControl')
        } else {
          watchBottomControl.classList.remove('hideControl')
        }
        
        if (axisX === 280) {
          watchRightControl.classList.add('hideControl')
        } else {
          watchRightControl.classList.remove('hideControl')
        }
        
        if (axisX === -280) {
          watchLeftControl.classList.add('hideControl')
        } else {
          watchLeftControl.classList.remove('hideControl')
        }
      }
      
      watchTopControl.addEventListener('click', () => {
        watchCases.style.marginTop = `${(axisY -= 70)}rem`
        hideControl()
      })
      
      watchBottomControl.addEventListener('click', () => {
        watchCases.style.marginTop = `${(axisY += 70)}rem`
        hideControl()
      })
      
      watchRightControl.addEventListener('click', () => {
        watchBands.style.marginRight = `${(axisX += 70)}rem`
        hideControl()
      })
      
      watchLeftControl.addEventListener('click', () => {
        watchBands.style.marginRight = `${(axisX -= 70)}rem`
        hideControl()
      })
      // End of Section 4
    }
    }, [])
  return (
    <React.Fragment>
      {/* Section 4 */}
      <section className='section-4 center' id='section-4'>
        {/* Section 4 Watches */}
        <div className='watches center'>
          {/* Watch Bands */}
          <div className='watch-bands center'>
         {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-1.jpg'
              className='watch-band-img'
            />
          {/*  eslint-disable-next-line */}
            <img className="watch-band-img" src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-2.jpg"/>
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-3.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-4.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-5.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-6.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-7.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-8.jpg'
              className='watch-band-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-band-9.jpg'
              className='watch-band-img'
            />
          </div>
          {/* End of Watch Bands */}
          {/* Watch Cases */}
          <div className='watch-cases center'>
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-1.png'
              className='watch-case-img'
            />
           {/*  eslint-disable-next-line */}
            <img 
           className="watch-band-img" 
           src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-2.png"
           />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-3.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-4.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-5.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-6.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-7.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-8.png'
              className='watch-case-img'
            />
            {/*  eslint-disable-next-line */}
            <img
              src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/watches/watch-case-9.png'
              className='watch-case-img'
            />
          </div>
          {/* End of Watch Cases */}
        </div>
        {/* End of Section 4 Watches */}
        {/* Watch Controls */}
        {/*  eslint-disable-next-line */}
        <a href='#' className='watch-control watch-top-control center'>
          <i className='fas fa-angle-up' />
        </a>
        {/*  eslint-disable-next-line */}
        <a href='#' className='watch-control watch-right-control center'>
          <i className='fas fa-angle-right' />
        </a>
        {/*  eslint-disable-next-line */}
        <a href='#' className='watch-control watch-bottom-control center'>
          <i className='fas fa-angle-down' />
        </a>
        {/*  eslint-disable-next-line */}
        <a href='#' className='watch-control watch-left-control center'>
          <i className='fas fa-angle-left' />
        </a>
        {/* End of Watch Controls */}
        {/* Watch Button */}
        <button className='watch-btn'>Buy Now</button>
        {/* End of Watch Button */}
      </section>
      {/* End of Section 4 */}
    </React.Fragment>
  )
}

export default Section4
