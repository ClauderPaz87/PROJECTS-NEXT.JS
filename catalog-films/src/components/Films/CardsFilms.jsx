"use client";
import { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import { useFilmsStore } from "@/store/FilmsStore";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgMoreO } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiSolidDislike, BiSolidHeart, BiSolidLike } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import {HoverCard,HoverCardTrigger,HoverCardContent,} from "@/components/ui/hover-card";
import TvFilms from "./TvFims";
import gsap from "gsap";

const CardsFilms = () => {
  const {
    addFilmsApi,
    addTvApi,
    films,
    tv,
    listFilms,
    removeList,
    starsRaiting,
    like,
    love,
    dislike,
    search 
  } = useFilmsStore();
  const likeRef = useRef(null)
  const dislikeRef = useRef(null)
  const loveRef = useRef(null)

  useEffect(() => {
    addFilmsApi();
    addTvApi();
  }, []);

  useEffect(() => {
    if (films.length > 0 && tv.length > 0) {
      gsap.to(".filmsCard", {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger:1
      });
    }
  }, [films, tv]);

  if (films.length === 0 || tv.length === 0) {
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

    const filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
    const filteredTV = tv.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );

  const divideFilms = (films) => {
    const firstPart = filteredFilms.slice(0, 6);
    const secondPart = filteredFilms.slice(6, 12);
    const thirdPart = filteredFilms.slice(12, 20);
    const firstPartTv = filteredTV.slice(0, 6);
    const secondPartTv = filteredTV.slice(6, 12);
    const thirdPartTv = filteredTV.slice(12, 20);
    return {
      firstPart,
      secondPart,
      thirdPart,
      firstPartTv,
      secondPartTv,
      thirdPartTv,
    };
  };

  const {
    firstPart,
    secondPart,
    thirdPart,
    firstPartTv,
    secondPartTv,
    thirdPartTv,
  } = divideFilms(films, tv);

  return (
    <div className="mt-[570px] px-6 overflow-x-hidden">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="mb-6 mr-0 opacity-0 -translate-x-[500px] filmsCard"
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
        {firstPart.map((film) => (
          <SwiperSlide
            key={film.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
              overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`Imagem ${film.title}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {film.title}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(film.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/film/${film.id}`}>
                      <CgMoreO
                        size={30}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="absolute top-6 left-0.5"
                  >
                    Ver mais
                  </TooltipContent>
                </Tooltip>

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

                <HoverCard openDelay={100}>
                  <HoverCardTrigger asChild>
                  <button className="cursor-pointer">
                      <BiSolidLike
                        size={35}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
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
                  </HoverCardContent>
                </HoverCard>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="mb-6 mr-0 opacity-0 -translate-x-[500px] filmsCard"
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
        {secondPart.map((film) => (
          <SwiperSlide
            key={film.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
            overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`Imagem ${film.title}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {film.title}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(film.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/film/${film.id}`}>
                      <CgMoreO
                        size={30}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="absolute top-6 left-0.5"
                  >
                    Ver mais
                  </TooltipContent>
                </Tooltip>

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

                <HoverCard openDelay={100}>
                  <HoverCardTrigger asChild>
                    <button className="cursor-pointer">
                      <BiSolidLike
                        size={35}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
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
                  </HoverCardContent>
                </HoverCard>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{ clickable: true }}
        className="mb-6 mr-0 opacity-0 -translate-x-[500px] filmsCard"
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
        {thirdPart.map((film) => (
          <SwiperSlide
            key={film.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
            overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`Imagem ${film.title}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {film.title}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(film.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/film/${film.id}`}>
                      <CgMoreO
                        size={30}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="absolute top-6 left-0.5"
                  >
                    Ver mais
                  </TooltipContent>
                </Tooltip>

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

                <HoverCard openDelay={100}>
                  <HoverCardTrigger asChild>
                  <button className="cursor-pointer">
                      <BiSolidLike
                        size={35}
                        style={{ color: "#ef4444" }}
                        className="hover:opacity-80"
                      />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent
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
                  </HoverCardContent>
                </HoverCard>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <TvFilms
        tv={tv}
        firstPartTv={firstPartTv}
        secondPartTv={secondPartTv}
        thirdPartTv={thirdPartTv}
      />
    </div>
  );
};

export default CardsFilms;
