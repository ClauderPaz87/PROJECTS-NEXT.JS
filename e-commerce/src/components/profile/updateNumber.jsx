"use client";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";

const UpdateNumber = ({ active, setActive }) => {
  const [newNumber, setNewNumber] = useState("");
  const { user } = useUser();

  const updatePhoneNumber = async (e) => {
    e.preventDefault();
    if (!newNumber) {
      toast.error("Por favor, insira um número válido.");
      return;
    }
  
    try {
      const phoneNumberObj = await user?.createPhoneNumber({
        phoneNumber: newNumber,
      });

      if (phoneNumberObj) {
        await user?.update({ primaryPhoneNumberId: phoneNumberObj.id });
      }
  
      toast.success("Número atualizado com sucesso!");
      setActive(false);
    } catch (error) {
      console.error("Erro ao atualizar número:", error);
      toast.error("Erro ao atualizar número. Tente novamente.");
    }
  };

  return (
    <Dialog open={active} onOpenChange={setActive}>
      <DialogContent className="p-5">
        <DialogTitle className="font-base text-lg">Editar Número</DialogTitle>
        <form onSubmit={updatePhoneNumber}>
          <label className="pl-1">Novo Número</label>
          <Input
            type="tel"
            placeholder="Seu Número"
            className="mt-1.5"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
          <div className="mt-5 w-full flex justify-center">
            <Button
              type="submit"
              variant="none"
              className="bg-blue-200 text-blue-500 hover:opacity-90"
            >
              Confirmar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateNumber;
