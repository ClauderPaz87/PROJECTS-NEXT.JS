import ButtonInformation from "@/components/Products/ButtonInformation";
import Image from "next/image"

const page = async ({params}) => {
  const { id } = await params

  const getProducts = async ()=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json()
    
  }
  const products = await getProducts()

  return (
    <div className="flex flex-col justify-center md:flex-row mt-14 text-white">
        <div className="mr-4 flex justify-center">
            <Image src={products.image} alt={products.title} width={700} height={700} className="w-80 h-80 rounded-md"/>
        </div>
        <div className="flex flex-col w-full md:w-96 my-auto h-72 text-center">
            <div className="w-full md:w-96 h-full text-center ">
                <p className="mb-3">{products.title}</p>
                <p className="text-teal-400 text-sm">{products.description}</p>
                <p className="mt-3 text-teal-500">R$ {products.price.toFixed(2)}</p>
                <ButtonInformation products={products}/>
            </div>
        </div>
    </div>
  )
}

export default page