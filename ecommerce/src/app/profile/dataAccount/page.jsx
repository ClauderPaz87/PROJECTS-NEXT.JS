"use client";
import UpdateEmail from "@/components/profile/updateEmail";
import UpdateNumber from "@/components/profile/updateNumber";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const Page = () => {
  const { user } = useUser();
  const [active, setActive] = useState(false);
  const [activeNumber, setActiveNumber] = useState(false);

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
    <div className="mt-8">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <p className="font-medium text-2xl">Dados da Conta</p>
        </div>
        <div className="mt-4 w-full flex flex-col gap-3.5 justify-center items-center">
          <Card className="w-3xl p-1 rounded-sm">
            <CardContent className="p-3 flex flex-col gap-9">
              <div className="flex flex-col border-b border-b-zinc-300 h-18">
                <p className="text-light">E-mail</p>
                <p className="text-sm text-zinc-500">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <div>
                <Button
                  variant={"none"}
                  onClick={() => setActive(true)}
                  className="bg-blue-200 text-blue-500 hover:duration-300 hover:opacity-90 cursor-pointer"
                >
                  Alterar
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="w-3xl p-1 rounded-sm">
            <CardContent className="p-3 flex flex-col gap-9">
              <div className="flex flex-col border-b border-b-zinc-300 h-18">
                <p className="text-light">Número de telefone</p>
                <p className="text-sm text-zinc-500">
                  {user.primaryPhoneNumber?.phoneNumber}
                </p>
              </div>
              <div>
                <Button
                  variant={"none"}
                  onClick={() => setActiveNumber(true)}
                  className="bg-blue-200 text-blue-500 hover:duration-300 hover:opacity-90 cursor-pointer"
                >
                  Alterar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <UpdateEmail active={active} setActive={setActive} />
      <UpdateNumber active={activeNumber} setActive={setActiveNumber}/>
    </div>
  );
};

export default Page;
