"use client";
import Image from "next/image";
import logo from "../../../public/image_logoX.jpg";
import profile from "../../../public/image_profile.png";
import { Button } from "../ui/button";
import { useClerk, useUser } from "@clerk/nextjs";
import {BellRing,Compass,Home,MessageSquare,MoreHorizontal,MoreHorizontalIcon,ScrollText,User2Icon,Users2,VerifiedIcon,} from "lucide-react";
import Link from "next/link";
import SideBarMobile from "./SideBarMobile";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const SideBar = () => {
  const { user } = useUser();
  const { signOut } = useClerk()

  const btnLogout = ()=>{
    signOut()
  }

  return (
    <div
      className="lg:w-[80vw] md:w-[30vw] md:flex justify-center min-h-screen"
    >
      <SideBarMobile />

      <div className="hidden font-medium text-white md:flex flex-col w-56 gap-5">
        <div className="flex justify-start h-16">
          <Image
            src={logo}
            alt="Logo-twitter"
            width={700}
            className="w-20 h-16"
          />
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <Home className="text-white" />
          </span>
          <Link href={"/twitter/home"}>
            <p className="text-white">Home</p>
          </Link>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <Compass className="text-white" />
          </span>
          <p>Explore</p>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <BellRing className="text-white" />
          </span>
          <p>Notifications</p>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <MessageSquare className="text-white" />
          </span>
          <p>Messages</p>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <ScrollText className="text-white" />
          </span>
          <p>Lists</p>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <Users2 className="text-white" />
          </span>
          <p>Communities</p>
        </div>
        <div className="flex justify-start">
          <span className="mr-3">
            <VerifiedIcon className="text-white" />
          </span>
          <p>Verified</p>
        </div>
        <Link href={'/twitter/profile'} className="flex justify-start">
          <span className="mr-3">
            <User2Icon className="text-white" />
          </span>
          <p>Profile</p>
        </Link>
        <div className="flex justify-start">
          <span className="mr-3">
            <MoreHorizontalIcon className="text-white" />
          </span>
          <p>More</p>
        </div>
        <div className="flex justify-start w-full">
          <Link
            href={'/twitter/home'}
            className="w-full"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-full p-5 w-full">
              Tweet
            </Button>
          </Link>
        </div>
        {user && (
          <div className="flex mt-2 w-60 h-20">
            <div className="flex w-32 h-full items-center">
              <Image
                src={user ? user.imageUrl : profile}
                alt="image"
                width={700}
                height={100}
                className="w-16 h-16"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2 h-full mt-4 ml-3.5">
              <p>{user.fullName}</p>
              <p className="text-sm text-zinc-400">{`@${
                user.firstName
              }${Math.floor(Math.random() * 1000)}`}</p>
            </div>
            <div className="flex h-full items-center mt-2.5 md:pr-5 lg:pr-0 lg:pl-8">
              <span
                className="text-xl text-zinc-400 font-medium cursor-pointer"
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="cursor-pointer" 
                    variant="outline">
                      <MoreHorizontal/>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-16 p-1 border-0 rounded-sm bg-slate-950">
                    <button
                    onClick={btnLogout}
                    className="text-white cursor-pointer">Logout</button>
                  </PopoverContent>
                </Popover>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
