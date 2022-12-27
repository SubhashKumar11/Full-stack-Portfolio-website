import React from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Playlist from './components/Playlist'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/playlist' element={<Playlist/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App