'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "../ui/button";
import { useDashStore } from "@/store/DashGoStore";

import DialogDriverEdit from "./DialogDriverEdit";

const TableDriver = () => {
  const { drivers , deleteDriver, searchDriver} = useDashStore()

  return (
    <Table className="mt-3">
      <TableHeader>
        <TableRow className="hover:bg-slate-900">
          <TableHead className="">Nome</TableHead>
          <TableHead className="text-center w-[80vw] " >Telefone</TableHead>
          <TableHead colSpan={2} className="text-right pr-16">Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {drivers
        .filter((driver)=> driver.name.includes(searchDriver) )
        .map((driver)=>(
            <TableRow key={driver.id} className="hover:bg-slate-700">
                <TableCell className="text-purple-500">{driver.name}</TableCell>
                <TableCell className="text-center" colSpan={2}>{driver.phone}</TableCell>
                <TableCell className="text-right">
                    <DialogDriverEdit driver={driver}/>
                    <Button onClick={()=>deleteDriver(driver.id)} 
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

export default TableDriver;
