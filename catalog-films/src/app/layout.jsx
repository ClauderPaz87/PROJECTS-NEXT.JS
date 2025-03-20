import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Projeto de filmes",
  description: "Projeto de filmes usando o next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-slate-950`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
