import TableProducts from "./TableProducts";

const Products = async () => {

  const getProducts = async ()=>{
    const response = await fetch(`https://fakestoreapi.com/products/`);
    return response.json()
    
  }
  const products = await getProducts()

  return (
    <div className="grid grid-cols-2 h-full w-full mt-16 gap-6 xl:grid-cols-4 xl:px-56 lg:grid-cols-4
    lg:px-16 sm:grid-cols-3">
    

        {products.map((product)=>(
            <div className="flex justify-center" key={product.id}>
                <TableProducts product={product} />
            </div>
        ))}
        

    </div>
  )
}

export default Products