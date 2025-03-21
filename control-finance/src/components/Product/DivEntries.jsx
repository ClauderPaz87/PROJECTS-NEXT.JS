import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";

const DivEntries = () => {
  return (
    <div className="mt-4">
      <Card className="rounded-sm w-xl p-0 h-24 flex flex-row shadow-md border-l-4 border-l-green-600">
        <div className="flex flex-col p-4">
          <CardHeader className="p-0">
            <CardTitle>Compra</CardTitle>
          </CardHeader>
          <p className="mt-5">Saída</p>
        </div>
        <div className="w-full">
          <div className="flex w-full items-center gap-2 justify-end pr-10 mt-4">
            <p>R$ 250.00</p>
            <Button>X</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DivEntries;
