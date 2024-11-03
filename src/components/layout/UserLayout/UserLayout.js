import TopBar from '@/components/modules/TopBar/TopBar'
import React from 'react'

function UserLayout({Children}) {
  return (
    <section className='userLayout'>
    <div className="row">
      <div className="col-lg-2 col-md-12 col-sm-12">
        this sidebar
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        <TopBar/>
       {Children}
      </div>
    </div>
    </section>
  )
}

export default UserLayout