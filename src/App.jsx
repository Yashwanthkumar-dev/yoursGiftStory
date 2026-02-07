import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import { HelmetProvider } from 'react-helmet-async'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer/>
      </HelmetProvider>
    </div>
  )
}

export default App