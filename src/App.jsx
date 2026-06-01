import React from 'react'
import Navbar from './components/Navbar'
import ContactContent from './components/ContactContent'
import Button from './components/Button'
import Input from './components/Input'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <ContactContent/>
      <Input/>
      
    </div>
  )
}

export default App