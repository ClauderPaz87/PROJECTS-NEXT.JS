import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from 'react'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "Projeto Delivery",
  description: "Projeto delivery feito com next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body
          className={cn(`min-h-screen antialiased bg-gray-50 overflow-x-hidden`,inter.className)}
        >
          <Suspense fallback={<HeaderSkeleton />}>
            <Header/>
          </Suspense>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

function HeaderSkeleton() {
  return (
    <div className="p-2 h-14 bg-gray-100">
      <div className="flex justify-between h-full items-center">
        <div className="ml-3 w-12 h-12 rounded-full bg-gray-200"></div>
        <div className="w-[80vw] h-10 bg-gray-200 rounded-full"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  )
}