import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "Projeto Twitter-Clone",
  description: "Projeto twitter clone feito com next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body
          className={cn(`antialiased min-h-screen bg-slate-950`, inter.className)}
        >
          {children}
          <ToastContainer/>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
