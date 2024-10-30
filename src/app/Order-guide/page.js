import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import React from 'react'


export const metadata = {
  title:"بن مانو |  ثبت شفارش",
}
function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="چگونه در بن‌مانو سفارش خود را ثبت کنم؟"/>
    <Footer/>
    </>
  )
}

export default page