'use client'
import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import SheetMain from "./SheetMain"
import { useNextStore } from "@/store/NextStore"

const SheetHeader = () => {
  const {productCart} = useNextStore()

  return (
    <Sheet>
      <SheetTrigger asChild>
          <Button className="bg-slate-800 text-gray-200 mr-9 hover:bg-slate-800 cursor-pointer ">
              <ShoppingCart size={300}/>
              <span className="w-4 relative -top-2 right-2.5 rounded-full bg-teal-500 text-white text-center text-xs">
                {productCart.length}
              </span>
              <span className="sr-only">Abrir / Fechar</span>
          </Button>
      </SheetTrigger>
        <SheetContent side="right" className="w-[85%] bg-slate-800 text-white border-0 shadow-md overflow-auto">
            <SheetMain/>
        </SheetContent>
    </Sheet>
  )
}

export default SheetHeader