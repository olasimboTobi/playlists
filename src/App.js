import { Container } from './components/styles/Container.styled'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  return (
    <Container className="player__body">
      <Sidebar/>
      <Body/>
      <Footer/>
      
    </Container>
  );
}

export default App;
