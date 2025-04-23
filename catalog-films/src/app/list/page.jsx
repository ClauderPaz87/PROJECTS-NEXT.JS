"use client";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFilmsStore } from "@/store/FilmsStore";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { BiSolidDislike, BiSolidHeart, BiSolidLike } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCheck } from "react-icons/fa6";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import gsap from "gsap";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const page = () => {
  const { filmList, addFilmsApi, removeList, addTvApi, like, dislike, love,listFilms } = useFilmsStore();
  const likeRef = useRef(null)
  const dislikeRef = useRef(null)
  const loveRef = useRef(null)

  useEffect(() => {
    addFilmsApi();
    addTvApi();
  }, []);

  if(filmList.length === 0){
    return(
      <div className="text-white text-2xl min-h-[90vh] flex items-center justify-center font-semibold">
        <p>Nenhum filme adicionado</p>
      </div>
    )
  }

  if (!Array.isArray(filmList)) return null;

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
    <div className="pl-18 mt-24">
      <h1 className="text-white font-medium text-2xl font-sans">Minha lista</h1>

      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="mb-6 mt-16"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1.7,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {filmList.map((film) => (
          <SwiperSlide
            key={film.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex flex-row"
          >
            <Card
              key={film.id}
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
              overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.image}`}
                alt={`Imagem ${film.title}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Link href={`/${film.mediaType === "movie" ? "film" : film.mediaType}/${film.id}`}>
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer">
                      <CgMoreO size={30} style={{ color: "#ef4444" }} />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="absolute top-6 left-0.5"
                    >
                      Ver mais
                    </TooltipContent>
                  </Tooltip>
                </Link>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="text-[35px] hover:opacity-80 text-red-500 cursor-pointer">
                      {film.disabledBtn ? (
                        <span onClick={() => removeList(film.id)}>
                          <FaCheck className="hover:opacity-90" />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            listFilms(film.id, film.poster_path, film.title)
                          }
                        >
                          <IoIosAddCircleOutline className="hover:opacity-90" />
                        </span>
                      )}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="absolute top-6 left-0.5"
                  >
                    {film.disabledBtn
                      ? "Remover da lista"
                      : "Adicionar a lista"}
                  </TooltipContent>
                </Tooltip>

                <Popover openDelay={100}>
                  <PopoverTrigger asChild>
                    <button className="cursor-pointer">
                      <BiSolidLike
                        size={35}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="bg-black text-white flex gap-3 justify-center w-32 h-13 items-center border-0 rounded-md"
                    side="top"
                  >
                    <button
                      onClick={() => handleDislike(film.id)}
                      className={`text-2xl text-zinc-400 cursor-pointer hover:opacity-80`}
                    >
                      <BiSolidDislike
                        ref={dislikeRef}
                        size={25}
                        color={`${film.dislikeBtn ? "white" : "gray"}`}
                      />
                    </button>
                    <button
                      onClick={()=>handleLike(film.id)}
                      className={`text-2xl cursor-pointer hover:opacity-80 transition-opacity `}
                    >
                      <BiSolidLike
                        ref={likeRef}
                        size={25}
                        color={`${film.likeBtn ? "white" : "gray"}`}
                      />
                    </button>
                    <button
                      onClick={() => handleLove(film.id)}
                      className={`text-2xl text-zinc-400 cursor-pointer hover:opacity-80`}
                    >
                      <BiSolidHeart
                        ref={loveRef}
                        size={25}
                        color={`${film.loveBtn ? "red" : "gray"}`}
                      />
                    </button>
                  </PopoverContent>
                </Popover>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default page;
