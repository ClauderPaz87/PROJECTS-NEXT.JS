"use client";
import TableProducts from "./TableProducts";
import { useListBuyStore } from "@/store/ListProductstore";

const Products = () => {
  const { addProductFromAPI } = useListBuyStore();

  return (
    <div className="bg-gray-50 min-h-[75vh] w-full shadow-lg rounded-b-md p-10">
      <div className="flex justify-center">
        <p className="font-semibold text-3xl">Seu Carrinho</p>
      </div>
      <form  onSubmit={(e)=>addProductFromAPI(e.preventDefault())} className="pt-5">
        <button
        type="submit"
          className="bg-green-500 text-white font-medium rounded-md p-2 hover:-translate-y-1 
        duration-200 hover:bg-green-700 cursor-pointer"
        >
          Add product
        </button>

        <TableProducts />
      </form>
    </div>
  );
};

export default Products;
