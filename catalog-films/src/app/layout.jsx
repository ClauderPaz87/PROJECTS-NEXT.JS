
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Catálogo de filmes",
  description: "Catálgo de filmes feito com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <ClerkProvider>
        <body
          className={cn(
            "min-h-screen bg-black text-white antialiased overflow-x-hidden",
            inter.className
          )}
        >
          <Header />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
