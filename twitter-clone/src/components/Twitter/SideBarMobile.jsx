'use client'
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { BellRing, Compass, Home, MessageSquare, MoreHorizontalIcon, ScrollText, User2Icon, Users2, VerifiedIcon } from "lucide-react";
import X from "../../../public/image_logoX.jpg";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const SideBarMobile = () => {
  const {user} = useUser()
  const { signOut } = useClerk()
  
  const btnLogout = ()=>{
    signOut()
  }

  return (
    <div>
      <aside
        className="fixed inset-y-0 left-0 sm:flex z-10 md:hidden sm:w-16
        sm:border-r bg-slate-950"
      >
        <nav className="flex fixed bottom-5 sm:flex-col sm:py-5 items-center gap-6
        bg-slate-950 sm:px-2 h-16 sm:h-full sm:relative w-full justify-center pl-3">
          <TooltipProvider>
            <Link
              href="#"
              className="w-8 h-8 shrink-0 items-center justify-center bg-primary
              text-primary-foreground rounded-full hidden sm:flex"
            >
              <Image src={X} alt="Logo" width={700} height={100}
              className="w-12 h-12 text-blue-500" />
              <span className="sr-only">Logo twitter</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/twitter/home"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="w-14 h-14 text-white" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Home
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Compass className="w-14 h-14 text-white" />
                  <span className="sr-only">Explore</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Explore
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <BellRing className="w-14 h-14 text-white" />
                  <span className="sr-only">Notification</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Notification
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MessageSquare className="w-14 h-14 text-white" />
                  <span className="sr-only">Messages</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Messages
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ScrollText className="w-14 h-14 text-white" />
                  <span className="sr-only">Lists</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Lists
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users2 className="w-14 h-14 text-white" />
                  <span className="sr-only">Communities</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Communities
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <VerifiedIcon className="w-14 h-14 text-white" />
                  <span className="sr-only">Verified</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Verified
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/twitter/profile"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <User2Icon className="w-14 h-14 text-white" />
                  <span className="sr-only">Profile</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Profile
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-6 h-6 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MoreHorizontalIcon className="w-14 h-14 text-white" />
                  <span className="sr-only">More</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                More
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="mt-14" asChild>
              <div className="flex h-full items-center mt-2.5 md:pr-5 lg:pr-0 lg:pl-8">
              <span
                className="text-xl text-zinc-400 font-medium cursor-pointer"
              >
                <Popover>
                  <PopoverTrigger asChild className="pb-12 sm:pb-0">
                    <button className="cursor-pointer" 
                    variant="outline">
                      <Image src={user.imageUrl} width={700} height={100} alt="logo" 
                      className="w-10 h-10 rounded-full"/>
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
              </TooltipTrigger>
              <TooltipContent side="right">
                Accounts
              </TooltipContent>
            </Tooltip>

          </TooltipProvider>
        </nav>
      </aside>
    </div>
  )
}

export default SideBarMobile