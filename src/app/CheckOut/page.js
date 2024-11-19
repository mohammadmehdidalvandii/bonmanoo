import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Payment from '@/components/template/checkOut/Payment/Payment'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="پرداخت"/>
    <Payment/>
    <Footer/>
    </>
  )
}

export default page