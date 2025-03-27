'use client'
import Image from "next/image"
import cart from '../../../public/image_cartCredit.jpg'
import { useDeliveryStore } from "@/store/DeliveryStore"
import { Button } from "../ui/button"
import { useEffect } from "react"
import Link from "next/link"

const SheetCart = () => {
  const { foods, counterIncrement, total, calcTotal, counterDecrement } = useDeliveryStore()

  useEffect(() => {
    const tot = foods.reduce((acu,food)=>{
      return Number(acu) + Number(food.price)
    },0)
    calcTotal(tot)
  }, [calcTotal, foods])
  
  return (
    <div>
        <nav >
            <div className="w-96 flex justify-center">
              <Image src={cart} height={700} alt="Cartão" className="object-cover w-96"/>
            </div>
            <div className="flex justify-center">
              <p className="text-lg font-semibold">Menu Category</p>
            </div>
            {foods.map((food)=>(
              
              <div key={food.id} className="flex ml-5 mt-3">
                <div>
                  <Image src={food.image} alt={food.name} width={700} height={100}
                  className="w-16 h-16 rounded-md"/>
                </div>

                <div className="flex flex-col ml-3 gap-2 mt-2 w-20">
                  <div>
                    <p className="font-bold text-sm">{food.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-orange-300">X {food.quantity}</p>
                  </div>
                </div>

                <div className="flex mt-7 ">
                  <div className="relative top-3.5 left-6">
                    <Button
                    onClick={()=>counterDecrement(food.id)} 
                    className="text-3xl font-light cursor-pointer px-0" variant={"none"}>-</Button>
                  </div>
                  <div className="relative top-3.5 left-8">
                    <Button 
                    onClick={()=>counterIncrement(food.id)} 
                    className="text-3xl font-light cursor-pointer px-0" variant={"none"}>+</Button>
                  </div>
                </div>

                <div className="w-20 h-18 justify-end flex items-center ml-18">
                  <p className="text-sm text-orange-400">${food.price.toFixed(2)}</p>
                </div>

              </div>

            ))}

            {foods.length >= 1 ? 
              <div className="mt-12 mb-2">
                <div className="flex justify-between">
                  <p className="font-semibold ml-5">Total</p>
                  <p className="text-orange-400 mr-5 text-sm">$ {typeof total === 'number' ? total.toFixed(2) : '0.00'}</p>
                </div>
                <div className="w-full mt-5 px-4">
                  <Link href={"https://buy.stripe.com/7sIdUtaBH4mGaVa6op"}>
                    <Button variant={"none"} className="text-white w-full bg-orange-500 rounded-full font-semibold
                    cursor-pointer hover:bg-orange-600">
                      Check Out
                    </Button>
                  </Link>
                </div>
              </div> 
            : ""}
            
            
        </nav>
    </div>
  )
}

export default SheetCart