'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "../ui/button";
import { useDashStore } from "@/store/DashGoStore";
import DialogEditClient from "./DialogEditClient";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const TableClient = () => {
  const { clients , deleteClient, searchClient} = useDashStore()

  return (
  <div className="">
    <ScrollArea>
      <Table className="mt-3">
        <TableHeader>
          <TableRow className="hover:bg-slate-900">
            <TableHead className="w-[20vw]">Nome</TableHead>
            <TableHead className="text-center w-[20vw] ">Telefone</TableHead>
            <TableHead className="text-center w-[10vw] ">Rg</TableHead>
            <TableHead colSpan={2} className="text-right pr-16">Ssn</TableHead>
            <TableHead colSpan={2} className="text-right pr-16">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients
          .filter((client)=> client.name.includes(searchClient) )
          .map((client)=>(
              <TableRow key={client.id} className="hover:bg-slate-700">
                  <TableCell className="text-purple-500">{client.name}</TableCell>
                  <TableCell className="text-center">{client.phone}</TableCell>
                  <TableCell className="text-purple-500 text-center" colSpan={2}>{client.rg}</TableCell>
                  <TableCell className="text-center" >{client.ssn}</TableCell>
                  <TableCell className="text-right flex flex-col justify-end gap-2 md:flex-row md:gap-0">
                      <DialogEditClient client={client}/>
                      <Button onClick={()=>deleteClient(client.id)}
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
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
      
  </div>
  );
};

export default TableClient;
