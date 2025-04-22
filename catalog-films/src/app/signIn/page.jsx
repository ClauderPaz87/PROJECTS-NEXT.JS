'use client'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex justify-center h-[90vh] items-center'><SignIn/></div>
  )
  
}

export default page