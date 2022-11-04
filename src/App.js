import React,{useEffect, useRef} from 'react'
import { Container } from './components/styles/Container.styled'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Footer from './components/Footer'
import {TweenMax, Power3} from "gsap"


function App() {


  let appItem = useRef(null)

  useEffect(()=> {
    TweenMax.to(
      appItem,
      0.8,
      {
        opacity:1,
        ease: Power3.easeOut,
        delay:0.3
      }
    )
  })


  return (
    <Container className="player__body" ref={el => {appItem = el}}>
      <Sidebar/>
      <Body/>
      <Footer/>
      
    </Container>
  );
}

export default App;
