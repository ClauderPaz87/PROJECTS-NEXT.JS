import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { useControlStore } from "@/store/ControlStore";

const DivExits = () => {
  const { productsExits, deleteProduct } = useControlStore()
   
  return (
    <div className="mt-4">
      {productsExits.map((product)=>(
          <Card key={product.id} className="rounded-sm w-xl p-0 h-24 flex flex-row border-l-4 mb-4 border-l-red-600 shadow-md">
            <div className="flex flex-col p-4">
              <CardHeader className="p-0">
                <CardTitle>{product.description}</CardTitle>
              </CardHeader>
              <p className="mt-5 text-red-600">{product.type === "exits" ? "Saídas" : ""}</p>
            </div>
            <div className="w-full">
              <div className="flex w-full items-center gap-2 justify-end pr-10 mt-4">
                <p>R$ {product.value}</p>
                <Button onClick={()=>deleteProduct(product.id,product.type)}>X</Button>
              </div>
            </div>
        </Card>
      ))}
      
    </div>
  );
};

export default DivExits;
