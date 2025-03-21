'use client'
import { useEffect } from "react";
import { Card, CardDescription } from "../ui/card";
import { useControlStore } from "@/store/ControlStore";

const ValueTotal = () => {
  const { total, productsAll, calcTotal } = useControlStore()

  useEffect(() => {
    const tot = productsAll.reduce((acu,product)=>{
      if(product.type === "entries"){
        return Number(acu) + Number(product.value)
      }
      else{
        return Number(acu) - Number(product.value)
      }

      
    },[0])
    calcTotal(tot)

  }, [productsAll,calcTotal])
  
  
  return (
    <Card className="w-96 rounded-sm p-2 h-20">
      <div className="flex flex-col">
          <div className="flex justify-between">
                <div>
                    <p className="font-bold text-2xl">Valor Total:</p>
                </div>
                <div className="pt-1.5">
                    <p className="text-pink-500 font-semibold">R$ {total}</p>
                </div>
          </div>
          <div>
              <CardDescription>O valor se refere ao saldo</CardDescription>
          </div>
      </div>
    </Card>
  );
};

export default ValueTotal;
