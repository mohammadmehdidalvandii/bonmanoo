import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import CategorySide from '@/components/template/category/CategorySide/CategorySide'
import React from 'react'

function CategoryDetails() {
  return (
    <>
    <Navbar/>
    <Breadcrumb name="جزئیات مقاله"/>
    <div className="containers">
      <div className="row">
        <div className="col-lg-3 col-md-12 d-lg-block d-none">
          <CategorySide/>
        </div>
        <div className="col-lg-8 col-md-12">
          this is col
        </div>
        <div className="col-lg-1 col-md-12 d-lg-block d-none">
          this is col
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default CategoryDetails