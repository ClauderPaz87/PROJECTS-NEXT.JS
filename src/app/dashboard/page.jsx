"use client";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis, YAxis } from "recharts";
import { useFlowTaskStore } from "@/store/FlowTaskStore";
import { useEffect } from "react";

export const Page = () => {
    const { tasks, calcPerfomance, calcCompleted, calcIgnore } = useFlowTaskStore();

    useEffect(() => {
        calcPerfomance();
    }, [calcPerfomance, calcCompleted]);

    const month = new Date().toLocaleString("pt-BR", { month: "long" });
    const year = new Date().toLocaleString("pt-BR", { year: "numeric" });
    const nameMonthFormated = month.charAt(0).toUpperCase() + month.slice(1);

    const monthsArray = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const chartDataAnual = monthsArray.map((mesNome, index) => {
        const quantidadeNoMes = tasks.filter((t) => {
            if (typeof t.date !== "string") return false;

            const partes = t.date.split("/");
            const mesDaTarefa = parseInt(partes[1], 10) - 1;
            const anoDaTarefa = parseInt(partes[2], 10);

            return t.completed && mesDaTarefa === index && anoDaTarefa === new Date().getFullYear();
        }).length;

        return {
            month: mesNome.slice(0, 3),
            quantidade: quantidadeNoMes,
        };
    });

    const taskCompletedEsteMes = tasks.filter((t) => {
        if (!t.completed || typeof t.date !== "string") return false;
        const partes = t.date.split("/");
        const mesDaTarefa = parseInt(partes[1], 10) - 1;
        return mesDaTarefa === new Date().getMonth();
    }).length;

    const chartDataMensal = [{ month: nameMonthFormated, quantidade: taskCompletedEsteMes }];

    const chartDataPerfomance = [
        { name: "completas", task: calcCompleted, fill: "var(--color-completas)" },
        { name: "total", task: tasks.length, fill: "var(--color-total)" },
        { name: "ignoradas", task: calcIgnore, fill: "var(--color-ignoradas)" },
    ];

    const chartConfig = {
        quantidade: { label: "Completadas", color: "#10b981" },

        completas: { label: "Completadas %", color: "#10b981" },
        total: { label: "Total", color: "#27272a" },
        ignoradas: { label: "Ignoradas %", color: "#f43f5e" },
    };

    return (
        <div className="w-full min-h-[500px]  p-6 rounded-2xl border border-zinc-900 flex flex-col gap-12 ml-6">
            <div>
                <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-tighter mb-4">
                    Desempenho de {nameMonthFormated}
                </h2>
                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartDataMensal}>
                        <CartesianGrid vertical={false} stroke="#27272a" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            allowDecimals={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="quantidade" fill="#10b981" radius={[6, 6, 0, 0]} barSize={60} />
                    </BarChart>
                </ChartContainer>
            </div>

            <div>
                <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-tighter mb-4">
                    Desempenho de {year}
                </h2>
                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartDataAnual}>
                        <CartesianGrid vertical={false} stroke="#27272a" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#71717a"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            allowDecimals={false}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="quantidade" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ChartContainer>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-zinc-500 text-xs font-bold uppercase tracking-tighter mb-4 w-full">
                    Visão Geral de Performance
                </h2>
                <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={chartDataPerfomance}
                            dataKey="task"
                            nameKey="name"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            strokeWidth={2}
                            stroke="#09090b"
                        />
                    </PieChart>
                </ChartContainer>

                <div className="flex gap-4 mt-2">
                    {Object.keys(chartConfig).filter(k => k !== 'quantidade').map((key) => (
                        <div key={key} className="flex items-center gap-2">
                            <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: chartConfig[key].color }} 
                            />
                            <span className="text-[10px] text-zinc-400 uppercase font-bold">
                                {chartConfig[key].label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
