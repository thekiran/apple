import React from 'react'
import gsap from 'gsap'

const Section2 = () => {
  React.useEffect(()=>{
    // gsap.timeline({
    //   scrollTrigger:{
    //     trigger:'.section-2-heading',
    //     start:"top center",
    //     end:"top top",
    //     // markers:true,
    //     scrub:false,
    //     pin:false, 
    //     pinSpacing:false
    //   }
    // })
    // gsap.from(".section-2-heading-bg",{xPercent:-300,yPercent:-100,duration:1,scrollTrigger:{trigger:'.section-2-heading'}},1)
    // gsap.from(".section-2-title",{color:'#fff',duration:3,scrollTrigger:{trigger:'.section-2-heading'}},1)
    
    // .from("#iphone-full",{xPercent:-300,yPercent:-100,scale:3,duration:1},1)
    // .to("#banner-cont",{xPercent:200,yPercent:-100,scale:2,rotate:45,opacity:0.1,duration:3,delay:2},1)
    
    // const scaleBg = () => {
      
    //   let t2 = gsap.timeline({
    //     scrollTrigger:{
    //       trigger:'.section-2-heading',
    //       start:"top center",
    //       end:"top top",
    //       markers:true,
    //       scrub:true,
    //       pin:true, 
    //       pinSpacing:false
    //     }
    //   })
    //   .to(".section-2-heading-bg",{skewX:"50deg",opacity:1,scale:50,duration:2,delay:1},1)
    //   .to(".section-2-heading-bg",{skewX:"0deg",opacity:0,scale:0,duration:2,delay:2},1)
    //   // .from(".iphone-description",{xPercent:-220,yPercent:90,opacity:0,scale:5,rotate:'-90deg',duration:2,delay:1,onComplete:scaleBg()},1)
    // }
     let t1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.section-2-heading',
        start:"top center",
        end:"top top",
        markers:true,
        scrub:true,
        pin:true, 
        pinSpacing:false
      }
    })
    .from("#iphone-full",{xPercent:-220,yPercent:90,opacity:0,scale:5,rotate:'-90deg',duration:2,delay:1},1)
    .from(".iphone-description",{xPercent:-220,yPercent:90,opacity:0,scale:5,rotate:'-90deg',duration:2,delay:1},1)
    // .to(".iphone-description",{opacity:1,duration:1},1)


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
            <span className="section-2-title">
            iPhone 12
            </span>
            </h1>
            {/* End of Section 2 Heading */}
            {/* End of Section 2 Buttons */}
          <div className="iphone-full-cont">
            <div className="iphone-img">
            <img id="iphone-full"  src="/images/iPhones/front.png" alt="" />
            </div>
          </div>
          </section>

          {/* End of Section 2 */}
        </React.Fragment>
    )
}

export default Section2
