import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import CareersContent from '@/components/template/careers/CareersContent/CareersContent'
import React from 'react'

function page() {
  return (
   <>
   <Navbar/>
   <Breadcrumb name="فرصت های شغلی"/>
    <CareersContent/>
   <Footer/>
   </>
  )
}

export default page