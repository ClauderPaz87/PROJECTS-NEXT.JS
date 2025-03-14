'use client'
import { IoIosPersonAdd } from "react-icons/io";
import { GiPizzaCutter } from "react-icons/gi";
import { usePlatformUsers } from "../../store/PlatformUsers";

const UserAdmin = () => {
  const {countUser,countAdmin} = usePlatformUsers()

  return (
    <div className="w-72 h-72 absolute right-16 top-24 mt-1">
      <div className="text-white bg-users-modal w-40 h-28 p-2 rounded-sm absolute right-36 top-1">
        <p className="font-semibold text-5xl ml-1">{countUser}</p>
        <p className="mt-3 ml-1">Usuarios</p>
        <p className="absolute top-2 right-2">
            <IoIosPersonAdd className="text-stone-400 hover:scale-105 duration-700 hover:-translate-x-1" size={100}/>
        </p>
      </div>
      <div className="text-white bg-users-modal-admin w-40 h-28 p-2 rounded-sm absolute left-44 top-1">
        <p className="font-semibold text-5xl ml-1">{countAdmin}</p>
        <p className="mt-3 ml-1 z-50 relative ">Administradores</p>   
        <p className="absolute top-2 right-2 z-0">
            <GiPizzaCutter className="text-stone-400 hover:scale-105 duration-700 hover:-translate-x-1" size={100}/>
        </p>
      </div>
    </div>
  );
};

export default UserAdmin;
