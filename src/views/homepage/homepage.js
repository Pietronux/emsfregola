import React, { useState } from "react"
import "./styles.css"
import { useNavigate } from "react-router-dom";

import NavBarDesktop from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

export default function Homepage() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/we-kiters`; 
    navigate(path);
  }

  const [image, setImage] = useState('images/home-hero.png')
  return (
    <>
      <NavBarDesktop />
        <div className="content">
          <div className="textSection">
            <p className="normal"><span className="bolded">Ciao!</span> My name is <span className="normalBolded">Emanuele</span> and I am a <span className="tag">Product Designer</span> My dream is not to be a superstar, but to <span className="bolded">improve people’s lives.</span></p>
          </div>
          <div className="imageSection">
            <img className="kitersImage" onClick={routeChange} src={image} onMouseOver={() => setImage('images/home-hero-hover.png')} onMouseOut={() => setImage('images/home-hero.png')}/>
            <div className="kitersDescSection">
              <span className="kitersDesc">Your kite spots and fellows in a tap</span>
              <span className="customTag descTag">UX/UI</span>
            </div>
          </div>
          <div className="getInTouch">
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
