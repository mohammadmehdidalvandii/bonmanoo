import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Favorite from '@/components/template/wishlist/Favorite/Favorite'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="علاقه مندی"/>
    <PageHeader     title='علاقه مندی ها'/>
    <Favorite/>
    <Footer/> 
    </>
  )
}

export default page