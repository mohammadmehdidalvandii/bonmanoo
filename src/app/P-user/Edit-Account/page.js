import UserLayout from '@/components/layout/UserLayout/UserLayout'
import EditAccount from '@/components/template/p-user/EditAccount/EditAccount'
import React from 'react'

function page() {
  return (
    <UserLayout>
        <EditAccount/>
    </UserLayout>
  )
}

export default page