import React from 'react'
import NavList from './home'
import Data from './data'
import ReportBrig from './reportBrig'
import { DashboardNavbar } from '@/superAdmin/widgets/layout'


const Brigade = () => {
  return (
    <div className=''>
      <div>
        <DashboardNavbar/>
      </div>
    <div className='flex flex-col justify-center px-6'>
     <Data/>
     <NavList/>
    </div>
    {/* <ReportBrig/> */}
    </div>
  )
}

export default Brigade