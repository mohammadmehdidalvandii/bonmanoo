import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import BlogHeader from '@/components/template/blog/BlogHeader/BlogHeader'
import Category from '@/components/template/blog/Category/Category'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="مجله بن مانو"/>
    <BlogHeader/>
    <Category/>
    <Footer/>
    </>
  )
}

export default page