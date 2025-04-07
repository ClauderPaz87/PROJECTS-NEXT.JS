"use client";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { useUser } from "@clerk/nextjs";

const UpdateEmail = ({ active, setActive }) => {
  const [activeCode, setActiveCode] = useState(false);
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState(null);
  const { user } = useUser()

  const btnConfirm = async (e) => {
    e.preventDefault();

    try {
      const newEmailAddress = await user.createEmailAddress({
        email,
      });

      await newEmailAddress.prepareVerification({ strategy: "email_code" });

      setNewEmail(newEmailAddress);
      setActiveCode(true);
    } catch (err) {
      console.error("Erro ao iniciar verificação:", err);
    }
  };

  const verifyCode = async () => {
    if (!newEmail || !value) return;

    try {
      const verification = await newEmail.attemptVerification({ code: value });

      if (verification.verification.status === "verified") {
        toast.success("✅ Email verificado com sucesso!", {
          autoClose: 3000,
          pauseOnHover: false,
        });

        await user.update({
          primaryEmailAddressId: newEmail.id,
        });

        const oldEmail = user.emailAddresses.find(
          (emailItem) => emailItem.id !== newEmail.id
        );

        if (oldEmail) {
          try {
            await oldEmail.destroy();
          } catch (err) {
            console.warn("⚠️ Não foi possível excluir o email antigo:", err);
          }
        }

        await user.reload();
        setActiveCode(false);
      } else {
        toast.error("⚠️ Código de verificação incorreto!", {
          autoClose: 3000,
          pauseOnHover: false,
        });
      }
    } catch (err) {
      console.error("Erro ao verificar código:", err);
    }
  };

  return (
    <div>
      <Dialog open={active} onOpenChange={setActive}>
        <DialogContent className="p-5">
          <DialogTitle className="font-base text-lg">Editar E-mail</DialogTitle>
          <form onSubmit={btnConfirm}>
            <label className="pl-1">E-mail</label>
            <Input
              type="email"
              placeholder="Seu Email"
              className="mt-1.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mt-5 w-full flex justify-center">
              <Button type="submit" 
              variant={"none"}
              className="bg-blue-200 text-blue-500 hover:opacity-90">
                Confirmar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={activeCode} onOpenChange={setActiveCode}>
        <DialogContent className="p-5">
          <DialogTitle className="font-base text-lg text-center">
            Digite o código de verificação
          </DialogTitle>
          <div className="flex justify-center">
              <InputOTP maxLength={6} value={value} onChange={setValue}>
                <InputOTPGroup>
                  {[...Array(6)].map((_, i) => (
                    <InputOTPSlot key={i} index={i} />
                  ))}
                </InputOTPGroup>
              </InputOTP>
          </div>
          <Button 
          variant={"none"}
          onClick={verifyCode} className="bg-blue-200 text-blue-500 hover:opacity-90">
            Confirmar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateEmail;
