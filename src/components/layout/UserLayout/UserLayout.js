import React from 'react'

function UserLayout({Children}) {
  return (
    <>
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12">
        this sidebar
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12">
        this topBar
       {Children}
      </div>
    </div>
    </>
  )
}

export default UserLayout