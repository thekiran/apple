import React from 'react'

const Section5 = () => {
  return (
    <React.Fragment>
      {/* Section 5 */}
      <section className='section-5 center' id='section-5'>
        {/* Section 5 Content */}
        <div className='airpods'>
          {/* Section 5 Heading */}
          <h1 className='section-5-heading'>AirPods</h1>
          {/* End of Section 5 Heading */}
          {/* Section 5 Images */}
         {/*  eslint-disable-next-line */}
          <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/AirPods/airpods-1.png' className='airpods-img-1' />
         {/*  eslint-disable-next-line */}
          <img src='https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/AirPods/airpods-1.png' className='airpods-img-2' />
          {/* End of Section 5 Images */}
          {/* Section 5 Buttons */}
          <div className='airpods-buttons'>
            <button className='airpods-btn'>Learn More</button>
            <button className='airpods-btn'>Buy</button>
          </div>
          {/* End of Section 5 Buttons */}
        </div>
        {/* End of Section 5 Content */}
      </section>
      {/* End of Section 5 */}
    </React.Fragment>
  )
}

export default Section5
