import { Routes, Route } from "react-router"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Shit2 from './pages/Shit2'
import Shit3 from './pages/Shit3'
import FullstackNotes from './pages/FullstackNotes'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />  
        <Route path='shit2' element={<Shit2 />} /> 
        <Route path='shit3' element={<Shit3 />} />
        <Route path='notes' element={<FullstackNotes />} />
      </Route> 
    </Routes>
  )
}

export default App