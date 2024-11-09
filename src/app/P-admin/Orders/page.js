import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import OrdersList from '@/components/template/p-admin/OrdersList/OrdersList'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <OrdersList/>
    </AdminLayout>
  )
}

export default page