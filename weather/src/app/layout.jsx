import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({subsets:['latin']})

export const metadata = {
  title: "App de tempo",
  description: "App de tempo feito com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(`antialiased min-h-screen bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 `,
          inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
