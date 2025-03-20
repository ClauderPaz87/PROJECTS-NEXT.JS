"use client";
import { useRef } from "react";
import OptionsCountry from "./OptionsCountry";
import { usePlatformUsers } from "../../store/PlatformUsers";
import { toast } from "react-toastify";
import UserAdmin from "./UserAdmin";
import api from "@/lib/api";

const FormsUsers = () => {
  const {
    addUsers,
    country,
    genderSelect,
    gender,
    adminSelect,
    admin,
    imageFile,
    image,
    updateCountUser,
    updateCountAdmin,
  } = usePlatformUsers();

  const inputName = useRef("");
  const inputDate = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(
      !inputName.current.value || 
      !inputDate.current.value || 
      !inputEmail.current.value || 
      !inputPassword.current.value || 
      !country){
        return toast.error("Preencha todos os campos",{
          autoClose: 2000,
          pauseOnHover:false,
          closeOnClick:true,
        })
      } 
    
    await api.post('/users',{
      name: inputName.current.value,
      country: country,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      birthDate: inputDate.current.value,
      isAdmin : admin,
    })
    

    addUsers(
      inputName.current.value,
      gender,
      inputDate.current.value,
      country,
      inputEmail.current.value,
      inputPassword.current.value,
      image,
      admin
    );

    toast.success("Usuário Criado com sucesso",{
      autoClose: 2000,
      pauseOnHover:false,
      closeOnClick:true,
    })

    inputName.current.value = '' 
    inputDate.current.value = '' 
    inputEmail.current.value = '' 
    inputPassword.current.value = '' 

  };

  return (
      <div 
      className="flex flex-col justify-center">

        <div className="mt-12 px-4">
          <UserAdmin/>
        </div>

        <div className="flex mt-8 md:mt-10 md:justify-center md:pl-60 lg:mt-4 lg:justify-end lg:p-0 px-4">
          <form
          className="pt-3 pl-3 pb-3 w-full bg-white shadow-sm rounded-sm border-t-4 border-users-modal
          xl:w-[26vw] lg:w-full lg:mr-3.5 md:w-[65vw] sm:w-full"
          onSubmit={handleSubmit}>
            <div className="border-b border-zinc-200 w-full">
              <p className="text-xl pb-2">Novo Usúario</p>
            </div>
            <div className="mt-2 pr-4">
              <p className="font-semibold pb-2">Nome</p>
              <input
                ref={inputName}
                className="outline-sky-600 border border-zinc-200 p-1 w-full"
                placeholder="Digite o nome do usuário"
                type="text"
              />
            </div>
            <div className="mt-4">
              <div>
                <p className="font-semibold pb-2">Gênero</p>
              </div>
              <div className="flex flex-col mt-3">
                <label>
                  <input
                    className="w-5 mb-3 mr-1"
                    value="M"
                    onChange={(e) => genderSelect(e.target.value)}
                    type="radio"
                    checked={gender === "M"}
                  />
                  Masculino
                </label>
                <label>
                  <input
                    onChange={(e) => genderSelect(e.target.value)}
                    className="w-5 mr-1"
                    value="F"
                    type="radio"
                    checked={gender === "F"}
                  />
                  Feminino
                </label>
              </div>
            </div>
            <div className="mt-3 pr-4">
              <p className="font-semibold pb-2">Nascimento</p>
              <input
                min="2006/02/24"
                max="2025/02/24"
                ref={inputDate}
                className="outline-sky-600 border border-zinc-200 p-1 mt-2 w-full"
                type="date"
              />
            </div>
            <div className="pr-4 mt-3">
              <p className="font-semibold pb-2">País</p>
              <OptionsCountry />
            </div>
            <div className="mt-3 pr-4">
              <p className="font-semibold pb-2">Email</p>
              <input
                ref={inputEmail}
                placeholder="Digite seu email"
                className="outline-sky-600 border border-zinc-200 p-1 w-full"
                type="email"
              />
            </div>
            <div className="mt-3 pr-4">
              <p className="font-semibold pb-2">Senha</p>
              <input
                ref={inputPassword}
                placeholder="Digite sua senha"
                className="outline-sky-600 border border-zinc-200 p-1 w-full"
                type="password"
              />
            </div>
            <div className="mt-3 pr-4">
              <p className="font-semibold pb-1">Foto</p>
              <input
                onChange={(e) => imageFile(e.target.files[0])}
                className="cursor-pointer"
                type="file"
              />
            </div>
            <div className="mt-3 pr-4 border-b border-zinc-200">
              <label>
                <input
                  onChange={(e) => adminSelect(e.target.checked)}
                  className="w-5 mr-1 mt-2 mb-8"
                  type="checkbox"
                />
                Administrador
              </label>
            </div>
            <div className="mt-3 pr-6">
              <button
                onClick={()=>{
                  if( !inputName.current.value ||
                    !inputDate.current.value ||
                    !inputEmail.current.value ||
                    !inputPassword.current.value ||
                    !country) return
                  if(admin){
                    updateCountAdmin()
                    updateCountUser()
                  }
                  else{
                    updateCountUser()
                  }
                }}
                className="text-white bg-users-modal h-9 w-20 border border-x-users-logo-color rounded-md"
                type="submit"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>

      </div>
  );
};

export default FormsUsers;
