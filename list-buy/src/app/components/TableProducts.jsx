"use client";
import { useListBuyStore } from "@/store/ListProductstore";
import { MdDelete } from "react-icons/md";
import Image from "next/image";

const TableProducts = () => {
  const { products, updateCountIncrement, updateCountDecrement,deleteProduct } = useListBuyStore();
  
  return (
    <div className="mt-12">
      <table className="w-[80vw]">
        <thead>
          <tr className="w-full text-zinc-600">
            <th className="flex justify-start">Produtos</th>
            <th>Preço</th>
            <th className="w-60">Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="w-full h-28">
          {products.map((product) => (
            <tr key={product.id} className="border-b border-zinc-400 h-36">
              <td className="flex items-center h-24 w-28 pt-12">
                <Image
                  src={product.image}
                  alt={`Imagem ${product.product}`}
                  className="bg-transparent w-24 h-24"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col pt-1 pl-10">
                  <p className="font-bold pb-2 w-60">{product.product}</p>
                  <p className="text-sm text-zinc-600 pb-2">{product.category}</p>
                </div>
              </td>
              <td className="">
                <p className="flex justify-center font-bold text-green-500">
                  R${product.price}
                </p>
              </td>
              <td className="pl-20 pb-1">
                <div className="bg-zinc-300 w-24 px-2 flex h-7 items-center justify-between rounded-full">
                  <button
                    type="button" 
                    onClick={() => updateCountDecrement(product.id)}
                    className="font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-blue-500">{product.value}</span>
                  <button
                    type="button" 
                    onClick={() => updateCountIncrement(product.id)}
                    className="font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <p className="flex justify-center font-bold mt-5 text-red-500">
                  R${product.total.toFixed(2)}
                </p>
                <button type="button" onClick={()=>deleteProduct(product.id)} type="button" className="relative left-44 bottom-5 cursor-pointer">
                  <MdDelete size={20}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
