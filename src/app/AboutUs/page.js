import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/about/About/About'
import React from 'react'

function page() {
  return (
    <>
        <Navbar/>
        <About/>
        <Footer/>
    </>
  )
}

export default page