'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useDashStore } from "@/store/DashGoStore"
import TablePassenger from "@/components/Passenger/TablePassenger"
import { Briefcase, CarTaxiFront, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const page = () => {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center min-h-[80vh] pl-60">
        <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
             <div className="grid grid-cols-3 gap-3 ">
              <Card className="bg-slate-600 border-0 shadow-md text-gray-200 rounded-sm h-16 p-2 ml-3">
                <CardHeader>
                    <CardTitle className="text-xl ml-12">Viagem</CardTitle>
                    <span className="p-3.5 fixed left-80 top-44 bg-slate-800 rounded-full"><Briefcase size="25"/></span>
                </CardHeader>
              </Card>

              <Card className="bg-slate-600 border-0 shadow-md text-gray-200 rounded-sm h-16 p-2">
                <CardHeader>
                    <CardTitle className="text-xl ml-12">Passageiros</CardTitle>
                    <span className="p-3.5 fixed left-[48vw] top-44 bg-slate-800 rounded-full"><Users size="25"/></span>
                </CardHeader>
              </Card>

              <Card className="bg-slate-600 border-0 shadow-md text-gray-200 rounded-sm h-16 p-2 mr-4">
                <CardHeader>
                    <CardTitle className="text-xl ml-12">Origem</CardTitle>
                    <span className="p-3.5 fixed right-[312px] top-44 bg-slate-800 rounded-full"><CarTaxiFront size="25"/></span>
                </CardHeader>
              </Card>
            </div>
           
            <div>
              <div className="flex justify-end mr-5 mt-1">
                <Button
                onClick={()=> {router.push(`/passenger/createPassenger`)}}
                className="bg-green-600 hover:bg-green-700 cursor-pointer">
                  <span className="text-2xl">+</span>
                  Passageiros
                </Button>
              </div>
              <div className="flex justify-end mr-5 mt-2">
                <CardDescription>Depois de adicionar não poderá editar</CardDescription>
              </div>
            </div>

            <div className="border-b border-slate-700 mx-[21px]"></div>
            
            <CardContent>
              <TablePassenger/>
            </CardContent>
        </Card>
  </div>
  )
}

export default page