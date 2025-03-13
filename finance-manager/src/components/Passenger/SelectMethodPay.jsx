'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Button } from "../ui/button";

const SelectMethodPay = ({field}) => {

  return (
    <div>

      <div>
        <Select onValueChange={field.onChange}>
            <SelectTrigger className="w-72">
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

      <div>
        <Link href={`/passenger/createPassenger/payClient`}>
          <Button
            type="button"
            className="bg-pink-500 hover:bg-pink-400 absolute top-9/12 left-[89vw] cursor-pointer">
            Avançar
          </Button>
        </Link>
        <Link href={`/passenger/createPassenger/payClient/`}>
          <Button
            variant={"secondary"}
            type="button"
            className="absolute top-9/12 left-[83vw] cursor-pointer">
            Voltar
          </Button>
        </Link>
      </div>

    </div>
  )
}


export default SelectMethodPay