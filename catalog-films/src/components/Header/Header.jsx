"use client";
import { useState, useEffect, useRef } from "react";
import { PiFilmSlateFill, PiFilmStripFill } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useClerk, useUser } from "@clerk/nextjs";
import { useFilmsStore } from "@/store/FilmsStore";
import { usePathname } from "next/navigation";
import FilmPoster from "./FilmPoster";
import gsap from "gsap";

const Header = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const { filmList, search, setSearch} = useFilmsStore();
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const inputWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputWrapperRef.current &&
        !inputWrapperRef.current.contains(event.target)
      ) {
        setShowInput(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showInput) {
      gsap.to(inputWrapperRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(inputWrapperRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [showInput]);

  return (
    <>
      {pathname === "/" && <FilmPoster />}
      <header
        className={`fixed top-0 z-50 w-full h-16 transition-all duration-300 ease-in-out
      ${
        isScrolled
          ? "bg-black border-zinc-800"
          : "bg-gradient-to-b from-black/80 to-transparent border-none"
      }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center h-full justify-between">
          <div className="flex items-center gap-2">
            <PiFilmSlateFill size={26} className="text-[#e50914]" />
            <h1 className="text-[#e50914] text-xl sm:text-2xl font-extrabold tracking-tight">
              CineFlix
            </h1>
          </div>

          <div className="flex items-center gap-4 relative">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => setShowInput((prev) => !prev)}
                  className="text-white hover:text-red-600 transition-colors font-medium cursor-pointer"
                >
                  <BsSearch size={25} />
                </button>
              </TooltipTrigger>
              <TooltipContent>Procurar filme</TooltipContent>
            </Tooltip>

            {showInput && (
              <div
                ref={inputWrapperRef}
                className="absolute right-2 pr-36 top-1 w-72 md:w-96 z-10"
                style={{ opacity: 0, transform: "translateX(50px)" }} // Início da animação
              >
                <Input
                  ref={inputRef}
                  type="text"
                  value={search}
                  placeholder="Buscar filme..."
                  className="bg-zinc-900 text-white border-zinc-700"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            )}

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/list"}
                  className="relative text-white hover:text-red-600 transition-colors font-medium cursor-pointer"
                >
                  <PiFilmStripFill size={25} />
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[18px] h-[18px] px-[5px] flex items-center justify-center rounded-full font-bold">
                    {filmList.length}
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Assistir depois</TooltipContent>
            </Tooltip>

            {isSignedIn ? (
              <Button
                onClick={signOut}
                variant="none"
                className="bg-red-700 text-white border-red-700 cursor-pointer font-semibold transition-all duration-200 hover:opacity-90"
              >
                Sair
              </Button>
            ) : (
              <Link href={"/signIn"}>
                <Button
                  variant="none"
                  className="bg-red-700 text-white border-red-700 cursor-pointer font-semibold transition-all duration-200 hover:opacity-90"
                >
                  Entrar
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
