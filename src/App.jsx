import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SectionBlog from './components/SectionBlog'
import SectionPrice from './components/SectionPrice'
import SectionSign from './components/SectionSign'
import SectionApresentation from './components/SectionApresentation'
import Footer from './components/Footer'







function App() {


  return (
    <>

      <Header />
      <div className="content">
        <SectionApresentation />
        <SectionBlog />
        <SectionSign />
        <SectionPrice />
      </div>
      <Footer />




    </>
  )
}

export default App
