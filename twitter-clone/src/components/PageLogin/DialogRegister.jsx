"use client";
import { SignUp } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

const DialogRegister = ({ openRegister, setOpenRegister }) => {
  return (
    <Dialog open={openRegister} onOpenChange={setOpenRegister}>
      <DialogTitle></DialogTitle>
      <DialogContent className="border-none bg-black flex justify-center text-white max-w-[400px] 
       h-full">
        <SignUp
          routing="hash"
          signInUrl="/sign-in"
          appearance={{
            baseTheme: {},
            variables: {
              colorPrimary: "#7C3AED",
              colorText: "#ffffff",
              colorTextSecondary: "#a3a3a3",
              colorBackground: "#000000",
              colorInputBackground: "#202020",
              colorInputText: "#ffffff",
              colorShimmer: "rgba(255,255,255,0.12)",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogRegister;
