"use client";
import { formatDuration } from "@/components/Films/DurationMinutes";
import { Button } from "@/components/ui/button";
import { useFilmsStore } from "@/store/FilmsStore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { MdOutlineHd } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
import {
  BiLike,
  BiSolidDislike,
  BiSolidHeart,
  BiSolidLike,
} from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { CgUnavailable } from "react-icons/cg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import gsap from "gsap";

const Page = () => {
  const params = useParams();
  const { tv, addTvApi, listFilms, removeList, like, dislike, love } =
    useFilmsStore();
  const likeRef = useRef(null);
  const dislikeRef = useRef(null);
  const loveRef = useRef(null);

  useEffect(() => {
    if (tv.length === 0) {
      addTvApi();
    }
  }, [tv]);

  const tvFilm = tv.find((f) => f.id === Number(params.id));

  if (!tvFilm) {
    return (
      <div className="flex items-center justify-center min-h-[115vh]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-red-500 border-dashed rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  const handleLike = (id) => {
    like(id);

    gsap.fromTo(
      likeRef.current,
      { scale: 1 },
      { scale: 1.4, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
    );
  };
  const handleDislike = (id) => {
    dislike(id);

    gsap.fromTo(
      dislikeRef.current,
      { scale: 1 },
      { scale: 1.4, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
    );
  };
  const handleLove = (id) => {
    love(id);

    gsap.fromTo(
      loveRef.current,
      { scale: 1 },
      { scale: 1.4, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
    );
  };

  return (
    <div className="flex flex-col pb-10">
      <div className="relative w-full h-[500px]">
        <Image
          src={`https://image.tmdb.org/t/p/original${tvFilm.backdrop_path}`}
          alt={`Imagem ${tvFilm.title}`}
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      <div className="mt-3.5 ml-3.5 flex flex-col gap-3">
        <p className="text-2xl font-semibold text-white">{tvFilm.name}</p>

        <div className="flex gap-5 h-auto items-center">
          <p className="text-sm text-zinc-400">
            {tvFilm.first_air_date || "Indisponível"}
          </p>
          <p
            className={`${
              tvFilm.contentRating === "16"
                ? "bg-red-700/100"
                : tvFilm.contentRating === "14"
                ? "bg-orange-400"
                : tvFilm.contentRating === "12"
                ? "bg-yellow-500"
                : tvFilm.contentRating === "18"
                ? "bg-zinc-800/100"
                : tvFilm.contentRating === "10"
                ? "bg-blue-400"
                : tvFilm.contentRating === "L"
                ? "bg-green-500"
                : "bg-zinc-600"
            } 
          text-sm font-medium rounded-xs h-5 w-6 flex justify-center items-center`}
          >
            {tvFilm.contentRating || <CgUnavailable color="white" />}
          </p>

          <p className="text-sm font-semibold text-zinc-400">
            {formatDuration(tvFilm.episode_run_time) || "Indisponível"} por
            epsódio
          </p>
          <p className="text-sm font-semibold text-zinc-400">
            {tvFilm.number_of_seasons || "Indisponível"} temporadas
          </p>
          <span>
            <MdOutlineHd color="gray" size={25} />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            variant="secondary"
            className="w-full text-black font-semibold cursor-pointer flex gap-2 rounded-sm mt-2.5"
          >
            <span>
              <FaPlay color="black" />
            </span>
            Assistir
          </Button>
          <Button
            className="bg-zinc-700/50 border border-zinc-500/30 hover:bg-zinc-600/60 text-white cursor-pointer rounded-sm 
            flex w-full gap-2 font-semibold"
          >
            <span>
              <MdDownload color="white" />
            </span>
            Baixar
          </Button>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          <p className="text-2xl text-white font-bold">Sinopse</p>
          <p className="text-white text-sm w-full font-medium">
            {tvFilm.overview || "Indisponível"}
          </p>
        </div>

        <div className="mt-1 flex flex-col gap-1 w-full">
          <p className="text-zinc-400 font-semibold text-sm">
            Estrelado por:
            {tvFilm.cast.length > 0 ? (
              tvFilm.cast.map((ator, index) => (
                <span key={ator.id} className="text-zinc-500">
                  {ator.name}
                  {index < tvFilm.cast.length - 1 && ", "}
                </span>
              ))
            ) : (
              <span className="text-zinc-500">Indisponível</span>
            )}
          </p>
          <p className="text-zinc-400 font-semibold flex text-sm">
            Direção:
            <span className="text-zinc-500">
              {tvFilm.created_by || "Indisponível"}
            </span>
          </p>
        </div>

        <div className="mt-3 flex gap-1.5">
          <Button
            variant={"none"}
            className="bg-zinc-800 hover:bg-zinc-600 cursor-pointer"
          >
            {tvFilm.disabledBtn ? (
              <span
                onClick={() => removeList(tvFilm.id)}
                className="flex items-center gap-1 sm:gap-2 px-4 py-2 h-9 whitespace-nowrap font-medium"
              >
                <FaCheck size={25} color="white" />
                Remover da lista
              </span>
            ) : (
              <span
                onClick={() =>
                  listFilms(tvFilm.id, tvFilm.poster_path, tvFilm.title)
                }
                className="flex items-center gap-1 sm:gap-2 px-2 py-2 h-9 whitespace-nowrap font-medium "
              >
                <IoAddSharp size={25} color="white" />
                Adicionar a lista
              </span>
            )}
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"none"}
                className="text-sm font-semibold text-white cursor-pointer flex h-auto items-center gap-2 bg-zinc-800 
                    hover:bg-zinc-600"
              >
                <BiLike size={25} color="white" />
                Classificar
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="bg-black text-white flex gap-3 justify-center w-32 h-13 items-center border-0 rounded-md"
              side="top"
            >
              <button
                onClick={() => handleDislike(tv.id)}
                className={`text-2xl text-zinc-400 cursor-pointer hover:opacity-80`}
              >
                <BiSolidDislike
                  ref={dislikeRef}
                  size={25}
                  color={`${tv.dislikeBtn ? "white" : "gray"}`}
                />
              </button>
              <button
                onClick={() => handleLike(tv.id)}
                className={`text-2xl cursor-pointer hover:opacity-80 transition-opacity `}
              >
                <BiSolidLike
                  ref={likeRef}
                  size={25}
                  color={`${tv.likeBtn ? "white" : "gray"}`}
                />
              </button>
              <button
                onClick={() => handleLove(tv.id)}
                className={`text-2xl text-zinc-400 cursor-pointer hover:opacity-80`}
              >
                <BiSolidHeart
                  ref={loveRef}
                  size={25}
                  color={`${tv.loveBtn ? "red" : "gray"}`}
                />
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Page;
