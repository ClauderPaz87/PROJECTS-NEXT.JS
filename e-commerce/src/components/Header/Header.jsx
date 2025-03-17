'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import SheetHeader from "./SheetHeader"
import { useClerk, useUser } from "@clerk/nextjs"

const Header = () => {
  const { isSignedIn } = useUser()
  const { signOut } = useClerk()

  const handleClick = ()=>{
    signOut()
  }

  return (
    <div className="bg-slate-800 text-white h-14">
        <header className="flex justify-between items-center h-14">
            <div>
                <p className="ml-7 text-lg">Next Store</p>
            </div>
            <div className="flex">
                <div>
                  <SheetHeader/>
                </div>
                <div className="mr-3">
                  {isSignedIn ? 
                  <Button onClick={handleClick} className="cursor-pointer w-24" variant={"secondary"}>Sair</Button>
                  : <Link href={"/sign-in"}><Button className="cursor-pointer" variant={"secondary"}>Fazer Login</Button></Link>
                  }
                </div>
            </div>
            
        </header>
    </div>
  )
}

export default Header