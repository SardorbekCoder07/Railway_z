import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const router = useNavigate();
  return (
    <div>
     <h1>Landing page</h1>
     <button onClick={() => router("signIn")}>Sign Up</button>
    </div>
  )
}

export default SignUp