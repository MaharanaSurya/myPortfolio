import React from 'react'
import styles from "./App.module.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import { Contact } from './Components/Contact/Contcat'

const App = () => {
  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
