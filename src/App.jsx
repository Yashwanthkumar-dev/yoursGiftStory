import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App