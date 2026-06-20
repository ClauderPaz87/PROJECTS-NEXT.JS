"use client";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
	Calendar1,
	Flag,
	Repeat,
	Plus,
	ChartBar,
	BicepsFlexed,
	BookAIcon,
	PiggyBank,
	HeartIcon,
	Briefcase,
	RefreshCw,
} from "lucide-react";
import { useRef, useState } from "react";
import { useFlowTaskStore } from "@/store/FlowTaskStore";

export const DialogTask = () => {
	const [dateHabit, setDateHabit] = useState();
	const inputTask = useRef();
	const [open, setOpen] = useState(false);
	const { addTask, day, addDay, priority, addPriority, category, addCategory, tasks } =
		useFlowTaskStore();

	const addTasks = (e) => {
		e.preventDefault();
		if (!inputTask.current?.value) return;

		addTask(inputTask.current.value, day, priority, category, dateHabit.toLocaleDateString("pt-BR") || null, tasks);

		inputTask.current.value = "";
		addDay("");
		addPriority("")
		addCategory("");
		setDateHabit(null);
		setOpen(false);

		

	};

	return (
		<CardFooter className="p-3 bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-900 mt-auto">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						className="w-full justify-start gap-3 h-11 px-4 
                   text-zinc-500 hover:text-zinc-100
                   bg-zinc-900/20 hover:bg-zinc-900/80
                   border border-transparent hover:border-zinc-800
                   rounded-xl transition-all duration-500 
                   group overflow-hidden relative"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

						<div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-zinc-900 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors duration-300">
							<Plus
								className="group-hover:rotate-180 transition-transform duration-500 ease-in-out"
								size={16}
							/>
						</div>

						<span className="relative font-semibold text-xs uppercase tracking-widest">
							Criar novo hábito
						</span>

						<span className="ml-auto text-[10px] bg-zinc-950 text-zinc-600 px-1.5 py-0.5 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">
							N
						</span>
					</Button>
				</DialogTrigger>


				<DialogContent className="bg-zinc-950 text-zinc-200 border-zinc-800 rounded-xl p-0 sm:max-w-xl overflow-hidden shadow-2xl">
					<form onSubmit={addTasks}>
						<DialogHeader className="px-6 py-4 border-b border-zinc-800 bg-zinc-900/50 gap-1">
							<DialogTitle className="text-lg font-semibold text-white">
								Novo Hábito
							</DialogTitle>
							<p className="text-xs text-zinc-500">Adicione a sua tarefa abaixo.</p>
						</DialogHeader>

						<div className="px-6 space-y-4 mt-4">
							<div className="relative group">
								<input
									id="input-habit"
									ref={inputTask}
									autoFocus
									placeholder="O que você vai praticar hoje?"
									className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl p-4 text-base outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600"
								/>
							</div>

							<div className="grid grid-cols-1 gap-2">
								<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
									<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
										<Repeat size={18} className="text-blue-500" />
										<span className="text-sm font-medium">Frequência</span>
									</div>
									<Select value={day} onValueChange={addDay}>
										<SelectTrigger className="w-40 bg-zinc-950 border-zinc-800 text-xs h-9">
											<SelectValue placeholder="Selecione..." />
										</SelectTrigger>
										<SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
											<SelectItem value="Todos os dias">Diariamente</SelectItem>
											<SelectItem value="Todo mês">Mensalmente</SelectItem>
											<SelectItem value="Todo ano">Anualmente</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
									<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
										<Flag size={18} className="text-orange-500" />
										<span className="text-sm font-medium">Prioridade</span>
									</div>
									<Select value={priority} onValueChange={addPriority}>
										<SelectTrigger className="w-40 bg-zinc-950 border-zinc-800 text-xs h-9">
											<SelectValue placeholder="Selecione..." />
										</SelectTrigger>
										<SelectContent className="bg-zinc-950 border-zinc-800 text-zinc-200">
											<SelectGroup>
												<SelectItem value="Prioridade 1">
													<div className="flex items-center gap-2">
														<Flag size={12} className="text-red-500 fill-red-500" />{" "}
														Alta
													</div>
												</SelectItem>
												<SelectItem value="Prioridade 2">
													<div className="flex items-center gap-2">
														<Flag
															size={12}
															className="text-yellow-500 fill-yellow-500"
														/>{" "}
														Média
													</div>
												</SelectItem>
												<SelectItem value="Prioridade 3">
													<div className="flex items-center gap-2">
														<Flag
															size={12}
															className="text-emerald-500 fill-emerald-500"
														/>{" "}
														Baixa
													</div>
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>

								<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
									<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
										<ChartBar size={18} className="text-blue-900" />
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
													<HeartIcon className="text-red-700" /> Saúde
												</span>
											</SelectItem>
											<SelectItem value="Trabalho">
												<span className="flex items-center gap-2">
													<Briefcase className="text-violet-950" /> Trabalho
												</span>
											</SelectItem>
											<SelectItem value="Outro">
												<span className="flex items-center gap-2">
													<RefreshCw /> Outro
												</span>
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-3 flex justify-between items-center group">
									<div className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors">
										<Calendar1 size={18} className="text-violet-900" />
										<span className="text-sm font-medium">Data</span>
									</div>
									<Popover>
										<PopoverTrigger asChild>
											<button
												type="button"
												className={`w-40 bg-zinc-950 border border-zinc-800 rounded-md h-9 text-xs px-3 text-left flex items-center justify-between transition-colors hover:border-zinc-700 ${dateHabit ? "text-white" : "text-zinc-500"}`}
											>
												{dateHabit
													? dateHabit.toLocaleDateString("pt-BR")
													: "Selecione..."}
											</button>
										</PopoverTrigger>
										<PopoverContent
											className=" bg-zinc-950 border-zinc-800 p-0 rounded-lg shadow-2xl"
											align="end"
										>
											<Calendar
												mode="single"
												selected={dateHabit}
												onSelect={setDateHabit}
												disabled={(dateHabit) => dateHabit > new Date()}
												className="rounded-lg border-none text-white "
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
													head_cell: "text-zinc-400 w-9 text-[0.7rem] font-normal",
													row: "flex w-full mt-2",
													cell: "w-9 h-9 text-center text-sm p-0 relative",
													day: "w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-800 transition",
													day_selected: "bg-blue-600 text-white hover:bg-blue-500",
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

						<div className="p-6 mt-4 flex justify-end gap-3 bg-zinc-800/20">
							<DialogClose asChild>
								<Button
									variant="destructive"
									className="text-zinc-400 hover:text-zinc-200 cursor-pointer"
								>
									Cancelar
								</Button>
							</DialogClose>
							<Button
								type="submit"
								disabled={!dateHabit || !day || !priority || !category}
								className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 px-8 transition-all disabled:opacity-50 cursor-pointer"
							>
								Criar Hábito
							</Button>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</CardFooter>
	);
};
