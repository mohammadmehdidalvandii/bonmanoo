import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Articles from '@/components/template/blog/Articles/Articles'
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
    <div className="containers">
    <div className="row mt-5">
      <div className="col-lg-8 col-md-8 col-sm-12">
        <Articles/>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12"></div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default page