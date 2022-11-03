import React from 'react'
import { StyledHeader  } from './styles/Header.styled';
import { LeftOutlined } from '@ant-design/icons';
import { RightOutlined} from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';

function Header() {
  return (
    <StyledHeader>
        <div className="container">
            <div className="arrows">
                <div className="left--arrow"><LeftOutlined /></div>
                <div className="right--arrow"><RightOutlined /></div>
            </div>
            <div className="search--header">
                <SearchOutlined />
                {/* <input placeholder="Search" className="search--input"/> */}
            </div>
        </div>
        
        
    </StyledHeader>
  )
}

export default Header;