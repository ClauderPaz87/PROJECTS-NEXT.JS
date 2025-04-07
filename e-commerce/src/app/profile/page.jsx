"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { Dock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="h-[85vh] flex items-center justify-center">
        <svg
          className="text-gray-300 animate-spin"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
        >
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="mt-12 w-full">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <Card className="w-3xl p-1">
            <CardContent className="flex gap-10 h-auto items-center p-2">
              <div className="pl-4">
                <Image
                  src={user.imageUrl}
                  alt="Image"
                  width={700}
                  height={100}
                  className="rounded-full w-24 h-24"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-xl">{user.firstName}</p>
                <p className="text-lg">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Card className="w-3xl p-1">
            <CardContent className="p-7 flex flex-col gap-9">
              <Link
                href={"/profile/dataPersonal"}
                className="flex gap-5 h-auto items-center w-full"
              >
                <div className="rounded-full p-6 border">
                  <span className="rounded-full w-20 h-20">
                    <Dock className="text-blue-400 w-8 h-8" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Informações Pessoais</p>
                  <p className="text-sm text-zinc-400">
                    Informações do seu documento e nome de preferência
                  </p>
                </div>
              </Link>

              <Link
                href={"profile/dataAccount"}
                className="flex gap-5 h-auto items-center w-full"
              >
                <div className="rounded-full p-6 border">
                  <span className="rounded-full w-20 h-20">
                    <User className="text-blue-400 w-8 h-8" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg">Dados da sua conta</p>
                  <p className="text-sm text-zinc-400">
                    Dados que representam a conta do Mercado Livre
                  </p>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
