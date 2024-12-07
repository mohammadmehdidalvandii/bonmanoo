import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import ContactList from '@/components/template/p-admin/ContactList/ContactList'
import connectToDB from '@/config/db'
import React from 'react'
import ContactModel from '@/models/Contact'

async function page() {
  await connectToDB();

  const messages = await ContactModel.find({})

  return (
    <AdminLayout>
        <ContactList messages={messages}/>
    </AdminLayout>
  )
}

export default page