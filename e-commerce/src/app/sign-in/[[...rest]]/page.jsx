'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center min-h-screen items-center'><SignIn/></div>
  )
  
}

export default page