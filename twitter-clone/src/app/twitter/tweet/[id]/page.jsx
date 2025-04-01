"use client";
import {Tooltip,TooltipContent,TooltipTrigger,} from "@/components/ui/tooltip";
import { useTwitterStore } from "@/store/TwitterStore";
import { useUser } from "@clerk/nextjs";
import {ChartColumnDecreasing, Download,Heart,MessageSquare,MoreHorizontalIcon,RefreshCcw,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../../../../public/image_profile.png";
import { useParams } from "next/navigation";
import DialogUnique from "@/components/Twitter/Home/DialogUnique";

const page = () => {
  const params = useParams()
  const { tweets, clickLike, likeComment,clickCommenterUnique } = useTwitterStore();
  const { user } = useUser();
  const tweetId = tweets.find((tweet) => tweet.id === params.id);
  const date = new Date();
  const formattedDate = date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  });

  return (
    <div>
      <div className="mt-5 w-full lg:w-[43vw] pb-4 p-5 flex flex-col">
        <div key={params.id} className={`flex flex-col gap-2`}>
          <div className="flex justify-between">
            <div className="flex gap-3 h-auto items-center">
              <Link href={`/twitter/home`}>
                <Image
                  src={user ? user.imageUrl : profile}
                  alt="Image"
                  width={300}
                  height={100}
                  className="w-12 h-12 mr-2 rounded-full"
                />
              </Link>

              <Link href={`/twitter/home`} className="text-zinc-100">
                {tweetId.name}
              </Link>
              <p className="text-sm text-zinc-400">@{tweetId.name} - 2m</p>
            </div>
            <div className="flex h-auto items-center">
              <button type="button" className="cursor-pointer">
                <span>
                  <MoreHorizontalIcon className="text-blue-400" />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-2 pl-17">
            <p className="text-zinc-100 break-words whitespace-normal">
              {tweetId.post}
            </p>
          </div>
          <div className="flex mt-8 pl-17 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-20">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => clickCommenterUnique(tweetId.id, true)}
                  type="button"
                  className="cursor-pointer"
                >
                  <MessageSquare className="text-zinc-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Comment</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="cursor-pointer">
                  <RefreshCcw className="text-zinc-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Repost</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={() => clickLike(tweetId.id)}
                  type="button"
                  className="cursor-pointer"
                >
                  <Heart
                    className={`hover:text-red-700 ${
                      tweetId.like ? "text-red-700" : "text-zinc-500"
                    } 
                      ${
                        tweetId.like ? "fill-red-400" : "fill-accent-foreground"
                      }`}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent>Like</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="text-sm text-zinc-500 flex gap-3 cursor-pointer"
                >
                  <ChartColumnDecreasing className="text-zinc-500" />
                  24.000
                </button>
              </TooltipTrigger>
              <TooltipContent>View</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="cursor-pointer">
                  <Download className="text-zinc-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>Share</TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="mt-5 w-full">
          {tweetId.comments.map((comment) => (
            <div key={comment.id} className="flex flex-col mt-2">
              <div className="flex h-6 items-center gap-2.5 text-white">
                <Image
                  src={user ? user.imageUrl : profile}
                  alt="Image"
                  width={300}
                  height={100}
                  className="w-10 h-10 mr-2 rounded-full"
                />
                <p>{user.firstName}</p>
              </div>
              <p className="pl-14 text-zinc-500 text-sm">@{user.firstName}</p>
              <div className="pl-14 mt-1">
                <p className="text-white">{comment.post}</p>
              </div>
              <div className="mt-4 pl-14">
                <p className="text-sm text-zinc-500">{formattedDate}</p>
              </div>
              <div className="flex mt-4 mb-2 pl-14 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-20">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="cursor-pointer">
                      <RefreshCcw className="text-zinc-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Repost</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => likeComment(comment.id)}
                      type="button"
                      className="cursor-pointer"
                    >
                      <Heart
                        className={`hover:text-red-700 ${
                          comment.like ? "text-red-700" : "text-zinc-500"
                        } 
                          ${
                            comment.like
                              ? "fill-red-400"
                              : "fill-accent-foreground"
                          }`}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Like</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="text-sm text-zinc-500 flex gap-3 cursor-pointer"
                    >
                      <ChartColumnDecreasing className="text-zinc-500" />
                      24.000
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>View</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" className="cursor-pointer">
                      <Download className="text-zinc-500" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Share</TooltipContent>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
        <DialogUnique tweet={tweetId}/>
      </div>
    </div>
  );
};

export default page;
