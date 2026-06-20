"use client";
import { Card, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { BicepsFlexed, BookAIcon, Briefcase, Calendar1, ChartBar, Flag, HeartIcon, PiggyBank, RefreshCw, Repeat } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useFlowTaskStore } from "@/store/FlowTaskStore";

export const DialogEditTask = ({ task }) => {
	const [dateHabit, setDateHabit] = useState();
	const inputTask = useRef();
	const { editTask, editingTask } = useFlowTaskStore();
	const [day,addDay] = useState('')
	const [priority,addPriority] = useState('')
	const [category,addCategory] = useState('')

	useEffect(() => {
		if (task) {
			setTimeout(() => {
				if (inputTask.current) {
					inputTask.current.value = task.text;
				}
			}, 0);

			addDay(task.day);
			addPriority(task.priority)
			setDateHabit(new Date(task.date));
			addCategory(task.category)
		}
	}, [task, addDay, addPriority]);

	const taskEdit = (e) => {
		e.preventDefault();
		const date = dateHabit || null;
		if (!inputTask.current.value) return;
		editingTask(inputTask.current.value, day, priority, category, date);
	};

	return (
		<Dialog open={task.dialogTask} onOpenChange={() => editTask(task.id)}>
			<DialogContent className="bg-zinc-950 text-zinc-200 border-zinc-800 rounded-xl p-0 sm:max-w-xl overflow-hidden shadow-2xl">
				<form onSubmit={taskEdit} className="flex flex-col h-full">
					<div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
						<h1 className="text-lg font-semibold text-white">Editar Hábito</h1>
						<p className="text-xs text-zinc-500">Ajuste os detalhes da sua tarefa abaixo.</p>
					</div>

					<div className="p-6 space-y-4">
						<div
							className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 focus-within:border-zinc-600 transition-colors cursor-text"
							onClick={() => document.getElementById("input-habit").focus()}
						>
							<label className="block text-[10px] font-bold text-zinc-500 uppercase mb-1">Nome do Hábito</label>
							<input
								id="input-habit"
								type="text"
								ref={inputTask}
								placeholder="Ex: Estudar Programação..."
								className="w-full bg-transparent outline-none text-white placeholder-zinc-600 text-sm"
							/>
						</div>

						<div className="grid grid-cols-1 gap-2">
							<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
								<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
									<Repeat size={18} />
									<span className="text-sm font-medium">Repetir</span>
								</div>
								<Select value={day} onValueChange={addDay}>
									<SelectTrigger className="w-40 bg-zinc-950 border-zinc-800 text-xs h-9">
										<SelectValue placeholder="Selecione..." />
									</SelectTrigger>
									<SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
										<SelectGroup>
											<SelectItem value="Todos os dias">Todos os dias</SelectItem>
											<SelectItem value="Todo mês">Todo mês</SelectItem>
											<SelectItem value="Todo ano">Todo ano</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
								<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
									<Flag size={18} />
									<span className="text-sm font-medium">Prioridade</span>
								</div>
								<Select value={priority} onValueChange={addPriority}>
									<SelectTrigger className="w-40 bg-zinc-950 border-zinc-800 text-xs h-9">
										<SelectValue placeholder="Selecione..." />
									</SelectTrigger>
									<SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
										<SelectGroup>
											<SelectItem value="Prioridade 1">
												<div className="flex items-center gap-2"><Flag size={12} className="text-red-500 fill-red-500" /> Alta</div>
											</SelectItem>
											<SelectItem value="Prioridade 2">
												<div className="flex items-center gap-2"><Flag size={12} className="text-yellow-500 fill-yellow-500" /> Média</div>
											</SelectItem>
											<SelectItem value="Prioridade 3">
												<div className="flex items-center gap-2"><Flag size={12} className="text-emerald-500 fill-emerald-500" /> Baixa</div>
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>


							<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
								<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
									<ChartBar size={18} />
									<span className="text-sm font-medium">Categoria</span>
								</div>
								<Select value={category} onValueChange={addCategory}>
									<SelectTrigger className="w-40 bg-zinc-950 border-zinc-800 text-xs h-9">
										<SelectValue placeholder="Nenhuma" />
									</SelectTrigger>
									<SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
										<SelectItem value="Treino">
											<span className="flex items-center gap-2">
												<BicepsFlexed className="text-green-700" /> Treino
											</span>
										</SelectItem>
										<SelectItem value="Estudo">
											<span className="flex items-center gap-2">
												<BookAIcon className="text-blue-900" /> Estudo
											</span>
										</SelectItem>
										<SelectItem value="Finanças">
											<span className="flex items-center gap-2">
												<PiggyBank className="text-amber-950" /> Finanças
											</span>
										</SelectItem>
										<SelectItem value="Saúde">
											<span className="flex items-center gap-2">
												<HeartIcon className="text-red-700" /> Saúde</span>
										</SelectItem>
										<SelectItem value="Trabalho">
											<span className="flex items-center gap-2">
												<Briefcase className="text-violet-950" /> Trabalho</span>
										</SelectItem>
										<SelectItem value="Outro">
											<span className="flex items-center gap-2">
												<RefreshCw /> Outro</span>
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
								<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
									<Calendar1 size={18} />
									<span className="text-sm font-medium">Data</span>
								</div>
								<Popover>
									<PopoverTrigger asChild>
										<button
											type="button"
											className={`w-40 bg-zinc-950 border border-zinc-800 rounded-md h-9 text-xs px-3 text-left flex items-center justify-between transition-colors hover:border-zinc-700 ${dateHabit ? "text-white" : "text-zinc-500"}`}
										>
											{dateHabit ? dateHabit.toLocaleDateString("pt-BR") : "Selecione..."}
										</button>
									</PopoverTrigger>
									<PopoverContent className=" bg-zinc-950 border-zinc-800 p-0 rounded-lg shadow-2xl" align="end">
										<Calendar
											mode="single"
											selected={dateHabit}
											onSelect={setDateHabit}
											disabled={(dateHabit) => dateHabit > new Date()}
											className="rounded-lg border-none text-white"
											classNames={{
												months: "flex flex-col gap-4",
												month: "space-y-4",
												caption: "flex justify-between items-center text-white",
												caption_label: "text-sm font-medium",
												nav: "flex items-center gap-1",
												nav_button:
													"h-7 w-7 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md",
												table: "w-full border-collapse",
												head_row: "flex",
												head_cell:
													"text-zinc-400 w-9 text-[0.7rem] font-normal",
												row: "flex w-full mt-2",
												cell:
													"w-9 h-9 text-center text-sm p-0 relative",
												day: "w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-800 transition",
												day_selected:
													"bg-blue-600 text-white hover:bg-blue-500",
												day_today: "border border-blue-500",
												day_outside: "text-zinc-600",
												day_disabled: "text-zinc-700",
											}}

										/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
					</div>

					<div className="px-6 py-4 bg-zinc-900/30 border-t border-zinc-800 flex justify-end gap-3 mt-auto">
						<DialogClose asChild>
							<Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs h-9 px-4">
								Cancelar
							</Button>
						</DialogClose>
						<Button
							type="submit"
							disabled={!dateHabit || !day || !priority}
							className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs h-9 px-6 font-bold shadow-lg shadow-emerald-900/20 disabled:opacity-50 disabled:bg-zinc-800 transition-all"
						>
							Salvar Alterações
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};