import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import ProductAdd from '@/components/template/p-admin/ProductAdd/ProductAdd'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <ProductAdd/>
    </AdminLayout>
  )
}

export default page