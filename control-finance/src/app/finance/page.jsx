import Header from '@/components/Header/Header'
import ResumeFinance from '@/components/Product/ResumeFinance'
import ValueProduct from '@/components/Product/ValueProduct'
import React from 'react'

const page = () => {
  return (
    <div>
        <div><Header/></div>
        <div className='flex justify-center gap-16'>
            <ValueProduct/>
            <ResumeFinance/>
        </div>
    </div>
  )
}

export default page