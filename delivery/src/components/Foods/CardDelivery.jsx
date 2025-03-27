import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import motoboy from '../../../public/image_person-motoboy.jpg.png'

const CardDelivery = () => {
  return (
    <div className='mt-3 mx-8 h-[25vh]'>
        <Card className="h-full rounded-sm bg-orange-100 border-0 p-5">
            <div className='flex justify-between h-full'>
                <div className='flex flex-col w-80'>
                    <CardTitle className="text-2xl font-medium text-zinc-800">Hello Jeremy</CardTitle>
                    <CardDescription className="mt-3 w-52 md:w-72">Get free descount for every
                        <span className='text-orange-400'> $20 </span>
                        purchase
                    </CardDescription>
                    <Button
                    variant={'none'}
                    className="mt-3 w-32 mr-2 rounded-full bg-orange-400 text-white hover:-translate-y-1.5
                    hover:bg-orange-500 duration-300 cursor-pointer">
                        Learn More
                    </Button>
                </div>
                <div className='flex items-center mb-2.5'>
                    <Image src={motoboy} alt='imagem de um motoboy' width={200} className='h-40'/>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default CardDelivery

