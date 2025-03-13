'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SelectStatus = ({field}) => {

  return (
    <div>

      <div>
        <Select onValueChange={field.onChange}>
            <SelectTrigger className="w-72">
              <SelectValue placeholder="Selecione"/>
            </SelectTrigger>
            <SelectContent  className="bg-slate-950 text-white" >
                <SelectItem selected="selecione">Selecione...</SelectItem>
                <SelectItem value="pay">Pago</SelectItem> 
                <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
      </div>

    </div>
  )
}


export default SelectStatus