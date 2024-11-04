import UserLayout from '@/components/layout/UserLayout/UserLayout'
import AddAddress from '@/components/template/p-user/AddAddress/AddAddress'
import React from 'react'

function page() {
  return (
   <UserLayout>
     <AddAddress/>
   </UserLayout>
  )
}

export default page