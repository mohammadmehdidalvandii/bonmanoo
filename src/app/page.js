import Navbar from '@/components/modules/Navbar/Navbar'
import Banner from '@/components/template/home/Banner/Banner'
import ProdHome from '@/components/template/home/ProdHome/ProdHome'
import Video from '@/components/template/home/Video/Video'
import React from 'react'

function page() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <ProdHome/>
    <Video/>
   <br /><br /><br /><br /><br />
   </>
  )
}

export default page