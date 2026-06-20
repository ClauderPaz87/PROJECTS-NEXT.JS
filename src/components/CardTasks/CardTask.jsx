"use client";
import { useEffect, useState } from "react";
import {
    Calendar as CalendarIcon,
    BicepsFlexed,
    BookAIcon,
    PiggyBank,
    HeartIcon,
    Briefcase,
    RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DialogTask } from "./DialogTask";
import { useFlowTaskStore } from "@/store/FlowTaskStore";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "../ui/select";
import { ButtonsTask } from "./ButtonsTask";
import Link from "next/link";

export const CardTask = () => {
    const { tasks } = useFlowTaskStore();
    const [selectDiary, setSelectDiary] = useState("");
    const [selectMonth, setSelectMonth] = useState("");
    const [selectYear, setSelectYear] = useState("");

    const order = {
        "Prioridade 1": 1,
        "Prioridade 2": 2,
        "Prioridade 3": 3,
    };

    const sortedTask = tasks.sort((a, b) => {
        return order[a.priority] - order[b.priority];
        
    });

    useEffect(() => {
        sortedTask;
    }, [tasks]);


    return (
        <div className="mt-5 w-full">
            <Card className="bg-zinc-950  border-l-2 border-zinc-800 text-zinc-100 rounded-lg shadow-2xl flex flex-col ">
                <div className="bg-zinc-900/30 border-t border-zinc-800 rounded-b-2xl">
                    <DialogTask />
                </div>
            </Card>

            <div className="grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-3 mt-5">
                <div>
                    <Card
                        className="bg-zinc-950 border-zinc-900 shadow-2xl sm:h-[200px] xl:h-auto xl:overflow-y-hidden sm:overflow-y-auto flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-950 [&::-webkit-scrollbar-thumb]:bg-zinc-900
                        [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        <CardHeader className="border-b border-zinc-900/50 py-3 flex justify-between px-3 items-center">
                            <CardTitle className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                Diários
                            </CardTitle>
                            <div>
                                <Select value={selectDiary} onValueChange={setSelectDiary}>
                                    <SelectTrigger className="w-36 bg-zinc-900 border-zinc-800 text-xs h-9 text-zinc-300 hover:border-zinc-700 transition-colors duration-200">
                                        <SelectValue placeholder="Todas as tarefas" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                                        <SelectGroup>
                                            <SelectItem value="Todas as tarefas">Todas as tarefas</SelectItem>
                                            <SelectItem value="Concluidas">Concluídas</SelectItem>
                                            <SelectItem value="Ignoradas">Ignoradas</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>

                        <div className="flex flex-col divide-y divide-zinc-900/50">
                            {tasks.map(
                                (task) =>
                                    task.day === "Todos os dias" && (
                                        <CardContent key={task.id} className="p-0 ">
                                            {(task.completed && selectDiary === "Concluidas") ||
                                                (task.ignore && selectDiary === "Ignoradas") ||
                                                selectDiary === "Todas as tarefas" ||
                                                selectDiary === "" ? (
                                                <div className="flex items-center min-h-[70px] px-3 py-3 hover:bg-zinc-900/40 transition-all group gap-3">
                                                    <Link href={`/task/${task.id}`} className="flex-1 min-w-0">
                                                        <div
                                                            className={`flex items-start gap-3 ${task.completed || task.ignore ? "opacity-40" : "opacity-100"}`}
                                                        >
                                                            <div className="flex flex-col items-center gap-2 mt-1">
                                                                <span
                                                                    className={`text-[8px] text-white font-black px-1.5 py-0.5 rounded-sm ${task.priority === "Prioridade 1"
                                                                        ? "bg-red-500"
                                                                        : task.priority === "Prioridade 2"
                                                                            ? "bg-yellow-600"
                                                                            : "bg-emerald-600"
                                                                        }`}
                                                                >
                                                                    {task.priority === "Prioridade 1"
                                                                        ? "P1"
                                                                        : task.priority === "Prioridade 2"
                                                                            ? "P2"
                                                                            : "P3"}
                                                                </span>

                                                                {task.category === "Treino" && (
                                                                    <BicepsFlexed
                                                                        size={14}
                                                                        className="text-zinc-500"
                                                                    />
                                                                )}
                                                                {task.category === "Estudo" && (
                                                                    <BookAIcon size={14} className="text-zinc-500" />
                                                                )}
                                                                {task.category === "Finanças" && (
                                                                    <PiggyBank size={14} className="text-zinc-500" />
                                                                )}
                                                                {task.category === "Saúde" && (
                                                                    <HeartIcon size={14} className="text-zinc-500" />
                                                                )}
                                                                {task.category === "Trabalho" && (
                                                                    <Briefcase size={14} className="text-zinc-500" />
                                                                )}
                                                                {task.category === "Outro" && (
                                                                    <RefreshCw size={14} className="text-zinc-500" />
                                                                )}
                                                            </div>

                                                            <div className="flex flex-col flex-1 min-w-0 gap-1">
                                                                <p
                                                                    className={`text-xs font-semibold leading-tight break-words ${task.completed
                                                                        ? "line-through text-emerald-500"
                                                                        : task.ignore
                                                                            ? "line-through text-red-800"
                                                                            : "text-zinc-200"
                                                                        }`}
                                                                >
                                                                    {task.text}
                                                                </p>

                                                                <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-medium">
                                                                    <CalendarIcon
                                                                        size={10}
                                                                        className={`${task.completed && "text-emerald-500"}
                                                        ${task.ignore && "text-red-800"}`}
                                                                    />
                                                                    <span
                                                                        className={`${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                    >
                                                                        {task.day}
                                                                    </span>
                                                                    {task.date && (
                                                                        <span
                                                                            className={`opacity-40 whitespace-nowrap ${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                        >
                                                                            •{" "}
                                                                            {new Date(task.date).toLocaleDateString(
                                                                                "pt-BR",
                                                                                {
                                                                                    day: "2-digit",
                                                                                    month: "2-digit",
                                                                                }
                                                                            )}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <div>
                                                        <ButtonsTask task={task} />
                                                    </div>
                                                </div>
                                            ) : null}
                                        </CardContent>
                                    )
                            )}
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        className="bg-zinc-950 border-zinc-900 shadow-2xl sm:h-[200px] xl:h-auto xl:overflow-y-hidden sm:overflow-y-auto flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-950 [&::-webkit-scrollbar-thumb]:bg-zinc-900
                        [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        <CardHeader className="border-b border-zinc-900/50 py-3 flex justify-between px-3 items-center">
                            <CardTitle className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                Mensal
                            </CardTitle>
                            <div>
                                <Select value={selectMonth} onValueChange={setSelectMonth}>
                                    <SelectTrigger className="w-36 bg-zinc-900 border-zinc-800 text-xs h-9 text-zinc-300 hover:border-zinc-700 transition-colors duration-200">
                                        <SelectValue placeholder="Todas as tarefas" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                                        <SelectGroup>
                                            <SelectItem value="Todas as tarefas">Todas as tarefas</SelectItem>
                                            <SelectItem value="Concluidas">Concluídas</SelectItem>
                                            <SelectItem value="Ignoradas">Ignoradas</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>

                        <div className="flex flex-col divide-y divide-zinc-900/50">
                            {tasks.map((task) => {
                                return task.day === "Todo mês" ? (
                                    <CardContent key={task.id} className="p-0">
                                        {(task.completed && selectMonth === "Concluidas") ||
                                            (task.ignore && selectMonth === "Ignoradas") ||
                                            selectMonth === "Todas as tarefas" ||
                                            selectMonth === "" ? (
                                            <div className="flex items-center min-h-[70px] px-3 py-3 hover:bg-zinc-900/40 transition-all group gap-3">
                                                <Link href={`/task/${task.id}`} className="flex-1 min-w-0">
                                                    <div
                                                        className={`flex items-start gap-3 ${task.completed || task.ignore ? "opacity-40" : "opacity-100"}`}
                                                    >
                                                        <div className="flex flex-col items-center gap-2 mt-1">
                                                            <span
                                                                className={`text-[8px] text-white font-black px-1.5 py-0.5 rounded-sm ${task.priority === "Prioridade 1"
                                                                    ? "bg-red-500"
                                                                    : task.priority === "Prioridade 2"
                                                                        ? "bg-yellow-600"
                                                                        : "bg-emerald-600"
                                                                    }`}
                                                            >
                                                                {task.priority === "Prioridade 1"
                                                                    ? "P1"
                                                                    : task.priority === "Prioridade 2"
                                                                        ? "P2"
                                                                        : "P3"}
                                                            </span>

                                                            {task.category === "Treino" && (
                                                                <BicepsFlexed size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Estudo" && (
                                                                <BookAIcon size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Finanças" && (
                                                                <PiggyBank size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Saúde" && (
                                                                <HeartIcon size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Trabalho" && (
                                                                <Briefcase size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Outro" && (
                                                                <RefreshCw size={14} className="text-zinc-500" />
                                                            )}
                                                        </div>

                                                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                                                            <p
                                                                className={`text-xs font-semibold leading-tight break-words ${task.completed
                                                                    ? "line-through text-emerald-500"
                                                                    : task.ignore
                                                                        ? "line-through text-red-800"
                                                                        : "text-zinc-200"
                                                                    }`}
                                                            >
                                                                {task.text}
                                                            </p>

                                                            <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-medium">
                                                                <CalendarIcon
                                                                    size={10}
                                                                    className={`${task.completed && "text-emerald-500"}
                                                        ${task.ignore && "text-red-800"}`}
                                                                />
                                                                <span
                                                                    className={`${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                >
                                                                    {task.day}
                                                                </span>
                                                                {task.date && (
                                                                    <span
                                                                        className={`opacity-40 whitespace-nowrap ${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                    >
                                                                        •{" "}
                                                                        {new Date(task.date).toLocaleDateString(
                                                                            "pt-BR",
                                                                            {
                                                                                day: "2-digit",
                                                                                month: "2-digit",
                                                                            }
                                                                        )}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div>
                                                    <ButtonsTask task={task} />
                                                </div>
                                            </div>
                                        ) : null}
                                    </CardContent>
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                    </Card>
                </div>

                <div className="h-full">
                    <Card
                        className="bg-zinc-950 border-zinc-900 shadow-2xl sm:h-[200px] xl:h-auto xl:overflow-y-hidden sm:overflow-y-auto flex flex-col [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-zinc-950 [&::-webkit-scrollbar-thumb]:bg-zinc-900
                        [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                        <CardHeader className="border-b border-zinc-900/50 py-3 flex justify-between px-3 items-center">
                            <CardTitle className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                Anual
                            </CardTitle>
                            <div>
                                <Select value={selectYear} onValueChange={setSelectYear}>
                                    <SelectTrigger className="w-36 bg-zinc-900 border-zinc-800 text-xs h-9 text-zinc-300 hover:border-zinc-700 transition-colors duration-200">
                                        <SelectValue placeholder="Todas as tarefas" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200">
                                        <SelectGroup>
                                            <SelectItem value="Todas as tarefas">Todas as tarefas</SelectItem>
                                            <SelectItem value="Concluidas">Concluídas</SelectItem>
                                            <SelectItem value="Ignoradas">Ignoradas</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardHeader>

                        <div className="flex flex-col divide-y divide-zinc-900/50">
                            {tasks.map((task) =>
                                task.day === "Todo ano" ? (
                                    <CardContent key={task.id} className="p-0">
                                        {(task.completed && selectYear === "Concluidas") ||
                                            (task.ignore && selectYear === "Ignoradas") ||
                                            selectYear === "Todas as tarefas" ||
                                            selectYear === "" ? (
                                            <div className="flex items-center min-h-[70px] px-3 py-3 hover:bg-zinc-900/40 transition-all group gap-3">
                                                <Link href={`/task/${task.id}`} className="flex-1 min-w-0">
                                                    <div
                                                        className={`flex items-start gap-3 ${task.completed || task.ignore ? "opacity-40" : "opacity-100"}`}
                                                    >
                                                        <div className="flex flex-col items-center gap-2 mt-1">
                                                            <span
                                                                className={`text-[8px] text-white font-black px-1.5 py-0.5 rounded-sm ${task.priority === "Prioridade 1"
                                                                    ? "bg-red-500"
                                                                    : task.priority === "Prioridade 2"
                                                                        ? "bg-yellow-600"
                                                                        : "bg-emerald-600"
                                                                    }`}
                                                            >
                                                                {task.priority === "Prioridade 1"
                                                                    ? "P1"
                                                                    : task.priority === "Prioridade 2"
                                                                        ? "P2"
                                                                        : "P3"}
                                                            </span>

                                                            {task.category === "Treino" && (
                                                                <BicepsFlexed size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Estudo" && (
                                                                <BookAIcon size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Finanças" && (
                                                                <PiggyBank size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Saúde" && (
                                                                <HeartIcon size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Trabalho" && (
                                                                <Briefcase size={14} className="text-zinc-500" />
                                                            )}
                                                            {task.category === "Outro" && (
                                                                <RefreshCw size={14} className="text-zinc-500" />
                                                            )}
                                                        </div>

                                                        <div className="flex flex-col flex-1 min-w-0 gap-1">
                                                            <p
                                                                className={`text-xs font-semibold leading-tight break-words ${task.completed
                                                                    ? "line-through text-emerald-500"
                                                                    : task.ignore
                                                                        ? "line-through text-red-800"
                                                                        : "text-zinc-200"
                                                                    }`}
                                                            >
                                                                {task.text}
                                                            </p>

                                                            <div className="flex items-center gap-1.5 text-[9px] text-zinc-500 font-medium">
                                                                <CalendarIcon
                                                                    size={10}
                                                                    className={`${task.completed && "text-emerald-500"}
                                                        ${task.ignore && "text-red-800"}`}
                                                                />
                                                                <span
                                                                    className={`${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                >
                                                                    {task.day}
                                                                </span>
                                                                {task.date && (
                                                                    <span
                                                                        className={`opacity-40 whitespace-nowrap ${task.completed && "text-emerald-500"} ${task.ignore && "text-red-800"}`}
                                                                    >
                                                                        •{" "}
                                                                        {new Date(task.date).toLocaleDateString(
                                                                            "pt-BR",
                                                                            {
                                                                                day: "2-digit",
                                                                                month: "2-digit",
                                                                            }
                                                                        )}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <div>
                                                    <ButtonsTask task={task} />
                                                </div>
                                            </div>
                                        ) : null}
                                    </CardContent>
                                ) : (
                                    ""
                                )
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};
