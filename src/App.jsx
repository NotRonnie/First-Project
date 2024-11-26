import { useState } from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
