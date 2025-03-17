'use client'
import { Button } from "../ui/button"
import { useNextStore } from "@/store/NextStore"

const ButtonInformation = ({products}) => {
  const { addProducts, productCart } = useNextStore()
  const btnAddCart = ()=>{
    const validationProduct = productCart.some((product)=> product.title === product.title)
    if(!validationProduct){
       addProducts(products.id,products.image,products.title,products.price)
    }
    
  }
  return (
    <Button 
        onClick={()=>btnAddCart()}
        className="w-full max-w-sm min-w-[150px] text-white bg-teal-400 
        hover:bg-teal-500 cursor-pointer hover:-translate-y-1 duration-200 rounded-sm mt-3">
        Adicionar ao carrinho
    </Button>
  )
}

export default ButtonInformation