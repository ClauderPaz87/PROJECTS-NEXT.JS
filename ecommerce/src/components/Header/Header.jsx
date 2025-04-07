"use client";
import { ArrowLeftToLine, Heart, SearchIcon, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import Link from "next/link";
import { useClerk, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useState } from "react";
import { useMarkeStore } from "@/store/MarketStore";

import DialogLogin from "./DialogLogin";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Header = () => {
  const [active, setActive] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const { productsCart,deleteProductLike,productsLike,setSearchTerm } = useMarkeStore();
 
  const btnSignOut = () => {
    signOut();
  };

  return (
    <div className="bg-[#FFE600] shadow-xs h-28 lg:h-20 w-full ">
      <div className="flex flex-col lg:flex-row items-center h-full justify-evenly">
        <form className="w-full lg:w-2xl flex ml-10 mt-2.5 lg:mt-0 lg:ml-0">
          <Input
             placeholder="Buscar produtos..."
             className="w-full bg-[white] rounded-xs shadow-sm h-11 focus:border-blue-400"
             onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="relative right-10 top-2.5 h-6 w-12">
            <SearchIcon className="text-zinc-400 border-l border-l-zinc-300 w-10" />
          </span>
        </form>
        <div className="flex flex-row lg:flex-none gap-14 h-full items-center">
          <div className="mr-2.5 sm:mr-10 md:mr-1.5 lg:mr-14 xl:mr-20">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/cart" className="relative inline-block">
                  <ShoppingCart
                    className="w-7 h-7 transition duration-200 hover:scale-110"
                    strokeWidth={2}
                  />
                  {productsCart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-white animate-pulseBadge">
                      {productsCart.length}
                    </span>
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom">Seu carrinho</TooltipContent>
            </Tooltip>
          </div>
          <div>
            {isSignedIn ? (
              <div>
                <Popover>
                  <PopoverTrigger className="flex h-auto items-center gap-2.5 cursor-pointer">
                    <Image
                      src={user.imageUrl}
                      alt="Image"
                      width={700}
                      height={100}
                      className="rounded-full w-12 h-12"
                    />
                    <p className="font-medium text-lg">{user.firstName}</p>
                  </PopoverTrigger>
                  <PopoverContent className="w-56 gap-4 p-0 flex flex-col">
                    <Link
                      href={"/profile"}
                      className="flex gap-3.5 h-auto items-center border-b border-b-zinc-300 pb-2 hover:bg-zinc-200
                        w-full hover:duration-300 pl-2.5 pt-2 "
                    >
                      <div>
                        <Image
                          src={user.imageUrl}
                          alt="Image"
                          width={700}
                          height={100}
                          className="rounded-full w-12 h-12"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-lg">{user.firstName}</p>
                        <p className="text-sm">Meu perfil</p>
                      </div>
                    </Link>
                    <Button
                      onClick={btnSignOut}
                      variant={"none"}
                      className="text-red-600 cursor-pointer"
                    >
                      Sair{" "}
                      <span>
                        <ArrowLeftToLine />
                      </span>
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <Button
                variant={"outline"}
                onClick={() => setActive(true)}
                className="cursor-pointer"
              >
                Fazer Login
              </Button>
            )}
          </div>

          <div>
            <Tooltip>
              <Popover>
                <TooltipTrigger>
                  <PopoverTrigger className="flex h-auto items-center gap-2.5 cursor-pointer">
                    <Button
                      variant={"ghost"}
                      className="relative p-2 rounded-full hover:bg-zinc-200 transition cursor-pointer"
                    >
                      <Heart className="text-zinc-700 w-5 h-5 hover:text-zinc-900 transition" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-80 p-0 rounded-xl border border-zinc-200 shadow-lg">
                    <div className="p-3 border-b border-zinc-200 bg-white rounded-t-xl">
                      <p className="font-semibold text-sm text-zinc-800">
                        Favoritos
                      </p>
                    </div>

                    <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent bg-white">
                      {productsLike.filter((p) => p.like).length === 0 ? (
                        <div className="p-4 text-zinc-500 text-sm italic text-center">
                          Nenhum produto nos favoritos
                        </div>
                      ) : (
                        productsLike
                          .filter((p) => p.like)
                          .map((p) => (
                            <div
                              key={p.id}
                              className="p-3 hover:bg-zinc-100 transition"
                            >
                              <div className="flex gap-3">
                                <Image
                                  src={p.img}
                                  alt={p.name}
                                  width={80}
                                  height={80}
                                  className="h-20 w-16 object-cover rounded-md border border-zinc-200"
                                />

                                <div className="flex flex-col justify-between">
                                  <p className="text-sm font-medium text-zinc-800 line-clamp-2">
                                    {p.name}
                                  </p>
                                  <p className="text-base text-zinc-700 font-semibold mt-1">
                                    R$ {p.price.toFixed(2)}
                                  </p>
                                  <p className="text-xs text-zinc-500">
                                    12x de R$ {(p.price / 12).toFixed(2)}
                                  </p>
                                  <button 
                                  onClick={()=>deleteProductLike(p.id)}
                                  className="text-blue-500 hover:underline text-xs mt-1 text-left cursor-pointer">
                                    Excluir
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))
                      )}
                    </div>
                  </PopoverContent>
                </TooltipTrigger>
                <TooltipContent>Favoritos</TooltipContent>
              </Popover>
            </Tooltip>
          </div>
        </div>
      </div>
      <DialogLogin active={active} setActive={setActive} />
    </div>
  );
};

export default Header;
