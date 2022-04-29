import React from "react"
import "./styles.css"

import NavBarDesktop from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"

export default function AboutPage() {

  return (
    <>
      <NavBarDesktop />
        <div className="aboutContent">
          <div className="aboutSection">
              <div className="photoCont">
                <p className="aboutTitleMobile">About me</p>
                <img className="image" src={'images/me.jpg'} />
              </div> 
              <div className="aboutCont">
                <p className="aboutTitle">About me</p>
                <p className="aboutText">Ciao, I am Emanuele, a product designer with experience in industrial design. I’m a great supporter of user-centered design, and I believe that this is the starting point in creating memorable experiences.<br></br><br></br>
                I’m that fast learner guy, motivated to succeed, who falls in love with everything he does and constantly tries to expand his knowledge.My previous experience helped me develop effective and viable solutions that met stakeholders' and customers' needs in a short time.<br></br><br></br>
                My life goal is not to be a superstar but to be part of people’s lives by designing user experiences.My love for people isn't limited to users but involves my teammates. </p>
              </div> 
          </div>
          <div className="cvSection">
            <img className="imageDesk" src={'images/experience/desktop.png'}/> 
            <img className="imageMid" src={'images/experience/tablet.png'}/> 
            <img className="imageMob" src={'images/experience/phone.png'}/> 
            <a href="files/CV-ENG.pdf" download="emsfregola-cv.pdf" className="customTag cv">Download CV</a>
          </div>
          <div className="passionSection">
            <img className="imageDesk" src={'images/passion/desktop.png'}/> 
            <img className="imageMid" src={'images/passion/tablet.png'}/> 
            <img className="imageMob" src={'images/passion/phone.png'}/> 
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
