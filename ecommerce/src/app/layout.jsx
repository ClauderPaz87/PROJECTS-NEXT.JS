import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Projeto e-commerce criado com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head >
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
      </head>
      <body
        className={cn(
          "antialiased min-h-screen bg-[#EBEBEB] overflow-x-hidden",
          inter.className
        )}
        translate="no"
        suppressHydrationWarning
      >
        <ClerkProvider>
          <Header />
          {children}
          <ToastContainer />
        </ClerkProvider>
      </body>
    </html>
  );
}
