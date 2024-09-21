import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import Gallery from '@/components/template/productSingle/Gallery/Gallery'
import React from 'react'

function ProductSingle() {
  return (
   <>
    <Navbar/>
    <Breadcrumb name="جزئیات محصول"/>
    <div className="containers">
        <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-6 col-xs-12">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <Gallery/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">

                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">

            </div>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default ProductSingle