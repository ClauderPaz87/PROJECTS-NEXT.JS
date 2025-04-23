import { Swiper, SwiperSlide } from "swiper/react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { CgMoreO } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiSolidDislike, BiSolidHeart, BiSolidLike } from "react-icons/bi";
import { Card } from "../ui/card";
import Image from "next/image";
import { useFilmsStore } from "@/store/FilmsStore";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useRef } from "react";
import gsap from "gsap";

const TvFilms = ({ firstPartTv, secondPartTv, thirdPartTv }) => {
  const { listFilms, removeList, starsRaiting, like, love, dislike } =
    useFilmsStore();
  const likeRef = useRef(null);
  const dislikeRef = useRef(null);
  const loveRef = useRef(null);

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
    <div>
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
        {firstPartTv.map((tv) => (
          <SwiperSlide
            key={tv.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
              overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={`Imagem ${tv.name}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {tv.name}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(tv.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/tv/${tv.id}`}>
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
                      {tv.disabledBtn ? (
                        <span onClick={() => removeList(tv.id)}>
                          <FaCheck className="hover:opacity-90" />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            listFilms(tv.id, tv.poster_path, tv.name,tv.mediaType)
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
                    {tv.disabledBtn ? "Remover da lista" : "Adicionar a lista"}
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
        {secondPartTv.map((tv) => (
          <SwiperSlide
            key={tv.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
              overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={`Imagem ${tv.name}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {tv.name}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(tv.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/tv/${tv.id}`}>
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
                      {tv.disabledBtn ? (
                        <span onClick={() => removeList(tv.id)}>
                          <FaCheck className="hover:opacity-90" />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            listFilms(tv.id, tv.poster_path, tv.name,tv.mediaType)
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
                    {tv.disabledBtn ? "Remover da lista" : "Adicionar a lista"}
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
        {thirdPartTv.map((tv) => (
          <SwiperSlide
            key={tv.id}
            className="hover:!z-100 !overflow-visible group cursor-pointer gap-2 flex"
          >
            <Card
              className="cardFilms relative w-60 h-80 border-0 cursor-pointer bg-accent-foreground 
              overflow-visible transition-all duration-500 group-hover:-translate-y-12 z-0 p-0"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={`Imagem ${tv.name}`}
                width={300}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:blur-[5px]"
              />

              <div className="absolute bottom-0 left-0 w-full flex flex-col gap-3 p-[20px] z-10 transition-all duration-500">
                <p className="text-[#e78300] uppercase text-[20px] tracking-widest leading-6">
                  {tv.name}
                </p>
                <p className="text-yellow-500 flex gap-2.5 text-2xl font-bold">
                  {starsRaiting(tv.vote_average)}
                </p>
              </div>

              <div className="flex relative bottom-3.5 left-5 gap-7 z-10 bg-opacity-0">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer">
                    <Link href={`/tv/${tv.id}`}>
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
                      {tv.disabledBtn ? (
                        <span onClick={() => removeList(tv.id)}>
                          <FaCheck className="hover:opacity-90" />
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            listFilms(tv.id, tv.poster_path, tv.name,tv.mediaType)
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
                    {tv.disabledBtn ? "Remover da lista" : "Adicionar a lista"}
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
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TvFilms;
