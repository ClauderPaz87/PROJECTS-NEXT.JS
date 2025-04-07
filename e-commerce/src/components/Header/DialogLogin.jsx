"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { SignIn, SignUp } from "@clerk/nextjs";

const DialogLogin = ({ active, setActive }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Dialog open={active} onOpenChange={setActive}>
      <DialogTitle></DialogTitle>
      <DialogContent className="w-[445px]">
        <div className="flex justify-center h-full w-full items-center">
          {isSignUp ? (
            <SignUp
              routing="virtual"
              appearance={{
                elements: {
                    footerActionText:{
                      display: "none"
                    },
                    footerActionLink: {
                      display: "none"
                    },
                  },
                variables: {
                    spacingUnit: "6px",
                    fontSize: "14px",
                    borderRadius: "4px",
                },
              }}
            />
          ) : (
            <SignIn
              routing="virtual"
              appearance={{
                elements: {
                  footerActionText:{
                    display: "none"
                  },
                  footerActionLink: {
                    display: "none"
                  },
                },
              }}
            />
          )}
        </div>

        <div className="text-center mt-4">
          {isSignUp ? (
            <p className="text-sm">
              Já tem uma conta?{" "}
              <button
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setIsSignUp(false)}
              >
                Faça login
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Não tem uma conta?{" "}
              <button
                className="text-blue-500 underline cursor-pointer"
                onClick={() => setIsSignUp(true)}
              >
                Cadastre-se
              </button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLogin;
