import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDashStore } from "@/store/DashGoStore";
import { CarTaxiFront } from "lucide-react";

const SelectDriver = ({field}) => {
  const {drivers} = useDashStore()

  return (
    <Select onValueChange={field.onChange}  >
          <SelectTrigger className="w-44 sm:w-72">
            <SelectValue placeholder="Motoristas"/>
          </SelectTrigger>
          <SelectContent className="bg-slate-950 text-white" >
            {drivers.map((driver)=>(
                <SelectItem key={driver.id}
                value={driver.id}>
                {driver.name} / {driver.phone} 
                <span className="flex justify-end w-40"><CarTaxiFront/></span>
                </SelectItem>
            ))}
          </SelectContent>
        </Select>
  )
}

export default SelectDriver