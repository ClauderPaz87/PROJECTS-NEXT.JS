import "./globals.css";
import HeaderUsers from "@/components/Header/HeaderUsers";
import SideBar from "../components/SideBar/SideBar";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Projeto Usuários",
  description: "Projeto para praticar nextJs com funcionalidades avançadas",
  openGraph:{
    title:"Projeto Usuários",
  },
  robots:{
    index:true,
    follow:true,
    nocahce:true,
    googleBot:{
      index:true,
      follow:true,
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/avatar5.png"/>
      </head>
      <body className={`antialiased min-h-screen`}>
        <HeaderUsers />
        <SideBar />
        <ToastContainer/>
        {children}
      </body>
    </html>
  );
}
