import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import CareersContent from '@/components/template/careers/CareersContent/CareersContent'
import CareersForm from '@/components/template/careers/CareersForm/CareersForm'
import React from 'react'

export const metadata = {
  title:"بن مانو | فرصت شغلی  ",
}

function page() {
  return (
   <>
   <Navbar/>
   <Breadcrumb name="فرصت های شغلی"/>
    <CareersContent/>
    <CareersForm/>
   <Footer/>
   </>
  )
}

export default page