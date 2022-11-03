import React,{useEffect, useRef} from 'react'
import {TweenMax, Power3} from "gsap"
import { StyledBody  } from './styles/Body.styled'
import Header from "./Header"
import Row from "./Row"
import Udux from "./Udux"

function Body() {

  let bodyItem = useRef(null)

  useEffect(()=> {
    TweenMax.to(
      bodyItem,
      0.8,
      {
        opacity:1,
        y:20,
        ease: Power3.easeOut,
        delay:0.2
      }
    )
  })
  return (
    <StyledBody ref={el => {bodyItem = el}}>
        <div className="body">
          <div className="body--head">
            <Header/>
          </div>
          <div className="body--udux">
            <Udux  className="udux--image"/>
          </div>
          <div className="row--container">
            <div className="row">
              <Row title="Welcome Back!"/> 
            </div>
            <div className="row">
              <Row title="Cheers to the Weekend"/> 
            </div> 
          </div>
           
        </div>
    </StyledBody>
  )
}

export default Body