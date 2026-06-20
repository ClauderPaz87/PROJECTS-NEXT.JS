'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useFlowTaskStore } from "@/store/FlowTaskStore"
import { Book, Calendar, CheckCircleIcon, MinusIcon, MoreHorizontal } from "lucide-react"

export default function page() {
  const { tasks } = useFlowTaskStore()

  let lastDate = null

  const taskCompleted = tasks.filter((task) => task.completed)
  const taskIgnore = tasks.filter((task) => task.ignore)
  const taskDay = tasks.filter((task) => task.date === new Date().toLocaleDateString("pt-BR"))
  console.log(taskDay)
  
  return (
    <div className="mt-5 flex flex-col h-lvh md:w-4xl mx-auto">

      <div className="flex items-center gap-4 mb-8 border-l-4 border-emerald-600 pl-6 py-2">
        <div>
          <h2 className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">Visão Geral</h2>
          <p className="text-xl font-bold text-white">
            Relatório de <span className="text-emerald-500">Atividades</span>
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto mt-6">

        <Card className="bg-zinc-950 border border-zinc-900 shadow-xl rounded-xl w-60 h-36 flex flex-col justify-between overflow-hidden transition-all hover:border-zinc-800">
          <CardHeader className="pt-4 px-4 pb-0">
            <CardTitle className="tracking-widest font-bold text-zinc-500 text-[10px] uppercase">
              Total de Tarefas
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-0">
            <h1 className="text-zinc-100 font-bold text-4xl tracking-tighter">{tasks.length}</h1>
          </CardContent>
          <CardFooter className="bg-zinc-900/40 px-4 py-2 border-t border-zinc-900 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
            <h1 className="text-zinc-500 font-medium text-[10px]">{new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</h1>
          </CardFooter>
        </Card>

        <Card className="bg-zinc-950 border border-zinc-900 shadow-xl rounded-xl w-60 h-36 flex flex-col justify-between overflow-hidden transition-all hover:border-emerald-500/20">
          <CardHeader className="pt-4 px-4 pb-0">
            <CardTitle className="tracking-widest font-bold text-zinc-500 text-[10px] uppercase">
              Completadas
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-0">
            <h1 className="text-emerald-500 font-bold text-4xl tracking-tighter">{taskCompleted.length}</h1>
          </CardContent>
          <CardFooter className="bg-emerald-500/5 px-4 py-2 border-t border-zinc-900 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <h1 className="text-emerald-700 font-medium text-[10px]">{new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</h1>
          </CardFooter>
        </Card>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto mt-6">
        <Card className="bg-zinc-950 border border-zinc-900 shadow-xl rounded-xl w-60 h-36 flex flex-col justify-between overflow-hidden transition-all hover:border-red-500/20">
          <CardHeader className="pt-4 px-4 pb-0">
            <CardTitle className="tracking-widest font-bold text-zinc-500 text-[10px] uppercase">
              Ignoradas
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-0">
            <h1 className="text-red-600 font-bold text-4xl tracking-tighter">{taskIgnore.length}</h1>
          </CardContent>
          <CardFooter className="bg-red-500/5 px-4 py-2 border-t border-zinc-900 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
            <h1 className="text-red-900 font-medium text-[10px]">{new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</h1>
          </CardFooter>
        </Card>

        <Card className="bg-zinc-950 border border-zinc-900 shadow-xl rounded-xl w-60 h-36 flex flex-col justify-between overflow-hidden transition-all hover:border-blue-500/20">
          <CardHeader className="pt-4 px-4 pb-0">
            <CardTitle className="tracking-widest font-bold text-zinc-500 text-[10px] uppercase">
              Hoje
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 py-0">
            <h1 className="text-blue-600 font-bold text-4xl tracking-tighter">{taskDay.length}</h1>
          </CardContent>
          <CardFooter className="bg-blue-500/5 px-4 py-2 border-t border-zinc-900 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <h1 className="text-blue-900 font-medium text-[10px]">{new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" })}</h1>
          </CardFooter>
        </Card>

      
      </div>

      {tasks.map((task) => {
        const dataAtual = task.date ? task.date : null;
        const currentDate = dataAtual !== lastDate
        lastDate = dataAtual

        return (
          <main key={task.id} className="mt-3 flex flex-col  ">

            {dataAtual && currentDate && (
              <div className="flex items-center gap-3 mt-8 mb-2">
                <p className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                  <Calendar className="size-4 text-zinc-500" /> {dataAtual}
                </p>
                <div className="h-[1px] flex-1 bg-zinc-800" />
              </div>
            )}

            {task.completed ?
              <p className="tracking-tighter mt-2.5 flex items-center text-sm border-b border-zinc-800 pb-2 
              hover:bg-zinc-900/50 rounded-lg transition-all duration-300 p-2 justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  Voce concluiu a tarefa
                  <span
                    className="p-1 bg-zinc-950/60 border border-zinc-800 text-sm rounded-sm inline-flex items-center ml-2 gap-1.5 line-through
                    text-emerald-500 hover:bg-zinc-900 transition-colors duration-300 opacity-80 ">
                    <CheckCircleIcon fill="green" className="size-4" />
                    {task.text}
                  </span>
                </div>
                <span className="text-xs text-zinc-700 tracking-widest">
                  {dataAtual} {task.hours}
                </span>
              </p>
              : task.ignore ?
                <p className=" tracking-tighter mt-2.5 flex items-center text-sm border-b border-zinc-800 pb-2 
              hover:bg-zinc-900/50 rounded-lg transition-all duration-300 p-2 justify-between ">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    Voce ignorou esta tarefa
                    <span
                      className="p-1 bg-zinc-950/60 border border-zinc-700 rounded-sm inline-flex items-center ml-2 gap-1.5 line-through
                      text-red-500 hover:bg-zinc-900">
                      <MinusIcon color="red" className="size-4" />
                      {task.text}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-700 tracking-widest">
                    {dataAtual} {task.hours}
                  </span>
                </p>
                :
                <p className=" tracking-tighter mt-2.5 flex items-center text-sm border-b border-zinc-800 pb-2 
              hover:bg-zinc-900/50 rounded-lg transition-all duration-300 p-2 justify-between ">
                  <div className="flex items-center gap-2 text-sm text-zinc-400">
                    Voce adicionou esta tarefa
                    <span
                      className="p-1 bg-zinc-950/60 border border-zinc-700 rounded-sm inline-flex items-center ml-2 gap-1.5
                      hover:bg-zinc-900">
                      <Book className="size-4" />
                      {task.text}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-700 tracking-widest">
                    {dataAtual} {task.hours}
                  </span>
                </p>}

          </main>

        )

      })}


    </div>
  )
}

// <p className="text-white font-semibold text-sm border-b border-zinc-800 flex gap-2">
// <Calendar className="size-4" /> {task.date && new Date(task.date).toLocaleDateString('pt-BR', { month: "short", day: "numeric" })}
// </p>