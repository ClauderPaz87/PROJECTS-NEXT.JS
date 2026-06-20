'use client'
import { useParams } from "next/navigation"
import { useFlowTaskStore } from "@/store/FlowTaskStore"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useEffect, useRef } from "react"
import { orbitron } from "@/app/layout"
import { Checkbox } from "@/components/ui/checkbox"


export default function page() {
  const inputSub = useRef()
  const { tasks, addSubTask, toggleSubTask, deleteSubTask, updateSubTask, progressBar, countProgressBar } = useFlowTaskStore()
  const { id } = useParams()

  const task = tasks.find((task) => task.id === id)

  const addSub = (e) => {
    e.preventDefault()
    if (!inputSub.current.value) return
    addSubTask(id, inputSub.current.value)

  }


  useEffect(() => {
    if (!task || task.subTasks.length === 0) return
    const validation = task.subTasks.every((t) => t.checked)

    if (validation && !task.completed) {
      updateSubTask(id)
    }
    else if (!validation && task.completed) {
      updateSubTask(id)
    }


  }, [task.subTasks])

  useEffect(() => {
    countProgressBar(task)
  }, [task.subTasks, progressBar])


  return (
    <div className="w-full mx-auto px-7 ml-5">
      <div className="flex flex-col gap-2 mb-7 mt-6 ml-5">
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-8 bg-emerald-500/50"></span>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em]">
            Detalhes da Operação
          </span>
        </div>

        <h1 className={`${orbitron.className} text-3xl font-black text-white tracking-tighter flex flex-wrap items-baseline gap-3`}>
          <span className="text-zinc-600 opacity-50">Explodindo:</span>
          <span className={`text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] ${task.completed ? "line-through" : ""}`}>
            {task?.text || "Tarefa"}
          </span>
        </h1>

        <p className="text-zinc-500 text-sm max-w-md border-l border-zinc-800 pl-4 mt-1">
          Gerencie as etapas menores para concluir seu objetivo principal com precisão.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto px-7 mt-10">

        <Card className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden pt-0 flex flex-col">
          <CardHeader className="px-6 border-b border-zinc-800/50 bg-zinc-900/20 flex flex-row items-center gap-4 h-14">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <CardTitle className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                Checklist
              </CardTitle>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800"></div>
            <CardTitle className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em]">
              Subtarefas
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <form onSubmit={addSub} className="space-y-4">
              <input
                ref={inputSub}
                autoFocus
                placeholder="Qual a próxima etapa?"
                className="w-full bg-zinc-900/30 border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-600 text-zinc-300"
              />
              <Button
                type="submit"
                variant="ghost"
                className="w-full justify-center gap-2 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 border border-zinc-900 hover:border-emerald-500/20 transition-all duration-300 group h-10"
              >
                <Plus className="group-hover:rotate-90 transition-transform duration-300" size={16} />
                <span className="font-bold tracking-widest uppercase text-[10px]">Fixar Subtarefa</span>
              </Button>
            </form>

            <div className="mt-6 flex flex-col gap-1">
              {task.subTasks.map((t) => {

                return (
                  <div
                    key={t.id}
                    className="group flex items-center gap-3 p-3 rounded-lg border border-transparent hover:border-zinc-800/50 hover:bg-zinc-900/30 transition-all duration-300"
                  >
                    <div className="relative flex items-center justify-center">
                      <Checkbox
                        id={t.id}
                        checked={t.checked}
                        onCheckedChange={(value) => {
                          toggleSubTask(t.id, value);
                          console.log(t)
                        }}
                        className="size-5 border-zinc-700 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <label
                        htmlFor={t.id}
                        className={`text-sm font-medium leading-none cursor-pointer transition-all duration-300 ${t.checked
                          ? "text-zinc-600 line-through decoration-emerald-500/50"
                          : "text-zinc-300 group-hover:text-white"
                          }`}
                      >
                        {t.text}
                      </label>

                      <span className="text-[9px] text-zinc-600 uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Etapa identificada
                      </span>
                    </div>

                    <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 hover:text-red-500 text-zinc-600 rounded-md transition-all" onClick={() => deleteSubTask(t.id)}>
                      <Plus className="rotate-45 size-4" />
                    </button>

                  </div>

                )

              })}

              {task.subTasks.length === 0 && (
                <div className="py-10 flex flex-col items-center justify-center border-2 border-dashed border-zinc-900 rounded-xl">
                  <p className="text-zinc-600 text-xs font-medium uppercase tracking-[0.2em]">
                    Nenhuma subetapa definida
                  </p>
                </div>
              )}


              <div className="mt-8 pt-4 border-t border-zinc-900">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                      Status de Execução
                    </span>
                    {progressBar === 100 && (
                      <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20 animate-pulse">
                        Finalizado
                      </span>
                    )}
                  </div>
                  <span className={`${orbitron.className} text-[11px] font-bold ${progressBar === 100 ? 'text-emerald-500' : 'text-zinc-400'}`}>
                    {progressBar}%
                  </span>
                </div>

                <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden flex items-center p-[1px]">
                  <div
                    className={`h-full rounded-full transition-all duration-700  ${progressBar === 100
                        ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                        : "bg-gradient-to-r from-emerald-600 to-emerald-400"
                      }`}
                    style={{ width: `${progressBar}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>

        </Card>

        <Card className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden pt-0 flex flex-col">
          <CardHeader className="px-6 border-b border-zinc-800/50 bg-zinc-900/20 flex flex-row items-center gap-4 h-14">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <CardTitle className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                Briefing
              </CardTitle>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800"></div>
            <CardTitle className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em]">
              Notas de Campo
            </CardTitle>
          </CardHeader>

          <CardContent className="p-6">
            <div className="relative group">
              <textarea
                placeholder="Observações, links ou insights sobre essa tarefa..."
                className="w-full bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 text-zinc-300 min-h-[150px] resize-none leading-relaxed"
              />

              <div className="absolute bottom-3 right-3 opacity-0 group-focus-within:opacity-100 transition-opacity">
                <span className="text-[9px] text-blue-500/50 font-mono tracking-tighter italic">
                  autosave active...
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">
              <span>Markdown Suportado</span>
              <div className="flex gap-2">
                <span className="hover:text-blue-400 cursor-help transition-colors">B</span>
                <span className="hover:text-blue-400 cursor-help transition-colors">I</span>
                <span className="hover:text-blue-400 cursor-help transition-colors">Link</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}
