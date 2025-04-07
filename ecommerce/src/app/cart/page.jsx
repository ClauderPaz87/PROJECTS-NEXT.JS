"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { useMarkeStore } from "@/store/MarketStore";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const page = () => {
  const { productsCart, incrementUnity, decrementUnity,calcTotal,total,price,shipping,deleteProduct } = useMarkeStore();

  useEffect(()=>{
    calcTotal()
  },[productsCart])
  
  if (productsCart.length === 0) {
    return (
      <div className="min-h-[85vh] w-full flex justify-center items-center ">
        <p className="text-zinc-800">Nenhum produto no carrinho</p>
      </div>
    );
  }

  return (
    <div className="mt-8 gap-3.5 flex flex-col lg:flex-row md:justify-around items-center">
      <div className="w-full lg:w-[65%] lg:pl-5 flex flex-col gap-4">
        {productsCart.map(
          (product) => (
            (
              <Card key={product.id} className=" w-full rounded-sm">
                <div className="border-b border-b-zinc-300 h-8">
                  {product.shipping === 0 ? (
                    <p className="font-semibold text-lg ml-5">Produto</p>
                  ) : (
                    <p className="text-green-600 italic font-extrabold text-lg flex flex-row gap-1 ml-5">
                      <span>
                        <Zap className="fill-green-600" />
                      </span>
                      Full
                    </p>
                  )}
                </div>

                <div className="p-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-center w-full sm:flex-row">
                      <Link href={`/product/${product.id}`} className="flex justify-center sm:justify-normal">
                        <Image
                          src={product.img}
                          alt={`Imagem ${product.name}`}
                          width={700}
                          height={100}
                          className="w-32 h-28 rounded-sm"
                        />
                      </Link>
                      <div className="flex flex-col w-full ml-3 gap-2.5 mt-3">
                        <Link
                          href={`/product/${product.id}`}
                          className="font-semibold flex justify-center sm:justify-normal"
                        >
                          {product.name}
                        </Link>
                        <div className="flex gap-6">
                          <button 
                          onClick={()=>deleteProduct(product.id)}
                          className="text-blue-400 hover:underline cursor-pointer mt-3.5">
                            Excluir
                          </button>
                          <Link href={"https://buy.stripe.com/6oE4jTfW18CW7IY6oq"} className="text-blue-400 hover:underline cursor-pointer mt-3.5 w-full">
                            Comprar agora
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="mr-3.5 sm:ml-6 w-80 flex flex-col items-center">
                      <Card className="w-28 h-4 border border-zinc-300 rounded-sm flex items-center">
                        <div className="flex gap-6 h-full items-center justify-center ">
                          <button
                            onClick={() => decrementUnity(product.id, product)}
                            className="text-2xl cursor-pointer"
                          >
                            -
                          </button>
                          {product.unity}
                          <button
                            onClick={() => incrementUnity(product.id, product)}
                            className="text-2xl text-blue-500 cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      </Card>

                      <div className="flex justify-center mt-6">
                        <p className="text-zinc-400 text-xs">
                          {product.stock} disponíveis
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end w-60 sm:pl-10">
                      <p className="text-xl w-full flex text-zinc-800">
                        R$ {product.price}
                        <span className="h-auto text-sm flex items-start">
                          {product.price
                            .toFixed(2)
                            .split(".")[1]}
                        </span>
                      </p>
                      
                    </div>
                  </div>
                </div>
              </Card>
            )
          )
        )}
      </div>

      <div className="w-full lg:w-[28%] lg:mr-18 mt-1.5">
        <Card className="rounded-sm p-2 w-full">
          <CardHeader className={"h-15 border-b border-b-zinc-300 p-0"}>
            <CardTitle className="pl-3 pt-5">Resumo da compra</CardTitle>
          </CardHeader>
          <div className="flex flex-col pl-3 pt-5 gap-1.5">
            <div className="flex justify-between">
              <p className="text-sm text-zinc-800">Produto</p>
              <p className="text-sm text-zinc-800 mr-3.5">R$ {price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-zinc-800">Frete</p>
              <p className="text-sm text-zinc-800 mr-3.5">R$ {shipping}</p>
            </div>
            <div className="flex justify-between mt-6">
              <p className="text-lg text-zinc-800 font-bold">Total</p>
              <p className="text-lg text-zinc-800 mr-3.5 font-bold">R$ {total}</p>
            </div>
            <div className="mt-4 w-full pb-3 pr-3.5">
              <Link href={"https://buy.stripe.com/6oE4jTfW18CW7IY6oq"} className="w-full">
                <Button
                  variant={"none"}
                  className="bg-blue-600 cursor-pointer hover:opacity-90 text-white rounded-sm p-6 w-full"
                >
                  Comprar agora
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default page;
