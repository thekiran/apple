import React from 'react'
import gsap from 'gsap'

const Section2 = () => {
  React.useEffect(()=>{
    const opacity = 0

     let t1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.section-2-heading',
        start:"top center",
        end:"+=300",
        // markers:true,
        scrub:true,
        pin:false, 
        pinSpacing:true
      }
    })
    .from(".section-2-title",{xPercent:82,yPercent:-5,opacity:opacity,duration:1,
  },1)
    .from(".section-2-heading-bg",{xPercent:110,yPercent:-50,duration:1,scaleY:0.5,opacity:.5
    } ,1)
    .from("#iphone-full",{xPercent:-170,yPercent:-5,opacity:opacity,scale:0.5,rotate:'-0deg',duration:1.5,delay:.5},1)
    .from(".iphone-description",{xPercent:50,yPercent:-0,opacity:opacity,scale:0.4,rotate:'-0deg',duration:1.5,delay:1.5},1)
    
  },[])


    return (
        <React.Fragment>
           {/* Section 2 */}
          <section className="section-2" id="section-2">
            <div className="iphone-description">
              <h6> A14 Bionic, the fastest chip in a smartphone.
              An edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.</h6>
            </div>
            {/* Section 2 Heading */}
            <h1 className="section-2-heading">
            <span className="section-2-heading-bg"></span>
            <span className="section-2-title" style={{display:'inline-block'}}>
            iPhone 12
            </span>
            </h1>
            {/* End of Section 2 Heading */}
            {/* End of Section 2 Buttons */}
          <div className="iphone-full-cont">
            <div className="iphone-img">
            <img id="iphone-full"  src="https://raw.githubusercontent.com/thekiran/applestore-assets/main/Final%20Files/images/iPhones/front.png" alt="" />
            </div>
          </div>
          </section>

          {/* End of Section 2 */}
        </React.Fragment>
    )
}

export default Section2
