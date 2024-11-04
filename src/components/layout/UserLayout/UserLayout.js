import Sidebar from '@/components/modules/Sidebar/Sidebar'
import TopBar from '@/components/modules/TopBar/TopBar'
import React from 'react'

function UserLayout({children}) {
  return (
    <section className='userLayout'>
    <div className="row">
      <div className="col-lg-2 col-md-12 col-sm-12">
        <Sidebar/>
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        <TopBar/>
       {children}
      </div>
    </div>
    </section>
  )
}

export default UserLayout