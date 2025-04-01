'use client'
import Image from "next/image"
import background from "../../../public/image_logoX.jpg"
import { Button } from "../ui/button"
import { useState } from "react"
import DialogLogin from "./DialogLogin"
import DialogRegister from "./DialogRegister"

const Login = () => {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <div className="flex">
        <div>
            <Image src={background} alt="Imagem do twitter" width={700} height={100}
            className="inset-0 absolute -z-10 md:z-0 sm:w-full md:relative md:w-[55vw] h-screen
            object-cover"/>
        </div>
        <div className="flex flex-col w-full md:w-[45vw]">
            <div className="text-white p-6 mt-10 font-medium w-full text-center">
                <div>
                    <h1 className="text-6xl md:text-7xl">Happening now</h1>
                </div>
                <div className="mt-16">
                    <p className="text-3xl">Join Twitter Today</p>
                </div>
                <div className="mt-14 0 text-center w-full">
                    <Button 
                    onClick={()=>setOpenRegister(true)}
                    variant={"none"} className="bg-blue-500 text-white rounded-full w-full 
                    cursor-pointer hover:bg-blue-600 md:w-80 lg:w-96">
                        Create Account
                    </Button>
                    <p className="text-sm text-zinc-200 mt-2">
                        By signing up,you agree to the Terms of Service and Privacy Policy. 
                        including Cookie use.
                    </p>
                </div>
                <div className="mt-7">
                    <p className="text-xl font-normal text-white">Already Have Account?</p>
                </div>
                <div className="mt-3">
                    <Button 
                        onClick={()=>setOpenLogin(true)}
                        variant={"secondary"} 
                        className="cursor-pointer w-full md:w-80 lg:w-96">
                        SIGN IN
                    </Button>
                </div>
            </div>
        </div>
        <DialogLogin openLogin={openLogin} setOpenLogin={setOpenLogin}/>
        <DialogRegister openRegister={openRegister} setOpenRegister={setOpenRegister}/>
    </div>
  )
}

export default Login