import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/SideBar/Sidebar";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Dashboard",
  description: "Dashboard usando o shadcn-ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={cn(`min-h-screen bg-background font-sans antialiased`,
          inter.className
        )}
      >
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
