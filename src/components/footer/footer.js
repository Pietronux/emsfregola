import React from "react"
import "./styles.css"

export default function Footer() {  
  return (
    <div className="footer">
      <p className="footerText">Designed by me and developed by my partner in crime <a className="footerLink" href="https://www.linkedin.com/in/pietro-sardaro/" target="_blank">Pietro</a></p>
      <p style={{paddingInline: 16}} className="footerText footerTextSpacer">*</p>
      <p className="footerText">© Emanuele Sfregola 2022</p>
    </div>
  )
}
