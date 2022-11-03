import React,{useState} from 'react'
import { StyledSidebar  } from './styles/Sidebar.styled'
// import { StyledSidebarOption  } from './styles/SidebarOption.styled'
import 'antd/dist/antd.min.css';
import { Avatar } from "antd"
import logoAvatar from '../assets/avatar.jpeg';
import SidebarOption from './SidebarOption';
import { HomeOutlined } from '@ant-design/icons';
import { CommentOutlined } from '@ant-design/icons';
import { ProfileOutlined } from '@ant-design/icons';
import { LikeOutlined } from '@ant-design/icons';
import { OneToOneOutlined } from '@ant-design/icons';
import { MacCommandOutlined} from '@ant-design/icons';
import { PlaySquareOutlined} from '@ant-design/icons';
import { SearchOutlined} from '@ant-design/icons';
import {playlists} from "../data/playlists"



function Sidebar() {

  const [playlistData, setPlaylistData] = useState(playlists)



  return (
    <StyledSidebar>
      <div className="sidebar--avatar">
        <Avatar size={50} src={logoAvatar} className="logo--avatar"/>
        <p className="avatar--name">Hey! Aleem</p>
      </div>
      <div className="sidebaroption--top">
        <SidebarOption Icon={HomeOutlined} title="Home"/>
        <SidebarOption Icon={CommentOutlined} title="Discover"/>
      </div>
      <div className="sidebaroption--bottom">
        <SidebarOption Icon={ ProfileOutlined } title="Your Library"/>
        <SidebarOption Icon={LikeOutlined} title="Liked Songs"/>
        <SidebarOption Icon={OneToOneOutlined} title="Recently Played"/>
        <SidebarOption Icon={MacCommandOutlined } title="Create Playlist"/>
      </div>
      <div className="sidebaroption--search">
        <SidebarOption Icon={ PlaySquareOutlined } title="My Playlists" className="search--playlist"/>
        <div className="search"><SearchOutlined /></div>
      </div>
      <div className="search--playlist">
        {playlistData?.map(playlist => <SidebarOption key = {playlist.id} title={playlist.title}/>) }
      </div>
      
    </StyledSidebar>
  )
}

export default Sidebar