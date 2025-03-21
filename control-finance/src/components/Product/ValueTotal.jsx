import { Card, CardDescription, CardHeader } from "../ui/card";

const ValueTotal = () => {
  return (
    <Card className="w-96 rounded-sm p-2 h-20">
      <div className="flex flex-col">
          <div className="flex justify-between">
                <div>
                    <p className="font-bold text-2xl">Valor Total:</p>
                </div>
                <div className="pt-1.5">
                    <p className="text-pink-500 font-semibold">R$ 500.00</p>
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
