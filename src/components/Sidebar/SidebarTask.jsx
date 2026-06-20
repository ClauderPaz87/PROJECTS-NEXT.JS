"use client";
import Link from "next/link";
import {
	LayoutDashboard,
	FileBarChart,
	BookPlusIcon,
	ChartBar,
	LogOut,
	Menu // Ícone para o trigger mobile
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MobileTrigger = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <div className="lg:hidden fixed top-4 left-4 z-50">
            <button 
                onClick={toggleSidebar}
                className="bg-emerald-600 p-2.5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.5)] text-white hover:bg-emerald-500 transition-all active:scale-95 flex items-center justify-center border-none"
            >
                <Menu size={22} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default function SidebarTask() {
	const pathName = usePathname();

	return (
		<SidebarProvider className={"w-8 md:w-60"}>
			<MobileTrigger/>
			<Sidebar className="border-r border-zinc-900" collapsible="icon">
				<SidebarHeader className="bg-zinc-950 h-20 flex flex-row items-center px-6 border-b border-zinc-900">
					<div className="flex items-center gap-3">
						<div className="bg-emerald-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)]">
							<LayoutDashboard className="size-5 text-white" />
						</div>
						<p className="text-xl font-black text-white tracking-tight italic group-data-[collapsible=icon]:hidden">
							FLOW<span className="text-emerald-500">TASKS</span>
						</p>
					</div>
				</SidebarHeader>

				<SidebarContent className="bg-zinc-950 px-2 py-4">
					<SidebarGroup>
						<SidebarGroupLabel className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest px-2 mb-4 group-data-[collapsible=icon]:hidden">
							Menu Principal
						</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu className="gap-2">
								<SidebarMenuItem>
									<SidebarMenuButton
										asChild
										isActive={pathName === "/"}
										className={`h-11 transition-all duration-200 hover:bg-zinc-900 hover:text-emerald-400 text-zinc-400 ${pathName === "/" ? "bg-zinc-900 text-emerald-500 shadow-md" : ""
											}`}
									>
										<Link href="/" className="flex items-center gap-3">
											<BookPlusIcon size={20} />
											<span className="font-medium">Tarefas</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>

								<SidebarMenuItem>
									<SidebarMenuButton
										asChild
										isActive={pathName === "/dashboard"}
										className={`h-11 transition-all duration-200 hover:bg-zinc-900 hover:text-emerald-400 text-zinc-400 ${pathName === "/dashboard" ? "bg-zinc-900 text-emerald-500 shadow-md" : ""
											}`}
									>
										<Link href="/dashboard" className="flex items-center gap-3">
											<ChartBar size={20} />
											<span className="font-medium">Dashboard</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>

								<SidebarMenuItem>
									<SidebarMenuButton
										asChild
										isActive={pathName === "/relatorios"}
										className={`h-11 transition-all duration-200 hover:bg-zinc-900 hover:text-emerald-400 text-zinc-400 ${pathName === "/relatorios" ? "bg-zinc-900 text-emerald-500 shadow-md" : ""
											}`}
									>
										<Link href="/relatorios" className="flex items-center gap-3">
											<FileBarChart size={20} />
											<span className="font-medium">Relatórios</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>

				<SidebarFooter className="bg-zinc-950 border-t border-zinc-900 p-4">
					<div className="flex items-center justify-between bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 overflow-hidden">
						<div className="flex items-center gap-3 min-w-0">
							<Avatar className="h-8 w-8 border border-emerald-500/50 shrink-0">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback className="bg-zinc-800 text-white text-xs">CN</AvatarFallback>
							</Avatar>
							<div className="flex flex-col min-w-0 group-data-[collapsible=icon]:hidden">
								<span className="text-sm font-bold text-zinc-200 leading-none truncate">
									Shadcn
								</span>
								<span className="text-[10px] text-zinc-500 truncate">
									shadcn@flow.com
								</span>
							</div>
						</div>
						<button className="text-zinc-500 hover:text-red-400 transition-colors shrink-0 group-data-[collapsible=icon]:hidden ml-2">
							<LogOut size={18} />
						</button>
					</div>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	);
}