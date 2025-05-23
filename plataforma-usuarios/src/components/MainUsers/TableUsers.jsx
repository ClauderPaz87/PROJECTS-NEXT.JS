"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePlatformUsers } from "../../store/PlatformUsers";
import avatar5 from "../../../public/avatar5.png";
import { useEffect } from "react";

const TableUsers = () => {
  const { deleteUsers, users, setEditingUser,fetchUsers } = usePlatformUsers();
  const router = useRouter();

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  
  

  const editUser = (user) => {
    setEditingUser(user);
    router.push(`/editUser/${user}`);
  };

  return (
    <div className="flex justify-center items-start mt-12 md:w-full md:pr-5 md:pl-60">
      <div className="bg-white border-t-4 border-zinc-300 w-[90vw] rounded-md shadow-md 
      lg:w-full md:w-[65vw] ">
        <p className="p-2 text-xl ml-2">Lista de Usuários</p>
          <table className="w-full mt-2 table-auto">
            <thead className="">
              <tr>
                <th className="w-12 pr-2">Foto</th>
                <th className="pr-0 lg:pr-2">Nome</th>
                <th className="pr-6 lg:pr-0">Email</th>
                <th className="pr-3 lg:pl-5">Admin</th>
                <th className="w-16 pr-2 lg:pr-18">Criado em</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className="bg-users-bg-tbody">
              {users.map((user) => (
                <tr key={user.id} className="border-b border-zinc-400 h-14">
                  <td className="pl-2 h-12">
                    {user.image ? (
                      <img
                        className="rounded-full h-9 w-9"
                        src={URL.createObjectURL(user.image)}
                        alt=""
                      />
                    ) : (
                      <Image className="rounded-full h-9 w-9" src={avatar5} alt="Imagem Padrão"/>
                    )}
                  </td>
                  <td className="pl-6 w-24">{user.name}</td>
                  <td className="w-16 pl-4 lg:w-24 lg:pl-7">{user.email}</td>
                  <td className="pl-4 lg:pl-12 lg:pr-7 md:pl-9 sm:pl-9 w-36">
                    {user.admin === true ? "Sim" : "Não"}
                  </td>
                  <td className="pl-2 w-40">{user.date}</td>
                  <td className="pl-4 lg:pl-12 w-40">
                    <button
                      onClick={() => editUser(user.id)}
                      className="text-white font-medium text-sm bg-users-background-header h-6 w-12 px-0.5 mr-1"
                      type="button"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteUsers(user.id)}
                      className="text-white font-medium text-sm bg-red-600 h-6 w-12 px-0.5"
                      type="button"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default TableUsers;
