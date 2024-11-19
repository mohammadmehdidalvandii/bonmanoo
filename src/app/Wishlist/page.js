import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Favorite from '@/components/template/wishlist/Favorite/Favorite'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'
export const metadata = {
  title:"بن مانو |  مورد علاقه",
}
async function page() {
  const user = await authUser();
  return (
    <>
    <Navbar isLogin={user? true :false}/>
    <Breadcrumb name="علاقه مندی"/>
    <PageHeader     title='علاقه مندی ها'/>
    <Favorite/>
    <Footer/> 
    </>
  )
}

export default page