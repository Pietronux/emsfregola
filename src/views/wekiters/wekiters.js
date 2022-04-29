import React from "react"
import "./styles.css"

import NavBarDesktop from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

export default function WekitersPage() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      <NavBarDesktop weKiters />
        <div className="weKitersContent">
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/context.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/contextMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/contextSmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/discovery.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/discoveryMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/discoverySmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/ideate.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/ideateMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/ideateSmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/wireframe.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/wireframeMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/wireframeSmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/usability.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/usabilityMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/usabilitySmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/learning.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/learningMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/learningSmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/visual.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/visualMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/visualSmall.png'}/> 
          </div>
          <div className="wrapper">
            <img className="kitersImg desk" src={'images/wekiters/conceptText.png'}/> 
            <img className="kitersImg mid" src={'images/wekiters/conceptTextMid.png'}/> 
            <img className="kitersImg small" src={'images/wekiters/conceptTextSmall.png'}/> 
          </div>
          <div className="goToTopWrapper">
            <button className="goToTopButton" onClick={scrollToTop}>
              <img width="48px" height="48px" className="goToTopImage" src={'images/wekiters/topIcon.png'}/>
              <span className="goToTopText">go to top</span>
            </button>
          </div>
          <div className="getInTouch noMargin">
              <span className="getInTouchText margin">Reach me out on</span>
              <a href="https://www.linkedin.com/in/emsfregola/" target="_blank" className="customTag margin">Linkedin</a>
              <span className="getInTouchText margin">or send me a</span>
              <a href="mailto:ciao@emsfregola.com" className="customTag">Message</a>
          </div>
        </div>
      <Footer />
    </>
  )
}
