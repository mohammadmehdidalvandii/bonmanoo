import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Content from '@/components/template/terms-conditions/Content/Content'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'



export const metadata = {
  title:"بن مانو | شرایط و قوانین ",
}
async function page() {
  const user =  await authUser()
  return (
    <>
    <Navbar  isLogin={user? true :false}/>
    <Breadcrumb name="قوانین و مقررات"/>
    <Content/>
    <Footer/>
    </>
  )
}

export default page