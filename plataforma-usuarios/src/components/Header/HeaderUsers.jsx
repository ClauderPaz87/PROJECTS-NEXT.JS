'use client'
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import avatar5 from "../../../public/avatar5.png"

const HeaderUsers = () => {

  return (
    <div>
      <header className="flex flex-col max-w-full relative bg-users-background-header md:flex-row">
          <div className="bg-users-logo-color p-3 w-full flex justify-center md:w-56">
              <p className="text-white font-normal text-xl">Modelo da Hcode</p>
          </div>
          <div className="ml-2 flex align-middle h-14 md:h-14">
            <button className="hover:bg-users-logo-color w-14 duration-200">
              <FaBars className="text-white ml-5"/>
            </button>
          </div>
          <div 
            className="
            flex max-w-full p-2 duration-200 h-14 hover:bg-users-logo-color items-center absolute right-4 top-12 md:h-full md:top-0
            ">
            <Image src={avatar5} alt="Imagem Padrão" className="w-9 rounded-full h-9 mr-2"/>
            <p className="text-white font-semibold">Usuário Junior</p>
          </div>
      </header>
    </div>
  )
}

export default HeaderUsers