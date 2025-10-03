import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
      <Header/>
      <main> 
        <Home/>
        <About/>
        { /* <Experience/> */}
        <Projects/>
      </main>
    </div>
  )
}

export default App