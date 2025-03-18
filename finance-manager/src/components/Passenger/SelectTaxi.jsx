'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDashStore } from "@/store/DashGoStore";
import { CarTaxiFront } from "lucide-react";

const SelectTaxi = ({field,form}) => {
  const { taxis } = useDashStore()

  return (
    <div className="flex flex-row gap-10">

      <div >
        <Select onValueChange={field.onChange}>
            <SelectTrigger className="w-44 lg:w-72">
              <SelectValue placeholder="Taxi"/>
            </SelectTrigger>
            <SelectContent  className="bg-slate-950 text-white" >
              {taxis.map((taxi)=>(
                  <SelectItem key={taxi.id}
                  name={taxi.id}
                  value={taxi.name}>
                  {taxi.name} / {taxi.phone}
                  <span className="flex justify-end w-40"><CarTaxiFront/></span>
                  </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>

    </div>
  )
}

export default SelectTaxi