'use client'
import Image from 'next/image'
import food from '../../../public/image_food.jpg'
import { Card } from '../ui/card'
import { Avatar } from '../ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import SheetCart from './SheetCart'
import { useDeliveryStore } from '@/store/DeliveryStore'
import { useRouter } from 'next/navigation'
import { useClerk, useUser } from '@clerk/nextjs'
import avatar from '../../../public/image_avatar.jpg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { Suspense } from 'react'
import { SearchInput } from './SearchInput'
import { ShoppingCart } from 'lucide-react'

const HeaderContent = () => {
  const { foods } = useDeliveryStore()
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const router = useRouter()

  const btnSign = () => {
    if (isSignedIn) {
      signOut()
    } else {
      router.push('/signIn')
    }
  }

  return (
    <div>
      <Card className="p-2 rounded-sm h-14">
        <nav className="flex justify-between h-full items-center">
          <div className="ml-3">
            <Image
              src={food}
              alt="Comida"
              width={150}
              height={150}
              className="w-12 h-12 rounded-full mr-10"
            />
          </div>
          
          <Suspense fallback={<div className="w-[80vw] h-10 bg-gray-200 animate-pulse rounded-full"></div>}>
            <SearchInput />
          </Suspense>

          <div className="flex items-center">
            <Sheet>
              <span
                className="relative bottom-3 left-8 bg-orange-400 text-white 
                rounded-full w-6 flex justify-center text-sm"
              >
                {foods.length}
              </span>
              <SheetTrigger className="cursor-pointer mr-9 md:mr-4">
                <span>
                  <ShoppingCart />
                </span>
                <span className="sr-only">Abrir / Fechar</span>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-96 text-slate-900 border-0 shadow-md 
                overflow-x-hidden h-screen"
              >
                <SheetCart />
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center gap-2 pr-6 md:mr-0">
            <TooltipProvider>
              <Avatar>
                {isSignedIn ? <Image className="w-10" src={avatar} alt="CN" /> : ''}
              </Avatar>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant={'secondary'} onClick={btnSign} className="cursor-pointer">
                    {isSignedIn ? user.firstName : 'Fazer Login'}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isSignedIn ? 'Clique para Sair' : 'Fazer Login'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
      </Card>
    </div>
  )
}

const Header = () => {
  return (
    <Suspense fallback={<div className="w-[80vw] h-10 bg-gray-200 animate-pulse rounded-full"></div>}>
      <SearchInput />
    </Suspense>
  )
}

export default Header