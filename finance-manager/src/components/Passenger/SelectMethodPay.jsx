'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Button } from "../ui/button";

const SelectMethodPay = ({field}) => {

  return (
    <div>

      <div>
        <Select onValueChange={field.onChange}>
            <SelectTrigger className="w-44 md:w-72">
              <SelectValue placeholder="Selecione"/>
            </SelectTrigger>
            <SelectContent  className="bg-slate-950 text-white" >
                <SelectItem selected="selecione">Selecione...</SelectItem>
                <SelectItem value="pix">Pix</SelectItem> 
                <SelectItem value="money">Dinheiro</SelectItem>
                <SelectItem value="credit">Crédito</SelectItem>
                <SelectItem value="debit">Débito</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
            </SelectContent>
          </Select>
      </div>

    </div>
  )
}


export default SelectMethodPay