import Navbar from '@/components/modules/Navbar/Navbar'
import Adviser from '@/components/template/home/Adviser/Adviser'
import Banner from '@/components/template/home/Banner/Banner'
import ProdHome from '@/components/template/home/ProdHome/ProdHome'
import ProdHurka from '@/components/template/home/ProdHurka/ProdHurka'
import Video from '@/components/template/home/Video/Video'
import React from 'react'

function page() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <ProdHome/>
    <Video/>
    <ProdHurka/>
    <Adviser/>
   <br /><br /><br /><br /><br />
   </>
  )
}

export default page