import React,{useRef, UseEffect} from 'react';
import {TweenMax, Power3, Flip} from 'gsap';
import { StyledSidebarOption  } from './styles/SidebarOption.styled'
import { SoundOutlined } from '@ant-design/icons';


function SidebarOption({title, Icon}) {
  let item = useRef(null)
  

//   const handleClick = ()=>{
//     Flip.to(
//         item, 
//         0.8,
//         {
//             color:"gold"
//         }
//     )
//   }
  return (
    <StyledSidebarOption>
      <div ref = {el => {item = el}} className="icon--title">
            <div className="sidebarOption--icon">{Icon && <Icon/>}</div>
            <div className="title">{Icon ? <p className="title--bold">{title}</p> : <p>{title}</p>}</div>
            <div className="sound--icon">{title === "Liked Songs" && <SoundOutlined /> }</div>
       </div>
       
    </StyledSidebarOption>
  )
}

export default SidebarOption