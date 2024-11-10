import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import ContactList from '@/components/template/p-admin/ContactList/ContactList'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <ContactList/>
    </AdminLayout>
  )
}

export default page