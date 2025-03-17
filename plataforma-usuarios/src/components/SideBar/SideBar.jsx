import { IoPersonAdd } from "react-icons/io5";
import { TbPointFilled } from "react-icons/tb";
import Image from "next/image";
import avatar5 from "../../../public/avatar5.png"


const SideBar = () => {
  return (
    <nav className="hidden md:flex md:flex-col h-[150vh] md:h-[180vh] absolute top-14 w-56  bg-users-sidebar">
        <div className="flex p-4">
           
            <div className="ml-7 relative">
                <Image className="w-11 h-11 rounded-full absolute right-24 mr-6" src={avatar5} alt="Imagem padrão"/>
                <p className="text-white font-semibold ml-6">Usuário Junior</p>
                <p className="text-green-700 ml-5 flex items-center mt-1"><TbPointFilled size={20}/>
                <span className="text-white font-medium text-xs ">Online</span>
                </p>
            </div>
        </div> 
        <div className="mt-2 max-w-full bg-users-menu-sidebar p-2 h-10">
            <p style={{color:"#4b646f"}} className="ml-3 ">MENU</p>
        </div>
        <div className="flex p-3 max-w- border-l-4 border-users-background-header bg-users-person-sidebar items-center">
            <p><IoPersonAdd className="text-white ml-2"/></p>
            <p className="text-white ml-3">Usuários</p>
        </div>
       
    </nav>
  )
}

export default SideBar