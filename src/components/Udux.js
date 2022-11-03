import React from 'react'
import { StyledUdux  } from './styles/Udux.styled'
import logo from "../assets/Text.png"
import logo2 from "../assets/Omah.png"

function Udux() {
  return (
    <StyledUdux>
        <div className="Udux--container">
            <div className="logo1"> 
               <img src={logo}/>
            </div>
            <div className="logo2"> 
               <img src={logo2}/>
            </div>
        </div>
 
    </StyledUdux >
  )
}

export default Udux;