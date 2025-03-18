'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DeleteIcon, PencilIcon, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useDashStore } from "@/store/DashGoStore"
import Link from "next/link"
import { format } from "date-fns"

const page = () => {
  const { trips, deleteTrip, editUserTrip } = useDashStore()
  const router = useRouter()

  const editTripId = (id)=>{
    editUserTrip(id)
    router.push(`/editTrip/${id}`)
  }

  return (
    <div className="flex justify-center w-[95vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh]
">
        <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle className="text-3xl ">Viagens</CardTitle>
                <Link href="/Trips/createTrips">
                    <Button className="bg-pink-500 hover:bg-pink-400 w-24 cursor-pointer">Novo +</Button>
                </Link>
            </CardHeader>
            <div className="border-b border-slate-700 mx-[21px]"></div>
            <Table className="flex sm:flex-col">
                <TableHeader>
                    <TableRow className="hover:bg-slate-900 flex flex-col sm:flex-row w-full">
                        <TableHead className="w-[10vw]">Data de partida</TableHead>
                        <TableHead>Data de retorno</TableHead>
                        <TableHead className="w-[10vw] text-right">Origem</TableHead>
                        <TableHead className="text-right w-[10vw]">Retorno</TableHead>
                        <TableHead className="w-[18vw] text-center">Placa</TableHead>
                        <TableHead className="w-[10vw] text-center">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trips.map((trip)=>(
                        <TableRow key={trip.id} className="hover:bg-slate-900 flex flex-col sm:flex-row w-full">
                            <TableCell>{format(new Date(trip.match), "PPP")}</TableCell>
                            <TableCell>{format(new Date(trip.retorno), "PPP")}</TableCell>
                            <TableCell className="w-[12vw] ml-6 text-center">{trip.origin}</TableCell>
                            <TableCell className="w-[8vw] text-center ">{trip.destiny}</TableCell>
                            <TableCell className="w-[10vw] text-right">{trip.place}</TableCell>
                            <TableCell className="pl-10 text-right">
                                <Button 
                                onClick={()=>{router.push(`/passenger`)}}
                                className="bg-slate-900 text-blue-700 border border-blue-800 
                                mr-2 cursor-pointer hover:bg-zinc-700 w-28">
                                    <span><Users/></span>
                                    Passageiros 
                                </Button>
                                <Button 
                                onClick={()=>deleteTrip(trip.id)}
                                className="bg-slate-900 text-red-700 border border-red-700
                                cursor-pointer hover:bg-zinc-700 w-20">
                                    <span><DeleteIcon/></span>
                                    Excluir 
                                </Button>
                                <Button 
                                onClick={()=>editTripId(trip.id)} 
                                className="bg-slate-900 text-green-700 border border-green-800
                                cursor-pointer hover:bg-zinc-700 w-20 ml-1">
                                    <span><PencilIcon/></span>
                                    Editar 
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))} 
                </TableBody>
            </Table>
        </Card>
  </div>
  )
}

export default page