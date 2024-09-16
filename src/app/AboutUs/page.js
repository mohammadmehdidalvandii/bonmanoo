import Breadcrumb from '@/components/modules/Breadcrumb/Breadcrumb'
import Footer from '@/components/modules/Footer/Footer'
import Navbar from '@/components/modules/Navbar/Navbar'
import About from '@/components/template/about/About/About'
import Counter from '@/components/template/about/Counter/Counter'
import CoValue from '@/components/template/about/CoValue/CoValue'
import Future from '@/components/template/about/Future/Future'
import History from '@/components/template/about/History/History'
import Responsible from '@/components/template/about/Responsible/Responsible'
import React from 'react'


export const metadata = {
    title:"بن مانو | درباره ما",
}

function page() {
  return (
    <>
        <Navbar/>
        <Breadcrumb name="درباره ما"/>
        <About/>
        <Future/>
        <History/>
        <CoValue/>
        <Responsible/>
        <Counter/>
        <Footer/>
    </>
  )
}

export default page