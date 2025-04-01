"use client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import X from "../../../../public/image_logoX.jpg";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useRef } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTwitterStore } from "@/store/TwitterStore";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";

const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Erro na resposta do servidor: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.imageUrl;
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      toast.error("Erro ao fazer upload da imagem", { autoClose: 2500, closeOnClick: true });
      throw error;
    }
  };

const DialogProfile = ({setProfileImage,setBio}) => {
  const { user } = useUser();
  const fileInputRef = useRef(null);
  const { step, isDialogOpen, closeDialog, nextStep } = useTwitterStore();
  const inputLastName = useRef(null);
  const inputFirstName = useRef(null);
  const bio = useRef(null)

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    try {
      const imageUrl = await uploadImage(file);
  
      if (user) {
        await user.update({ 
          unsafeMetadata: { imageUrl }
        });
  
        await user.reload();
        setProfileImage(imageUrl)
        toast.success("Imagem de perfil atualizada com sucesso!", { autoClose: 2500, closeOnClick: true });
      }
    } catch (error) {
      console.error("Erro ao atualizar a imagem:", error);
      toast.error("Erro ao atualizar a imagem", { autoClose: 2500, closeOnClick: true });
    }
  };

  const btnFinish = async (e) => {
    e.preventDefault();
    setBio(bio.current.value)
    try {
      if (user) {
        await user.update({ firstName: inputFirstName.current?.value });
        await user.update({ lastName: inputLastName.current?.value });
        toast.success("Nome atualizado!", { autoClose: 2500, closeOnClick: true });
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
    closeDialog();
  };

  return (
    <>
      <Dialog open={isDialogOpen && step === 1} onOpenChange={closeDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent className="border bg-black text-white max-w-[440px] h-[80vh]">
          <div className="flex flex-col">
            <div className="relative bottom-3 left-[15vw]">
              <Image src={X} alt="Logo da twitter" className="w-18 h-18 text-white" />
            </div>
            <div className="flex flex-col">
              <p className="mt-3.5 text-white font-bold text-3xl ml-12">Pick a profile picture</p>
              <p className="text-zinc-500 text-sm ml-12 mt-1.5">Have a favorite selfie? Upload it now.</p>
            </div>
            <div className="flex justify-center mt-12 pr-14">
              <button
                onClick={handleClick}
                className="bg-zinc-600 text-white rounded-full relative left-[108px] top-12 w-14 h-14 p-1 cursor-pointer"
              >
                <Camera size={24} className="flex justify-center w-full" />
              </button>
              <Image
                src={user?.imageUrl || "/default-profile.png"} 
                alt="image"
                className="w-40 h-40 rounded-full text-white border-4"
                width={700}
                height={100}
              />
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => nextStep()}
                variant={"secondary"}
                className="border w-80 text-lg rounded-full p-6 cursor-pointer mt-14"
              >
                Next
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isDialogOpen && step === 2} onOpenChange={closeDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent className="border bg-black text-white max-w-[440px] h-[80vh]">
          <form onSubmit={btnFinish} className="flex flex-col">
            <div className="relative bottom-3 left-[14.5vw]">
              <Image src={X} alt="Logo da twitter" className="w-18 h-18 text-white" />
            </div>
            <div className="flex flex-col">
              <p className="mt-3.5 text-white font-bold text-3xl text-center">New Name</p>
            </div>
            <div className="flex justify-center mt-12">
              <Input ref={inputFirstName} placeholder="Your first name" />
            </div>
            <div className="mt-2.5">
              <Input ref={inputLastName} placeholder="Your last name" />
            </div>
            <div className="mt-2.5">
                <Textarea className="resize-none h-20 border" placeholder="Your Bio" ref={bio}/>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                variant={"secondary"}
                className="border w-80 text-lg rounded-full p-6 cursor-pointer mt-14"
              >
                Finish
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogProfile;
