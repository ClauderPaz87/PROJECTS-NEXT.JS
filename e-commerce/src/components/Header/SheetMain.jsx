'use client'
import { useNextStore } from "@/store/NextStore"
import Image from "next/image"
import { Button } from "../ui/button"
import { useEffect } from "react"

const SheetMain = () => {
  const { productCart, increment, descrement, buyTotal, total } = useNextStore()

  useEffect(() => {
    const tot = productCart.reduce((acu,index)=>{
        return Number(acu) + Number(index.price)
    },[0])
    buyTotal(tot)
  }, [productCart,buyTotal])
  

  return (
    <div>
        <nav className="mt-7">
            <p className="flex justify-center text-xl border-b w-full font-semibold">Carrinho de compras</p>
        </nav>
    
        {productCart.map((product)=>(
            <nav className="flex flex-col w-full text-white">
                <div key={product.id} className="mt-7 ml-3 flex">
                    <div>
                        <Image width={700} height={700} src={product.image} alt={product.title}
                        className="w-36 h-36"/>
                    </div>

                    <div className="flex flex-col ml-2 mt-2 gap-2">
                        <p className="text-sm">{product.title}</p>
                        <p className="text-sm">Quantidade: {product.quantity} </p>
                        <p className="text-sm text-teal-400 font-medium">R${product.price.toFixed(2)}</p>
                        <p className="mt-2">
                            <Button 
                            className="bg-slate-800 border border-gray-200 hover:bg-zinc-400 cursor-pointer mr-2"
                            onClick={()=>increment(product.id)}
                            >
                                Adicionar
                            </Button>
                            <Button 
                            className="bg-slate-800 border border-gray-200 hover:bg-zinc-400 cursor-pointer"
                            onClick={()=>descrement(product.id)}>
                                Remover
                            </Button>
                        </p>
                    </div>
                </div>
            </nav>
        ))}
          
            <nav className="px-3">
                <p className="text-xl text-teal-400 mt-5 underline">Total: R$ {total}</p>
                <Button 
                    onClick={()=>finaleBuy()}
                    className="w-full max-w-sm min-w-[150px] text-white bg-teal-400
                    hover:bg-teal-500 cursor-pointer hover:-translate-y-1 duration-200 rounded-sm mt-3">
                    Finalizar Pedido
                </Button>
            </nav>            
    </div>
  )
}

export default SheetMain