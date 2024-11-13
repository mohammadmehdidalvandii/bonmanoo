import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import ProductAdd from '@/components/template/p-admin/ProductAdd/ProductAdd'
import React from 'react'
import connectToDB from '@/config/db'
import CategoryProductsModel from '@/models/CategoryProducts';
async function page() {
  await connectToDB();
  const categoryProducts = await CategoryProductsModel.find({})

  return (
    <AdminLayout>
        <ProductAdd cateProducts={categoryProducts}/>
    </AdminLayout>
  )
}

export default page