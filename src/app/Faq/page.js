import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Questions from '@/components/template/faq/Questions/Questions'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name=" سوالات متداول"/>
    <PageHeader title="سوالات متداول"/>
    <Questions/>
    <Footer/>
    </>
  )
}

export default page