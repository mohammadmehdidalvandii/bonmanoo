import Sidebar from '@/components/modules/Sidebar/Sidebar'
import TopBar from '@/components/modules/TopBar/TopBar'
import { authUser } from '@/utils/serverHelpers'
import { redirect } from 'next/navigation';
import React from 'react'
import { cookies } from 'next/headers';


async function AdminLayout({children}) {

  const user = await authUser();

  const token = cookies().get("token");
  if(!token){
    return redirect("/LoginRegister")
  }

  if(user){
    if(user.role !== "ADMIN"){
      return redirect("/LoginRegister")
    }
  } 


  return (
    <>
     <section className='adminLayout'>
    <div className="row">
      <div className="col-lg-2 col-md-12 col-sm-12">
        <Sidebar role={user?.role}/>
      </div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        <TopBar 
            name={user?.username}
            role={
              user?.role === "ADMIN" ? "ادمین " : "مشتری"
            }
        />
       {children}
      </div>
    </div>
    </section>
    </>
  )
}

export default AdminLayout