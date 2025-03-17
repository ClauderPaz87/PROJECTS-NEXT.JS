'use client'
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card"
import { useState } from "react";
import { Button } from "../ui/button";
import { useNextStore } from "@/store/NextStore"
import { useRouter } from "next/navigation";

const TableProducts = ({product}) => {
  const [isExpansed, setExpansed] = useState(false)
  const { addProducts, productCart } = useNextStore()
  const router = useRouter()

  const toggleText = ()=>{
    setExpansed(!isExpansed)
  }

  const btnAddCart = (id,image,title,price)=>{
    const isProduct = productCart.some((product)=> product.title === title)

    if(!isProduct){
      addProducts(id, image, title, price)
    }
    
  }

  const btnInformation = (id)=>{
    router.push(`/product/${id}`)
  }

  return (
    <Card className="bg-slate-800 h-[95%] w-full border-0 rounded-none text-white">
        <div className="px-2">
            <button onClick={()=>btnInformation(product.id)} 
            className="w-full h-48 cursor-pointer">
              <Image className="w-full h-52 object-cover" src={product.image} width={700} height={700}
              alt={product.title}/>
            </button>
        </div>

        <CardHeader className="px-2">
            <CardTitle className="w-96">
            <p className="w-[94%] grid grid-cols-2">
              {isExpansed || product.title.length <= 25
                  ? product.title
                  : `${product.title.slice(0, 15)}`
              }
              <span className="w-10 flex justify-start">{product.title.length > 25 && (
                <button 
                    onClick={toggleText} 
                    className="text-zinc-400 hover:underline text-xs inline"
                >
                    {isExpansed ? "..." : "..."}
                </button>
                )}
              </span>
            </p>
            
            </CardTitle>
          </CardHeader>

          <div className="w-full flex justify-center px-2">
            <Button 
            onClick={()=>btnAddCart(product.id,product.image,product.title,product.price)}
            className="w-full max-w-sm min-w-[150px] text-white bg-teal-400 
            hover:bg-teal-500 cursor-pointer hover:-translate-y-1 duration-200 rounded-sm">
              Adicionar ao carrinho
            </Button>
          </div>
            
        
        
    </Card>
  )
}

export default TableProducts