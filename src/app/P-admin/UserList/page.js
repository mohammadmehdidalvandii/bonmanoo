import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Users from '@/components/template/p-admin/Users/Users'
import React from 'react'

function page() {
  return (
    <AdminLayout>
       <Users/>
    </AdminLayout>
  )
}

export default page