import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/contact/Banner/Banner'
import Contact from '@/components/template/contact/Contact/Contact'
import ContactInfo from '@/components/template/contact/ContactInfo/ContactInfo'
import ExCoffee from '@/components/template/contact/ExCoffee/ExCoffee'
import QandA from '@/components/template/contact/QandA/QandA'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

export const metadata = {
  title:"بن مانو | تماس با ما",
}
async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="تماس با ما"/>
    <Banner/>
    <Contact/>
    <ContactInfo/>
    <ExCoffee/>
    <QandA/>
    <Footer/>
    </>
  )
}

export default page