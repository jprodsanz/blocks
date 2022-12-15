import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Subcontents from './components/Subcontents'
import Advertisement from './components/Advertisement'


function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
      </Container>
      <Container>
      <Navigation/>
      <Main>
        <Container>
          <Subcontents/>
          <Subcontents/>
          <Subcontents/>
        </Container>
        <Advertisement/>
      </Main>
      </Container>
    </div>
  );
}

export default App