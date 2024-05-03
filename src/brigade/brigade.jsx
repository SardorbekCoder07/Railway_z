import React from 'react'
import NavList from './navbar'
import Data from './data'
import ReportBrig from './reportBrig'

const Brigade = () => {
  return (
    <div className=''>
    <div className='flex flex-col justify-center px-6'>
     <Data/>
     <NavList/>
    </div>
    {/* <ReportBrig/> */}
    </div>
  )
}

export default Brigade