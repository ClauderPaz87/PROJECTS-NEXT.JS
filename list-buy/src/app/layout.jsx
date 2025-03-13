import "./globals.css";

export const metadata = {
  title: "Lista de compras",
  description: "List de compras feita com next-js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-gray-200 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
