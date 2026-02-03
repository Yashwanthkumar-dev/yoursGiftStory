import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />


      </Routes>

    </div>
  )
}

export default App