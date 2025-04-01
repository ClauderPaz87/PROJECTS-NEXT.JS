import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { BellRing, Compass, Twitter, Home, MessageSquare, MoreHorizontalIcon, ScrollText, User2Icon, Users2, VerifiedIcon } from "lucide-react";
import profile from "../../../public/image_profile.png";
import Image from "next/image";

const SideBarMobile = () => {
  return (
    <div>
      <aside
        className="fixed inset-y-0 left-0 flex z-10 md:hidden w-16
        border-r bg-slate-950"
      >
        <nav className="flex flex-col items-center gap-6 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex w-8 h-8 shrink-0 items-center justify-center bg-primary
                    text-primary-foreground rounded-full"
            >
              <Twitter className="w-8 h-8 text-blue-500" />
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
                <Link
                  href="#"
                  className="flex w-11 h-11 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Image src={profile} alt="Image profile" className="w-10 h-10" width={300}/>
                  <span className="sr-only">Accounts</span>
                </Link>
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