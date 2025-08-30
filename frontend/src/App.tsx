import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Home, About, Rooms } from './exports'

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Rooms/>
    </>
  )
}

export default App


   {/*
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Rooms" element={<p>rooms</p>} />
      </Routes> 
    */}