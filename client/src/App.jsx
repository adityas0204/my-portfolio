import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import { useEffect } from 'react'
import pingService from './services/ping'

const App = () => {
  useEffect(() => {
    const pingServer = async () => {
      await pingService.createPing()
    }
    pingServer()
  }, [])

  return (
    <div>
      <Header/>
      <main> 
        <Home/>
        <About/>
        { /* <Experience/> */}
        <Projects/>
      </main>
      <Footer/>
    </div>
  )
}

export default App