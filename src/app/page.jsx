import { CardTask } from "@/components/CardTasks/CardTask";
import { agbaLumo, orbitron } from "./layout";
import { Logs } from "lucide-react";

export default function Home() {
	return (
		<div className="mx-auto w-full max-w-7xl px-8 mt-10">
			<div className="flex flex-col gap-2 mb-8 relative ml-5">

				<div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/50 via-zinc-800 to-transparent rounded-full" />

				<div className="flex items-center gap-2 mb-1">
					<div className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
						<Logs className="text-zinc-500 size-3" />
					</div>
					<h2 className={`${agbaLumo.className} text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold`}>
						Menu Principal
					</h2>
				</div>

				<h1 className={`${orbitron.className} text-2xl md:text-3xl font-black tracking-tighter text-white lg:max-w-3xl`}>
					Bem-vindo, <span className="text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">Clauder</span>.
					<span className="block text-zinc-500 text-lg md:text-xl font-medium tracking-normal mt-1">
						O que temos no radar para hoje?
					</span>
				</h1>
			</div>

			<CardTask />
		</div>
	);
}
