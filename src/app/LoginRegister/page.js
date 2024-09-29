import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="ثبت نام | ورود"/>
    <div className="containers">
        <div className="row row-gap-4">
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page