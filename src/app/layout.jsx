import "./globals.css";
import { Agbalumo, Geist, Orbitron } from "next/font/google";
import { cn } from "@/lib/utils";
import SidebarTask from "@/components/Sidebar/SidebarTask";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
export const agbaLumo = Agbalumo({weight:['400'] , subsets:['latin']})
export const orbitron = Orbitron({subsets:['latin']})



export default function RootLayout({ children }) {
	return (
		<html lang="en" className={cn("h-full", "antialiased", "font-sans", geist.variable)}>
			<body className={`min-h-full flex bg-zinc-950/95`}>
        <SidebarTask />
        {children}
      </body>
		</html>
	);
}
