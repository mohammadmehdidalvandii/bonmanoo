import UserLayout from '@/components/layout/UserLayout/UserLayout'
import Dashboard from '@/components/template/p-user/Dashboard/Dashboard'
import React from 'react'


export const metadata = {
    title:"بن مانو |  user-panel ",
  }

function page() {
  return (
    <UserLayout>
        <Dashboard/>  
    </UserLayout>
  )
}

export default page