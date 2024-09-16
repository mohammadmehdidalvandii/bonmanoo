import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/contact/Banner/Banner'
import Contact from '@/components/template/contact/Contact/Contact'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="تماس با ما"/>
    <Banner/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page