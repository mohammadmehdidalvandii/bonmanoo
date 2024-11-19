import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Questions from '@/components/template/faq/Questions/Questions'
import React from 'react'


export const metadata = {
  title:"بن مانو |  سوالات متداول",
}
async function page() {
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name=" سوالات متداول"/>
    <PageHeader title="سوالات متداول"/>
    <Questions/>
    <Footer/>
    </>
  )
}

export default page