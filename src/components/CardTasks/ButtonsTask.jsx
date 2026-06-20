import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../ui/tooltip";
import { Button } from "../ui/button";
import { CircleCheckBig, CircleX, DeleteIcon, Ellipsis, SquarePen, X } from "lucide-react";
import { DialogEditTask } from "./DialogEditTask";
import { useFlowTaskStore } from "@/store/FlowTaskStore";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Textarea } from "../ui/textarea";
import { useRef } from "react";

export const ButtonsTask = ({ task }) => {
	const {
		deleteTask,
		completedTask,
		editTask,
		modalNotes,
		closeNote,
		addNotes,
		excludeNote,
		closeViewNote,
		addTask,
		checkIgnore,
		addViewNotes,
	} = useFlowTaskStore();

	const textNotes = useRef();

	const add = () => {
		if (!textNotes.current.value) return;
		addNotes(task.id, textNotes.current.value);
		task.note = false;
	};

	const duplicate = () => {
		addTask(task.text, task.day, task.priority, task.category, task.date)
	}

	return (
		<div className="flex items-center gap-1 opacity-100 ">
			<div className="flex items-center gap-1">
				<Button
					onClick={() => completedTask(task.id)}
					variant="ghost"
					className="h-8 w-8 p-0 hover:bg-emerald-500/10 transition-all"
				>
					<CircleCheckBig className="size-5 text-emerald-500" />
				</Button>
				<Button
					onClick={() => deleteTask(task.id)}
					variant="ghost"
					className="h-8 w-8 p-0 hover:bg-red-500/10 transition-all"
				>
					<CircleX className="size-5 text-red-500" />
				</Button>
				<Button
					onClick={() => editTask(task.id)}
					variant="ghost"
					className="h-8 w-8 p-0 hover:bg-blue-500/10 transition-all"
				>
					<SquarePen className="size-5 text-blue-400" />
				</Button>
			</div>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0 hover:bg-zinc-800 transition-all">
						<Ellipsis className="size-5 text-zinc-400" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className="bg-zinc-950 border border-zinc-800 text-zinc-200 rounded-lg shadow-xl w-36">
					<DropdownMenuItem onClick={() => modalNotes(task.id)} className="cursor-pointer focus:bg-zinc-400 transition-colors">
						📝 Adicionar nota
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => addViewNotes(task.id)} className="cursor-pointer focus:bg-zinc-400 transition-colors">
						👁️ Ver notas
					</DropdownMenuItem>
					<DropdownMenuItem onClick={duplicate} className="cursor-pointer focus:bg-zinc-400 transition-colors">
						📄 Duplicar
					</DropdownMenuItem>
					<DropdownMenuSeparator className="bg-zinc-800" />
					<DropdownMenuItem onClick={() => checkIgnore(task.id)} className="text-red-500 cursor-pointer focus:bg-red-500/10 focus:text-red-500 transition-colors">
						Ignorar tarefa
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			{task.dialogTask && <DialogEditTask task={task} />}

			{task.note && (
				<div className={`absolute ${task.day === "Todos os dias" ? "left-96 bottom-46" : task.day === "Todo mês" ? "right-96 bottom-46" : task.day === "Todo ano" ? "right-8 bottom-46" : ""} z-50 w-64 bg-zinc-900 border border-zinc-700 p-2 rounded-lg shadow-2xl`}>
					<Textarea
						ref={textNotes}
						placeholder="Digite sua nota..."
						className="bg-zinc-950 border-zinc-800 focus:border-zinc-600 resize-none h-20 text-xs text-zinc-200"
					/>
					<div className="flex justify-end gap-2 mt-2">
						<Button
							onClick={() => closeNote(task.id)}
							variant="ghost"
							className="h-7 px-2 text-xs text-zinc-400 hover:text-zinc-600 transition-all duration-300"
						>
							Fechar
						</Button>
						<Button
							onClick={add}
							className="h-7 px-3 text-xs bg-zinc-100 text-zinc-950 hover:bg-white font-bold"
						>
							Salvar
						</Button>
					</div>
				</div>
			)}

			{task.viewNotes && (
				<div className={`absolute ${task.day === "Todos os dias" ? "left-96 bottom-46" : task.day === "Todo mês" ? "right-96 bottom-46" : task.day === "Todo ano" ? "right-8 bottom-46" : ""} z-50 w-72 bg-zinc-950 border border-zinc-800 shadow-2xl rounded-lg overflow-hidden`}>
					<div className="border-b border-zinc-800 p-3 flex justify-between items-center bg-zinc-900/50">
						<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
							{task.date ? new Date(task.date).toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "short" }) : "Notas"}
						</p>
						<button onClick={() => closeViewNote(task.id)} className="text-red-500 hover:bg-red-500/10 p-1 rounded-full transition-all">
							<X size={14} />
						</button>
					</div>

					<div className="max-h-48 overflow-y-auto">
						{task.notes && task.notes.map((note) => (
							<div key={note.id} className="p-3 border-b border-zinc-900 last:border-0 flex justify-between items-start group">
								<div className="flex-1 pr-2">
									<p className="text-[9px] text-zinc-600 font-bold mb-1">{note.hours}</p>
									<p className="text-xs text-zinc-300 leading-tight">{note.text}</p>
								</div>
								<button onClick={() => excludeNote(note.id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-700 hover:text-red-500">
									<DeleteIcon size={16} />
								</button>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};