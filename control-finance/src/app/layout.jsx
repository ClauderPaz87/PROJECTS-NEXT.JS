import "./globals.css";

export const metadata = {
  title: "Controle financeiro",
  description: "Controle financeiro construido com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
