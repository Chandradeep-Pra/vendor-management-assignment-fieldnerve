import HeaderLayout from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <HeaderLayout />
          <main className='flex-1 bg-muted/30'>
            {children}
          </main>
        </div>
    </div>
  )
}

export default DashboardLayout