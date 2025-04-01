'use client'
import { useState, useEffect } from "react";
import { useTwitterStore } from "@/store/TwitterStore";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import imgProfile from "../../../../public/image_profile.png";
import { Button } from "@/components/ui/button";
import { Calendar, Verified } from "lucide-react";
import Link from "next/link";
import DialogProfile from "@/components/Twitter/Profile/DialogProfile";

const Page = () => {
  const { user } = useUser();
  const { tweets, openDialog } = useTwitterStore();
  const [profileImage, setProfileImage] = useState(user?.imageUrl || imgProfile);
  const [bio,setBio] = useState("")

  useEffect(() => {
    if (user) {
      setProfileImage(user.imageUrl);
    }
  }, [user?.imageUrl]);

  const btnSetting = () => {
    openDialog(true);
  };

  return (
    <div className="flex flex-col p-5 w-[85vw] sm:w-full lg:w-[45vw] border-l border-l-zinc-600 
    border-r border-r-zinc-600 min-h-screen">
      <div>
        <p className="font-medium text-lg text-white">Profile</p>
        <p className="text-zinc-500 text-sm">{tweets ? `${tweets.length} postagem` : "0 postagens"}</p>
      </div>
      <div className="mt-2.5 bg-gray-800 border-sm w-full h-52 z-50">
        <Image src={profileImage} alt={`image are ${user?.firstName}`} width={700} height={100}
        className="rounded-full w-32 h-32 relative top-32 left-5 border-2 border-slate-900"/>
      </div>
      <div className="flex justify-end w-full mt-1.5">
        <Button onClick={btnSetting} className="rounded-full w-36 cursor-pointer bg-accent-foreground text-white border border-zinc-500" variant={"none"}>
            Set up profile
        </Button>
      </div>
      <div className="flex flex-col mt-3.5 ml-6">
        <div className="flex">
            <p className="text-white text-lg h-7">{user?.firstName} {user?.lastName}</p>
            <Link href={"#"} className={`flex w-36 text-white text-sm bg-accent-foreground 
            rounded-full border border-zinc-500 h-auto items-center justify-center ml-2.5`}>
                <span className="mr-1.5"><Verified className="text-blue-500 w-4 h-4"/></span>
                Seja Verificado
            </Link>
        </div>
        <p className="text-zinc-500 text-sm">@{user?.firstName}{Math.floor(Math.random()*5000)}</p>
        <div className="mt-2.5">
            <p className="text-white text-sm">{bio}</p>
        </div>
        <p className="mt-3.5 text-zinc-500 text-sm flex">
            <span className="mr-1.5"><Calendar className="text-zinc-500 w-4 h-4"/></span>
            {`Entrou em ${new Date(user?.createdAt).toLocaleString()}`}
        </p>
        <div className="gap-5 flex mt-3">
            <p className="text-zinc-500 font-medium">
                <span className="text-white mr-1">0</span>
                Seguindo
            </p>
            <p className="text-zinc-500 font-medium">
                <span className="text-white mr-1">0</span>
                Seguidores
            </p>
        </div>
      </div>
      <DialogProfile setProfileImage={setProfileImage} setBio={setBio} />
    </div>
  );
};

export default Page;
