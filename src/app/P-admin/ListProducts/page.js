import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import ProductsList from '@/components/template/p-admin/ProductsList/ProductsList'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <ProductsList/>
    </AdminLayout>
  )
}

export default page