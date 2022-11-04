import React, { useEffect } from "react";
import { Container } from './components/styles/Container.styled'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Footer from './components/Footer'
import scrollreveal from "scrollreveal";


function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        #sidebar,
        #body,
        #footer
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);

  
  return (
    <Container className="player__body">
      <Sidebar/>
      <Body/>
      <Footer/>
      
    </Container>
  );
}

export default App;
