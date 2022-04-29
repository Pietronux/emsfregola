import React, { useState } from "react"
import "./styles.css"

export default function NavBarDesktop(props) {
  const [openMenu, setOpenMenu] = useState(false)

  const weKiters = props.weKiters ? true : false
  
  return (
    <div className="nav-bar-desktop flex-col-hcenter-vstart">
      <div style={{
        backgroundColor: openMenu ? weKiters ? '#001F24' : '#F7F5F0' : 'transparent'
      }} className="frame-3019 flex-row-vstart-hsb">
        <a className="txt-558 flex-hcenter" style={{
          color: weKiters ? '#FFFFFF' : '#000000'
        }} href="/">emsfregola</a>
        <a onClick={() => setOpenMenu(!openMenu)} className="txt-558 flex-hcenter" style={{
          color: weKiters ? '#FFFFFF' : '#000000'
        }}>menu</a>
      </div>
      {
        openMenu && (
          <div className="menuContent" style={{
            backgroundColor: weKiters ? '#001F24' : '#F7F5F0'
          }}>
            <div className="column">
              <a className="menuNavigationLabel -last" href="/we-kiters" style={{
                color: weKiters ? '#95F0FF' : '#000000'
              }}>Wekiters</a>
            </div>
            <div className="column">
              <a className="menuNavigationLabel -lase" href="/about" style={{
                color: weKiters ? '#95F0FF' : '#000000'
              }}>About me</a>
            </div>
          </div>
        )
      }
    </div>
  )
}
