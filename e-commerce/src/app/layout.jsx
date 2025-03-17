import "./globals.css";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "E-commerce",
  description: "E-commerce feito com next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body
          className={cn(`min-h-screen bg-slate-700 antialiased`,
            inter.className
          )}
        >
          <Header/>
          {children}
        </body>
      </html>
    </ClerkProvider>
      
  );
}
