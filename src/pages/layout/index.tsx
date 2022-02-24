import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Container, Content } from './style'
import Header from './components/Header'

const LayOut = () => {
  return (
    <Container>
      <NavBar />
      <Header />
      <Content>
        <Outlet />
      </Content>
      <div>
        <Footer />
      </div>
    </Container>
  )
}

export default LayOut
