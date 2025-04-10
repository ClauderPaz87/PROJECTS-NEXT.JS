import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Portfólio Clauder Paz",
  description: "Portfólio criado com next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
