import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import EditAccount from '@/components/template/p-admin/EditAccount/EditAccount'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <EditAccount/>
    </AdminLayout>
  )
}

export default page