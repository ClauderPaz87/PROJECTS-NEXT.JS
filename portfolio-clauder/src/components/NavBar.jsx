"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <nav className="w-full py-4 px-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 fixed top-0 z-50 shadow-md">
        <ul className="flex justify-center gap-8 font-medium text-gray-100">
          <li>
            <Link
              href="#inicio"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="#sobre"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              href="#projetos"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="#contato"
              className="hover:text-blue-400 transition-all duration-300"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
