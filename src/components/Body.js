import React from 'react'
import { StyledBody  } from './styles/Body.styled'
import Header from "./Header"
import Row from "./Row"
import Udux from "./Udux"

function Body() {
  return (
    <StyledBody>
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