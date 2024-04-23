import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const onSign = () => document.getElementById("sign").click()
  return (
    <div>
    <Link id='sign' to={"/auth/log-out"}></Link>
     <h1>Landing page</h1>
     <button onClick={() => onSign()}>Sign Up</button>
    </div>
  )
}

export default HomePage