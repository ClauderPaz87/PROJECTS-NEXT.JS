"use client";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter, useParams } from "next/navigation";
import { usePlatformUsers } from "@/store/PlatformUsers";
import OptionsCountry from "@/components/MainUsers/OptionsCountry";

const EditUser = () => {
  const router = useRouter();
  const params = useParams();
  
  const {
    editingUser,
    setEditingUser,
    editUser,
    gender,
    genderSelect,
    country,
    image,
    imageFile,
  } = usePlatformUsers();

  useEffect(() => {
    if (params.id) {
      setEditingUser(params.id);
    }
  }, [params.id, setEditingUser]);

  const inputName = useRef("");
  const inputDate = useRef("");
  const inputEmail = useRef("");
  const inputPassword = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputName.current.value ||
      !inputDate.current.value ||
      !inputEmail.current.value ||
      !inputPassword.current.value ||
      !country
    ) {
      return toast.error("Preencha todos os campos", {
        autoClose: 2000,
        pauseOnHover: false,
        closeOnClick: true,
      });
    }

    editUser(
      editingUser.id,
      inputName.current.value,
      gender,
      inputDate.current.value,
      country,
      inputEmail.current.value,
      inputPassword.current.value,
      image
    );

    router.push("/");
  };

  if (!editingUser) {
    router.push("/");
    return null;
  }

  return (
    <div
      style={{ width: "60vw" }}
      className="bg-white shadow-sm rounded-sm absolute top-20 right-40 border-t-4 border-users-modal"
    >
      <form className="pt-3 pl-3 pb-3" onSubmit={handleSubmit}>
        <div className="border-b border-zinc-200 w-full">
          <p className="text-xl pb-2">Editar Usúario</p>
        </div>

        <div className="mt-2 pr-4">
          <p className="font-semibold pb-2">Nome</p>
          <input
            defaultValue={editingUser.name}
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
                type="radio"
                onChange={(e) => genderSelect(e.target.value)}
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
            defaultValue={editingUser.date}
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
            defaultValue={editingUser.email}
            ref={inputEmail}
            placeholder="Digite seu email"
            className="outline-sky-600 border border-zinc-200 p-1 w-full"
            type="email"
          />
        </div>

        <div className="mt-3 pr-4">
          <p className="font-semibold pb-2">Senha</p>
          <input
            defaultValue={editingUser.password}
            ref={inputPassword}
            placeholder="Digite sua senha"
            className="outline-sky-600 border border-zinc-200 p-1 w-full"
            type="password"
          />
        </div>

        <div className="mt-3 pr-4">
          <p className="font-semibold pb-1">Foto</p>
          <input
            className="cursor-pointer"
            type="file"
            onChange={(e) => imageFile(e.target.files[0])}
          />
        </div>

        <div className="mt-3 pr-6">
          <button
            className="text-white bg-users-modal h-9 w-20 border border-x-users-logo-color rounded-md"
            type="submit"
          >
            Atualizar
          </button>

          <button
            className="text-white bg-users-background-header ml-4 h-9 w-20 border border-x-users-logo-color rounded-md"
            type="button"
            onClick={() => { router.push("/"); }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;