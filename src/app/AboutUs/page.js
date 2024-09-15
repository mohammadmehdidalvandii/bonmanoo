import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/about/About/About'
import Future from '@/components/template/about/Future/Future'
import React from 'react'


export const metadata = {
    title:"بن مانو | درباره ما",
}

function page() {
  return (
    <>
        <Navbar/>
        <Breadcrumb name="درباره ما"/>
        <About/>
        <Future/>
        <Footer/>
    </>
  )
}

export default page