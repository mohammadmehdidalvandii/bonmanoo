import Sidebar from '@/components/modules/Sidebar/Sidebar'
import TopBar from '@/components/modules/TopBar/TopBar'
import React from 'react'
import { authUser } from '@/utils/serverHelpers'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';


async function UserLayout({children}) {
  const user = await authUser();

  const token = cookies().get("token");
  if(!token){
    return redirect("/LoginRegister")
  }

  if(user){
    if(user.role !== "USER"){
      return redirect("/LoginRegister")
    }
  }
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