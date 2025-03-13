'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "../ui/button";
import { useDashStore } from "@/store/DashGoStore";
import DialogEditTaxi from "./DialogEditTaxi";

const TableTaxi = () => {
  const { taxis , deleteTaxi, searchTaxi} = useDashStore()

  return (
    <Table className="mt-3">
      <TableHeader>
        <TableRow className="hover:bg-slate-900">
          <TableHead className="">Nome</TableHead>
          <TableHead colSpan={2} className="text-center w-[20vw] ">Telefone</TableHead>
          <TableHead className="text-right pr-16">Cidade</TableHead> 
          <TableHead colSpan={2} className="text-right pr-16">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {taxis
        .filter((taxi)=> taxi.name.includes(searchTaxi) )
        .map((taxi)=>(
            <TableRow key={taxi.id} className="hover:bg-slate-700">
                <TableCell className="text-purple-500">{taxi.name}</TableCell>
                <TableCell className="text-center">{taxi.phone}</TableCell>
                <TableCell className="text-center" colSpan={2}>{taxi.city}</TableCell>
                <TableCell className="text-right flex flex-col justify-end gap-2 md:flex-row md:gap-0">
                    <DialogEditTaxi taxi={taxi}/>
                    <Button onClick={()=>deleteTaxi(taxi.id)} 
                    type="button" 
                    className="cursor-pointer" 
                    variant={"destructive"}>
                        Excluir
                    </Button>
                </TableCell>
            </TableRow>
        ))}
        
      </TableBody>
    </Table>
  );
};

export default TableTaxi;
