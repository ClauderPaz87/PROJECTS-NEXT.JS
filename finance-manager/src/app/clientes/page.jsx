'use client'
import DialogClient from "@/components/clientes/DialogClient"
import TableClient from "@/components/clientes/TableClient"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useDashStore } from "@/store/DashGoStore"

const page = () => {
  const { searchUserClient } = useDashStore()

  const inputSearch = (e)=>{
    searchUserClient(e.toLowerCase())
  }

  return (
    <div className="flex justify-center w-full items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh] ">
        <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle className="text-3xl ">Clientes</CardTitle>
                <DialogClient/>
            </CardHeader>
            <div className="border-b border-slate-700 mx-[21px]"></div>

            <CardContent>
                <Input 
                onChange={(e)=>inputSearch(e.target.value)}
                type="search" 
                placeholder="Buscar pelo nome..." 
                className="w-96"/>
                <TableClient/>
            </CardContent>
        </Card>
    </div>
  )
}

export default page