'use client'
import { Button } from "@/components/ui/button";
import finance from "../../public/imagem_finance.jpg"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-slate-900 text-white h-screen">

      <div className="flex justify-center h-full items-center ">
        <div className="flex flex-col pr-20">
          <div className="flex justify-start w-72">
            <p className="font-bold text-xl"><span className="text-red-600">Nu</span> Kenzie</p>
          </div>
          <div className="flex justify-start w-72 mt-4">
            <p className="text-4xl font-bold leading-14">Centralize o controle das suas finanças</p>
          </div>
          <div className="flex justify-start w-72 mt-4">
            <p className="text-sm font-extralight">De forma rápida e segura</p>
          </div>
          <div className="flex justify-start w-72 mt-4">
            <Button
            onClick={()=>{router.push('/finance')}} 
            variant={"none"} className="bg-pink-600 w-full hover:-translate-y-1.5 duration-300 cursor-pointer">
              Iniciar
            </Button>
          </div>
        </div>
        <div className="w-96 h-96">
            <Image src={finance} alt="Imagem Financeira" width={700} height={700} className="w-full h-full object-cover"/>
        </div>
      </div>

    </div>
  );
}
