import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Dashboard from '@/components/template/p-admin/Dashboard/Dashboard'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <Dashboard/>
    </AdminLayout>
  )
}

export default page