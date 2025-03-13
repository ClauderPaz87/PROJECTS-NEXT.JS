import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "../components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Finance-Manager",
  description: "App de controle de finanças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={cn(`min-h-screen bg-slate-950 font-sans antialiased`,
          inter.className
        )}
      >
        <Header/>
        <SideBar/>
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
