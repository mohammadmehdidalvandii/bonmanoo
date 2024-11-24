import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/home/About/About'
import Adviser from '@/components/template/home/Adviser/Adviser'
import Banner from '@/components/template/home/Banner/Banner'
import Magazine from '@/components/template/home/Magazine/Magazine'
import ProdHome from '@/components/template/home/ProdHome/ProdHome'
import ProdHurka from '@/components/template/home/ProdHurka/ProdHurka'
import Store from '@/components/template/home/Store/Store'
import Video from '@/components/template/home/Video/Video'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

async function page() {
  const user = await authUser()
  return (
   <>
   <Navbar isLogin={user? true :false} userRole={user} />
   <Banner/>
   <ProdHome/>
    <Video/>
    <ProdHurka/>
    <Adviser/>
    <About/>
    <Store/>
    <Magazine/>
    <Footer/>
   </>
  )
}

export default page