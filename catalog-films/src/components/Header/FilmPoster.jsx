"use client";
import { useFilmsStore } from "@/store/FilmsStore";
import Image from "next/image";
import { Button } from "../ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const FilmPoster = () => {
  const { films, listFilms, removeList } = useFilmsStore();
  const posterRef = useRef(null);

  const film = films?.[14];

  useEffect(() => {
    if (film && posterRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".poster-animation",
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      }, posterRef);

      return () => ctx.revert();
    }
  }, [film]);

  if (!film) return null;

  return (
    <div
      className="absolute top-0 left-0 w-full h-[580px] -z-10"
      ref={posterRef}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
        alt={`Imagem ${film.title}`}
        fill
        className="object-cover brightness-75 poster-animation"
        priority
      />
      <div className="flex flex-col">
        <p className="text-3xl sm:text-4xl text-white italic font-semibold relative top-[345px] left-2.5 sm:left-13 poster-animation">
          {film.title}
        </p>
        <div className="flex gap-3.5 relative top-[370px] left-2.5 sm:left-13 w-40 md:w-52">
          <Button
            variant={"none"}
            className="bg-red-700 hover:opacity-75 cursor-pointer rounded-sm flex items-center gap-2 p-0 w-full poster-animation"
          >
            {film.disabledBtn ? (
              <span
                onClick={() => removeList(film.id)}
                className="flex items-center gap-1 sm:gap-2 px-4 py-2 h-9 whitespace-nowrap font-medium"
              >
                <FaCheck className="w-6 h-6 size-6" />
                Remover da lista
              </span>
            ) : (
              <span
                onClick={() =>
                  listFilms(film.id, film.poster_path, film.title)
                }
                className="flex items-center gap-1 sm:gap-2 px-4 py-2 h-9 whitespace-nowrap font-medium"
              >
                <IoIosAddCircleOutline className="w-6 h-6 size-6" />
                Adicionar a lista
              </span>
            )}
          </Button>

          <Link href={`/film/${film.id}`} className="ml-1.5 md:ml-0">
            <Button
              variant={"none"}
              className="bg-zinc-700/50 border border-zinc-500/30 hover:bg-zinc-600/60 text-white cursor-pointer rounded-sm 
              flex items-center gap-1 px-2 py-2 transition w-36 md:w-full poster-animation text-sm"
            >
              <IoIosInformationCircleOutline className="size-6" />
              Mais informações
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmPoster;
