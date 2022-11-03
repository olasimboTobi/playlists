import React from 'react'
import { StyledRow  } from './styles/Row.styled'
import AlbumDisplay from './AlbumDisplay'

function Row({ title }) {
  return (
    <StyledRow>
      <div className="wrapper">
        <div className="row--title">
          <h2>{title}</h2>
        </div>
        <div className="row--display">
          <AlbumDisplay/>
        </div>
      </div>
       
    </StyledRow>
  )
}

export default Row