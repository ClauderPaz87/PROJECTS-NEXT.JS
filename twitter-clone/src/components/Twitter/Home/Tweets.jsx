import Image from "next/image";
import profile from "../../../../public/image_profile.png";
import {
  ChartColumnDecreasing,
  Download,
  Heart,
  MessageSquare,
  MoreHorizontalIcon,
  RefreshCcw,
} from "lucide-react";
import { useTwitterStore } from "@/store/TwitterStore";
import { useUser } from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import DialogReploy from "./DialogReploy";
import Link from "next/link";

const Tweets = () => {
  const { tweets, clickLike, clickCommenter, likeComment } = useTwitterStore();
  const { user } = useUser();
  const sortedTweets = [...tweets].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="mt-10 ">
      {sortedTweets.flatMap((tweet) =>
        tweet.comments.map((comment) => (
          <div
            key={comment.id}
            className="flex flex-col border-b border-b-zinc-700 mt-2"
          >
            <div className="flex justify-between">
              <div className="flex gap-3 h-auto items-center">
                <Image
                  src={comment ? comment.image : profile}
                  alt="Image"
                  width={300}
                  height={100}
                  className="w-12 h-12 mr-2 rounded-full"
                />
                <p className="text-zinc-100">{comment.name}</p>
                <p className="text-sm text-zinc-400">@{comment.name} - 2m</p>
              </div>
              <div className="flex h-auto items-center">
                <button type="button" className="cursor-pointer">
                  <span>
                    <MoreHorizontalIcon className="text-blue-400" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-zinc-500 pl-17 mb-3">
                Replying to
                <span className="text-blue-500 hover:underline">
                  @{comment.name}
                </span>
              </p>
            </div>

            <div className="pl-17">
              <p className="text-zinc-100 break-words whitespace-normal">
                {comment.post}
              </p>
            </div>
            {comment.tweetImage && (
              <div className="mt-4">
                <Image
                  src={comment.tweetImage}
                  alt="Comment image"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-md mt-2"
                />
              </div>
            )}
            {comment.play && (
              <div className="mt-4">
                <video
                  src={comment.play}
                  alt="Comment play"
                  width={400}
                  height={200}
                  className="w-full h-auto rounded-md mt-2"
                />
              </div>
            )}

            <div className="flex mt-2.5 pl-10 md:pl-17 mb-2 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-20">
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
                      className={`hover:text-red-700 duration-300 ${
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
        ))
      )}
      {sortedTweets.map((tweet) => (
        <div
          key={tweet.id}
          className={`flex flex-col gap-2 ${
            tweet.comments.length ? "mt-4" : "mt-2"
          }
        border-b border-b-zinc-700`}
        >
          <div className="flex justify-between">
            <div className="flex gap-3 h-auto items-center">
              <Link href={`/twitter/tweet/${tweet.id}`}>
                <Image
                  src={user ? user.imageUrl : profile}
                  alt="Image"
                  width={300}
                  height={100}
                  className="w-12 h-12 mr-2 rounded-full"
                />
              </Link>

              <Link
                href={`/twitter/tweet/${tweet.id}`}
                className="text-zinc-100"
              >
                {tweet.name}
              </Link>
              <p className="text-sm text-zinc-400">@{tweet.name} - 2m</p>
            </div>
            <div className="flex h-auto items-center">
              <button type="button" className="cursor-pointer">
                <span>
                  <MoreHorizontalIcon className="text-blue-400" />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-2 pl-17 w-full h-full">
            <p className="text-zinc-100 break-words whitespace-normal">
              {tweet.post}
            </p>
          </div>
          {tweet.tweetImage && (
            <Image
              src={tweet.tweetImage}
              alt="Tweet image"
              width={150}
              height={100}
              className="w-full h-96 rounded-md mt-2"
            />
          )}
          {tweet.tweetVideo && (
              <div className="mt-4">
                 <video
                  src={tweet.tweetVideo}
                  controls
                  className="w-full h-auto rounded-md mt-2"
                />
              </div>
          )}

          <div className="flex mt-8 pl-10 md:pl-17 gap-10 sm:gap-20 md:gap-16 lg:gap-10 xl:gap-20">
            <Tooltip>
              <TooltipTrigger
                className="gap-1.5 flex h-auto items-center"
                asChild
              >
                <button
                  onClick={() => clickCommenter(tweet.id, true)}
                  type="button"
                  className="cursor-pointer"
                >
                  <MessageSquare className="text-zinc-500 hover:text-blue-400 duration-300" />
                  <span className="text-zinc-500 text-sm">
                    {tweet.comments.length}
                  </span>
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
                  onClick={() => clickLike(tweet.id)}
                  type="button"
                  className="cursor-pointer"
                >
                  <Heart
                    className={`hover:text-red-700 duration-300 ${
                      tweet.like ? "text-red-700" : "text-zinc-500"
                    } 
                        ${
                          tweet.like ? "fill-red-400" : "fill-accent-foreground"
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
          <DialogReploy tweet={tweet} />
        </div>
      ))}
    </div>
  );
};

export default Tweets;
