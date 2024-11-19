import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Login from '@/components/template/loginRegister/Login/Login'
import Register from '@/components/template/loginRegister/Register/Register'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

export const metadata = {
  title:"بن مانو | ثبت نام ورود",
}
async function page() {
  const user =  await authUser()
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="ثبت نام | ورود"/>
    <div className="containers">
        <div className="row row-gap-4">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <Login/>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <Register/>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default page