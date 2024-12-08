import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Dashboard from '@/components/template/p-admin/Dashboard/Dashboard'
import React from 'react'
import connectToDB from '@/config/db'
import ContactModel from '@/models/Contact';
import UserModel from '@/models/User'

async  function page() {
  await  connectToDB();

  const messages = await ContactModel.find({})
  const users = await UserModel.find({})

  return (
    <AdminLayout>
        <Dashboard messages={messages} users={users}/>
    </AdminLayout>
  )
}

export default page