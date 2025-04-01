"use client";
import { SignIn } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { toast } from "react-toastify";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const DialogLogin = ({ openLogin, setOpenLogin }) => {
  const { isSignedIn } = useUser()
  const router = useRouter()

  return (
    <Dialog open={openLogin} onOpenChange={setOpenLogin}>
      <DialogTitle></DialogTitle>
      <DialogContent className="border-none bg-black flex justify-center text-white max-w-[400px]">
        {!isSignedIn ? (
          <SignIn
          routing="hash"
          signUpUrl="/sign-up"
          afterSignInUrl="/twitter/home"
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
        ) : router.push('/twitter/home') && 
        toast.info("You are login",{autoClose:3000, pauseOnHover:false,closeOnClick:true})}
        
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
