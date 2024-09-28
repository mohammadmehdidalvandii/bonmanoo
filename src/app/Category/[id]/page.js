import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import CategoryContent from '@/components/template/category/CategoryContent/CategoryContent'
import CategoryMedia from '@/components/template/category/CategoryMedia/CategoryMedia'
import CategorySide from '@/components/template/category/CategorySide/CategorySide'
import CategorySlider from '@/components/template/category/CategorySlider/CategorySlider'
import React from 'react'

export const metadata = {
  title:"بن مانو | جزئیات مقاله  ",
}
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
          <CategoryContent/>
        </div>
        <div className="col-lg-1 col-md-12 d-lg-block d-none">
          <CategoryMedia/>
        </div>
      </div>
    </div>
    <CategorySlider/>
    <Footer/>
    </>
  )
}

export default CategoryDetails