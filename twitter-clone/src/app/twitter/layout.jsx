'use client'
import Follow from '@/components/Twitter/Follow'
import SideBar from '@/components/Twitter/SideBar'
import { useUser } from '@clerk/nextjs'

export default function Layout({ children }) {
  const {user} = useUser()

  if(!user){
    return(
        <div className="w-full flex justify-center h-screen items-center">
            <div className="font-medium text-white flex w-44 gap-5 items-center pt-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500">
              </div>
              <p className='text-gray-100'>Carregando...</p>
            </div>
        </div>
    )
}

  return (
      <div className="h-screen w-full flex">
        <SideBar/>
        <main className="flex-1 w-full ">
          {children}
        </main>
        <Follow/>
      </div>
  )
}