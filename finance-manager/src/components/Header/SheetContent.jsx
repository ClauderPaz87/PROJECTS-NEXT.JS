import { LayoutDashboard, Package, BusFront,ShoppingBag, Users2,CarTaxiFront } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SheetContentApp = () => {
  return (
    <div>
      <nav className="grid gap-6 text-lg font-medium">
        <Link href="#" 
        className="rounded-full flex h-10 w-10 bg-primary text-lg
        items-center justify-center text-primary-foreground md:text-base gap-4 mt-1 ">
          <span className="sr-only" >Logo</span>
          <Package className="h-5 w-5 transition-all"/>
        </Link>

        <Link href="/CardDashboard" 
        className="flex items-center gap-4 px-2.5
        hover:text-foreground">
          <LayoutDashboard className="h-5 w-5 transition-all"/>
          <span>DashBoard</span>
        </Link>

        <Link href="/Trips" 
        className="flex items-center gap-4 px-2.5
        hover:text-foreground">
          <ShoppingBag className="h-5 w-5 transition-all"/>
           <span >Viagens</span>
        </Link>

        <Link href="/clientes" 
        className="flex items-center gap-4 px-2.5
        hover:text-foreground">
          <Users2 className="h-5 w-5 transition-all"/>
          <span>Clientes</span>
        </Link>

        <Link href="/Drivers" 
        className="flex items-center gap-4 px-2.5
        hover:text-foreground">
          <BusFront className="h-5 w-5 transition-all"/>
          <span>Motoristas</span>
        </Link>

        <Link href="/taxi" 
        className="flex items-center gap-4 px-2.5
        hover:text-foreground">
          <CarTaxiFront className="h-5 w-5 transition-all"/>
          <span>Taxista</span>
        </Link>

      </nav>
    </div>
  )
}

export default SheetContentApp