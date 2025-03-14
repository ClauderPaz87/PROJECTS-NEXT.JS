import { PiGreaterThanLight } from "react-icons/pi";
import { FaHome } from "react-icons/fa";

import TableUsers from "./TableUsers";
import FormsUsers from "./FormsUsers";
import UserAdmin from "../MainUsers/UserAdmin"
import SideBar from "../SideBar/SideBar";

const MainUsers = () => {
  return (
    <main className="flex w-full h-full">
      
      <div>
        <SideBar/>
      </div>

      <div className="flex relative p-2 mt-1 ml-2 h-12 w-full items-center">
        <p className="text-3xl">Usúarios</p>
        <p className="text-zinc-500 ml-4">Gerenciamento de Usuários do Sistema</p>
        <p className="absolute right-5 top-3 mt-1 text-sm flex items-center"><FaHome className="mr-2" size={14}/>Home <PiGreaterThanLight className="ml-3 mt-1" size={10}/> 
        <span className="font-light ml-4">Usuário</span>
        </p>
      </div>
      
      <div className="absolute left-60 top-24 right-96 mr-4 mt-2">
        <TableUsers />
      </div>

      <div>
        <UserAdmin className="relative"/>
      </div>

      <div className="">
        <FormsUsers/>
      </div>
    </main>
  );
};

export default MainUsers;
