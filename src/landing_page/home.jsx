import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const onSign = () => document.getElementById("sign").click()
  return (
    <div>
    <Link id='sign' to={"/auth/log-in"}></Link>
     <h1>Landing page</h1>
     <button className='bg-green-500 p-3 ml-4 mt-3 rounded-xl px-5' onClick={() => onSign()}>Sign Up</button>
    </div>
  )
}

export default HomePage