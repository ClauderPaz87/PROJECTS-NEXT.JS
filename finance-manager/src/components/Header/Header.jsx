import { PanelBottom } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet,SheetContent,SheetTrigger } from "../ui/sheet"
import SheetContentApp from "./SheetContent"

const Header = () => {
  return (
    <div>
        <header>
            <div className="bg-slate-950 text-white flex justify-between pl-5 pt-6 shadow-sm items-center">
                <p className="text-3xl">DashGo <span className="text-pink-500">.</span></p>
                <div className="block">
                  <Sheet>
                        <SheetTrigger className="bg-slate-800" asChild>
                            <Button size="icon" variant="secondary" className="md:hidden" >
                                <PanelBottom className="w-5 h-5 text-white"/>
                                <span className="sr-only">Abrir / Fechar</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-60 bg-slate-800 text-white border-0 shadow-md">
                            <SheetContentApp/>
                        </SheetContent>
                      </Sheet>
                </div>
                <div className="flex items-center pl-3">
                    <p className="mr-8">Clauder</p>
                    <Button className="bg-pink-500 hover:bg-pink-400 w-24 cursor-pointer">Sair</Button>
                </div>
            </div>
            
        </header>
    </div>
  )
}

export default Header