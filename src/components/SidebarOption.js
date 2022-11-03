import React from 'react';
import { StyledSidebarOption  } from './styles/SidebarOption.styled'
import { SoundOutlined } from '@ant-design/icons';


function SidebarOption({title, Icon}) {
  
  

  return (
    <StyledSidebarOption>
      <div className="icon--title">
            <div className="sidebarOption--icon">{Icon && <Icon/>}</div>
            <div className="title">{Icon ? <p className="title--bold">{title}</p> : <p>{title}</p>}</div>
            <div className="sound--icon">{title === "Liked Songs" && <SoundOutlined /> }</div>
       </div>
       
    </StyledSidebarOption>
  )
}

export default SidebarOption