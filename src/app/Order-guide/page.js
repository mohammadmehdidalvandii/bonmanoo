import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'


export const metadata = {
  title:"بن مانو |  ثبت شفارش",
}
async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="چگونه در بن‌مانو سفارش خود را ثبت کنم؟"/>
    <Footer/>
    </>
  )
}

export default page