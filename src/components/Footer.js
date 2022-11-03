import React from 'react'
import { StyledFooter  } from './styles/Footer.styled'
import { HomeOutlined } from '@ant-design/icons';
import { CommentOutlined } from '@ant-design/icons';
import { ProfileOutlined } from '@ant-design/icons';
import { LikeOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <StyledFooter>
        <HomeOutlined/>
        <CommentOutlined/>
        <ProfileOutlined />
        <LikeOutlined/>
    </StyledFooter>
  )
}

export default Footer