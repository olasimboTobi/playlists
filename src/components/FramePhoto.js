import React,{useState} from 'react'
import { StyledFramePhoto  } from './styles/FramePhoto.styled'


function FramePhoto({ title,colors, text, imgUrl}) {


  return (
    <StyledFramePhoto>
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



