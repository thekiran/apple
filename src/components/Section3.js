import React from 'react'

const Section3 = () => {
  // React.useEffect(()=>{
  //     const section3Content = document.querySelector('.section-3-content')
    
  //     window.addEventListener('scroll', () => {
  //           if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
  //                 section3Content.classList.add('change')
  //             }
  //         })
  //       },[])
        
        
      let obs = ""
          const observer = React.useRef(
          new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                // console.log(entries[0])
                document.querySelector('.section-3-content').classList.add('change')
                setTimeout(()=>{
                  obs = "anim"
                  console.log(obs)
                document.querySelector('.macbook-info').classList.add('anim')
                },6000)
              } else {
                document.querySelector('.section-3-content').classList.remove('change')
                document.querySelector('.macbook-info').classList.remove('anim')
               
                // setTimeout(()=>{
                //   obs = ""
                //   console.log(obs)
                // },100)
              }
            },
            {
            // root: document.querySelector('.footer-space'),
              rootMargin: '600px 0px 0px 0px',
              // threshold: 1
            }
          )
        )
   {/*  eslint-disable-next-line */}
    const target = React.useCallback((node) => {
      if(observer.current && node !== null)  observer.current.observe(node)
    })


    return (
        <React.Fragment>
     {/* Section 3 */}
<section className="section-3 center" id="section-3">
  {/* Section 3 Heading */}
  <h1 className="section-3-heading">MacBook Air</h1>
  {/* End of Section 3 Heading */}
  {/* Section 3 Content */}
  <div ref={target} className="section-3-content center">
    {/* Section 3 Images */}
   {/*  eslint-disable-next-line */}
    <img src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/MacBook/macbook-screen.png" className="macbook-img-1" />
   {/*  eslint-disable-next-line */}
    <img src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/MacBook/macbook-keyboard.png" className="macbook-img-2" />
    {/* End of Section 3 Images */}
   
    {/* Section 3 Info */}
    <div className="macbook-info">
      <h2 className="macbook-info-heading">Light. Speed.</h2>
      <p className="macbook-price">Starting at $999</p>
      <button className="macbook-btn">Buy Now</button>
    </div>
    {/* End of Section 3 Info */}
     {/* Section 3 Loading */}
    <div className="loading-wrapper"> 
      <div className="loading center">
        <i className="fab fa-apple" />
        <div className="progress-bar" />
      </div>
    </div>
    {/* End of Section 3 Loading */}
  </div>
  {/* End of Section 3 Content */}
</section>
{/* End of Section 3 */}

        </React.Fragment>
    )
}

export default Section3
