'use client'
import { IoIosPersonAdd } from "react-icons/io";
import { GiPizzaCutter } from "react-icons/gi";
import { usePlatformUsers } from "../../store/PlatformUsers";

const UserAdmin = () => {
  const {countUser,countAdmin} = usePlatformUsers()

  return (
    <div className="flex gap-3 w-full lg:w-[350px] lg:h-28 lg:gap-1.5 lg:px-0 md:justify-center md:pl-56">
      <div className="grid grid-cols-2 text-white bg-users-modal w-80 h-28 p-2 rounded-sm md:w-full">
        <div>
          <p className="font-semibold text-5xl ml-1">{countUser}</p>
          <p className="mt-3 ml-1">Usuarios</p>
        </div>
        <div>
          <p className="flex justify-end z-0">
              <IoIosPersonAdd className="text-stone-400 hover:scale-105 duration-700 hover:-translate-x-1" size={100}/>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 text-white bg-users-modal-admin w-80 h-28 p-2 rounded-sm md:w-full ">
        <div>
          <p className="font-semibold text-5xl ml-1">{countAdmin}</p>
          <p className="mt-3 ml-1 z-50 relative ">Administradores</p>
        </div>
        <div className="">
          <p className="flex justify-end z-0">
              <GiPizzaCutter className="text-stone-400 hover:scale-105 duration-700 hover:-translate-x-1" size={100}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
