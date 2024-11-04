import UserLayout from '@/components/layout/UserLayout/UserLayout'
import OrderList from '@/components/template/p-user/OrderList/OrderList'
import React from 'react'

function page() {
  return (
    <UserLayout>
        <OrderList/>
    </UserLayout>
  )
}

export default page