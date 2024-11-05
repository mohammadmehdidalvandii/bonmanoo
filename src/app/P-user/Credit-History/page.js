import UserLayout from '@/components/layout/UserLayout/UserLayout'
import Credit from '@/components/template/p-user/credit-history/Credit/Credit'
import History from '@/components/template/p-user/credit-history/History/History'
import React from 'react'

function page() {
  return (
    <UserLayout>
        <Credit/>
        <History/>
    </UserLayout>
  )
}

export default page