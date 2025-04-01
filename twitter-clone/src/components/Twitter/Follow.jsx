import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const Follow = () => {
  return (
    <div className='hidden h-screen w-[75vw] lg:flex'>
      <div className='flex flex-col w-full pr-14 '>

        <div>
          <span><Search className='w-5 h-5 text-zinc-500 relative top-7 left-2'/></span>
          <Input placeholder="Search" className="w-full border-0 focus:outline-2 focus:outline-blue-400
          rounded-full pl-9 text-white focus:duration-150"/>
        </div>

        <Card className="rounded-md bg-slate-950 border border-zinc-700 text-white p-1 w-full mt-5">
          <div className="p-3 xl:p-1 h-full">
            <p className="font-bold text-xl mb-0 h-2">Subscribe to Premium</p>
          </div>
          <div className="p-1 h-full w-full">
            <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
          </div>
          <div className='mb-2.5'>
            <Button 
            variant={"none"}
            className="rounded-full w-24 bg-blue-400 text-white cursor-pointer">Subscribe</Button>
          </div>
        </Card>

        <Card className="rounded-md bg-slate-950 border border-zinc-700 text-white p-1 w-full mt-5">
          <div className="p-1 h-3">
            <p className="font-bold text-xl mb-0">What’s happening</p>
          </div>

          <div className='flex flex-col gap-2.5'>

            <div className="p-1 pt-2 h-18 w-full">
              <span className='text-sm text-zinc-500'>Trending in Brazil</span>
              <p className='font-bold'>Ratinho</p>
              <span className='text-sm text-zinc-500'>2,378 posts</span>
            </div>
            <div className="p-1 pt-2 h-18 w-full">
              <span className='text-sm text-zinc-500'>Music · Trending</span>
              <p className='font-bold'>ally</p>
              <span className='text-sm text-zinc-500'>41.4K posts</span>
            </div>
            <div className="p-1 pt-2 h-18 w-full">
              <span className='text-sm text-zinc-500'>Trending in Brazil</span>
              <p className='font-bold'>banco master</p>
              <span className='text-sm text-zinc-500'>5,776 posts</span>
            </div>
            <div className="p-1 pt-2 h-18 w-full">
              <span className='text-sm text-zinc-500'>UEFA Champions League · Trending</span>
              <p className='font-bold'>Benzema</p>
              <span className='text-sm text-zinc-500'>5,191 posts</span>
            </div>

          </div>

          <div className='mb-2.5'>
            <Button 
            variant={"none"}
            className="rounded-full w-24 bg-blue-400 text-white cursor-pointer">Show More</Button>
          </div>
        </Card>

      </div>
    </div>
  )
}

export default Follow