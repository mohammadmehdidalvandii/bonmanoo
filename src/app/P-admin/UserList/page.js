import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Users from '@/components/template/p-admin/Users/Users'
import connectToDB from '@/config/db'
import React from 'react'
import UserModel from '@/models/User'


async function page() {
  await connectToDB()

const users = await UserModel.find({})

  return (
    <AdminLayout>
       <Users users={users}/>
    </AdminLayout>
  )
}

export default page