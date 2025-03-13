'use client'
import DialogDriver from "@/components/Driver/DialogDriver"
import TableDriver from "@/components/Driver/TableDriver"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useDashStore } from "@/store/DashGoStore"

const page = () => {
  const { searchUserDriver } = useDashStore()

  const inputSearch = (e)=>{
    searchUserDriver(e.toLowerCase())
  }

  return (
    <div className="flex justify-center w-[95vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh] ">
        <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle className="text-3xl ">Motoristas</CardTitle>
                <DialogDriver/>
            </CardHeader>
            <div className="border-b border-slate-700 mx-[21px]"></div>

            <CardContent>
                <Input 
                onChange={(e)=>inputSearch(e.target.value)}
                type="search" 
                placeholder="Buscar pelo nome..." 
                className="w-96"/>
                <TableDriver/>
            </CardContent>
        </Card>
    </div>
  )
}

export default page