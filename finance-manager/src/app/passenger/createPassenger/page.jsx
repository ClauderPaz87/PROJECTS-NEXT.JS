'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SelectClient from "@/components/Passenger/SelectClient"

const page = () => {

  return (
    <div className="flex justify-center items-center min-h-[80vh] md:pl-60">
        <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
            <CardHeader className="flex flex-row justify-between">
                <CardTitle className="text-3xl font-light ">Adicionar Passageiros</CardTitle>
            </CardHeader>
            <div className="border-b border-slate-700 mx-[21px]"></div>

            <CardContent>
              <SelectClient/>
            </CardContent>
        </Card>
  </div>
  )
}

export default page