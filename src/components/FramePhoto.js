import React,{useEffect, useRef} from 'react'
import {TweenMax, Power3} from "gsap"
import { StyledFramePhoto  } from './styles/FramePhoto.styled'


function FramePhoto({ title,colors, text, imgUrl}) {
  let frameItem = useRef(null)

  useEffect(()=> {
    TweenMax.to(
      frameItem,
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
    <StyledFramePhoto ref={el => {frameItem = el}}>
        <div className="imgAlbum"><img src={imgUrl}/></div>      
        <div className="black--box" >""</div>
        <div className="linear--box" style={{ background:`linear-gradient(${colors})`}}>
            <div className="linear--box--top">""</div>
            <div className="linear--box--bottom">
              <div className="box--bottom">
                <div className="box--bottom1">{title}</div>
                <div className="box--bottom2">{text}</div>
              </div>
            </div>
        </div>
        
    </StyledFramePhoto>
 )
}

export default FramePhoto



