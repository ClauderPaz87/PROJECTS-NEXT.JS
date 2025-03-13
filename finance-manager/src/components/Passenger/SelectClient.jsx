'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDashStore } from "@/store/DashGoStore";
import { Users } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const SelectClient = () => {
  const { clients, select,selectClient } = useDashStore()
  const router = useRouter()

  const selected = (value)=>{
    select(value)
  }

  const advanced = ()=>{
    if(!selectClient){
      return toast.error("Selecione um cliente", {
        position: "top-center",
        autoClose: 1000,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }
    router.push(`/passenger/createPassenger/payClient`)
  }

  return (
    <div className="flex flex-row gap-10">

      <div>
        <label htmlFor="clientes">Clientes</label>
        <Select onValueChange={selected}>
            <SelectTrigger className="w-72 mt-2">
              <SelectValue placeholder="Clientes"/>
            </SelectTrigger>
            <SelectContent  className="bg-slate-950 text-white" >
              {clients.map((client)=>(
                  <SelectItem key={client.id}
                  value={client.id}>
                  {client.name} / {client.phone}
                  <span className="flex justify-end w-40"><Users/></span>
                  </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>

      <div>
        <label htmlFor="resultado">Resultado da busca</label>
        <div className="mt-3 text-purple-700">{selectClient}</div>
      </div>

      <div>
        <Button
          onClick={advanced}
          type="button"
          className="bg-pink-500 hover:bg-pink-400 absolute top-9/12 left-[88vw] cursor-pointer">
          Avançar
        </Button>
        <Link href={`/passenger`}>
          <Button
            variant={"secondary"}
            type="button"
            className="absolute top-9/12 left-[82vw] cursor-pointer">
            Voltar
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default SelectClient