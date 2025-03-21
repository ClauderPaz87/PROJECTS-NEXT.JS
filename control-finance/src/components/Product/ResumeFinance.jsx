'use client'
import { useState } from "react"
import { Button } from "../ui/button"
import DivAll from "./DivAll"
import DivEntries from "./DivEntries"
import DivExits from "./DivExits"

const ResumeFinance = () => {
  const [divActive, setDivActive] = useState(null)

  return (
    <div className="mt-8 w-2xl">
        <div className="flex justify-between w-xl">
            <div>
                <h1 className="text-2xl font-semibold">Resumo financeiro</h1>
            </div>
            <div className="flex gap-3">
                <Button 
                onClick={()=> setDivActive("all")} 
                className="p-5 bg-zinc-400 hover:bg-pink-600 cursor-pointer">Todos</Button>
                <Button 
                onClick={()=> setDivActive("entries")}
                className="p-5 bg-zinc-400 hover:bg-pink-600 cursor-pointer">Entradas</Button>
                <Button
                onClick={()=> setDivActive("exits")} 
                className="p-5 bg-zinc-400 hover:bg-pink-600 cursor-pointer">Saídas</Button>
            </div>
        </div>

        <div>
          {divActive === "all" && <div><DivAll/></div> }
          {divActive === "entries" && <div><DivEntries/></div> }
          {divActive === "exits" && <div><DivExits/></div> }
        </div>

    </div>
  )
}

export default ResumeFinance