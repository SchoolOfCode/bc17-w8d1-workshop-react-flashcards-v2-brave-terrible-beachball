'use client'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/header/header.jsx"
import Footer from "./components/footer/footer.jsx"
import Flashcards from "./components/flashcards/flashcards.jsx"

import './App.css'

function App() {
  

  return (
    <>
    <div>
      <Header />
      <Flashcards />
      <Footer />
    </div>
    </>
  )
}

export default App
