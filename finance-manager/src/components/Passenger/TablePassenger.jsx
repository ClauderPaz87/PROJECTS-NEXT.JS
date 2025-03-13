import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { Button } from "../ui/button"
import { DeleteIcon} from "lucide-react"
import { useDashStore } from "@/store/DashGoStore"

const TablePassenger = () => {
  const { passenger,deletePassenger } = useDashStore()

  return (
    <div>
        <ScrollArea>
            <Table className="w-[30vw] md:w-[90vw] ">
                <TableHeader>
                    <TableRow className="hover:bg-slate-900">
                        <TableHead className="w-[12vw]">Cliente</TableHead>
                        <TableHead className="w-[15vw] text-center">Rg</TableHead>
                        <TableHead className="w-[15vw] text-center">Telefone</TableHead>
                        <TableHead className="w-[15vw] text-center">Endereço</TableHead>
                        <TableHead className="w-[15vw] text-center">Cidade/Estado</TableHead>
                        <TableHead className="w-[30vw] text-center">Taxi</TableHead>
                        <TableHead className="w-[15vw] text-left">Valor Total</TableHead>
                        <TableHead colSpan={2}>Status/Modo</TableHead>
                        <TableHead className="w-[25vw] text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {passenger.map((pass)=>(
                        <TableRow key={pass.id} className="hover:bg-slate-900">
                            <TableCell>{pass.client}</TableCell>
                            <TableCell className="text-center">{pass.rg}</TableCell>
                            <TableCell className="text-center">{pass.phone}</TableCell>
                            <TableCell className="text-center">{pass.address}</TableCell>
                            <TableCell className="text-center">{pass.city}/{pass.stateDistrict}</TableCell>
                            <TableCell className="text-center">{pass.taxi}</TableCell>
                            <TableCell className="text-center">{pass.value}</TableCell>
                            <TableCell colSpan={2} className="text-center">{pass.status}/{pass.method}</TableCell>
                            <TableCell className="text-right">
                                <Button 
                                onClick={()=>deletePassenger(pass.id)}
                                className="bg-slate-900 text-red-700 border border-red-700
                                cursor-pointer hover:bg-zinc-700 w-20">
                                    <span><DeleteIcon/></span>
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
  )
}

export default TablePassenger