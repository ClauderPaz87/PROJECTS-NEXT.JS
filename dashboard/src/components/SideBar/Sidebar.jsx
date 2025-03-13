import { PanelBottom } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet,SheetContent,SheetTrigger } from "../ui/sheet"
import NavMobile from "./NavMobile"
import NavDesktop from "./NavDesktop"

const Sidebar = () => {
  return (
    <div className="flex w-full flex-col bg-muted/40">
        
        <NavDesktop/>

        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header 
            className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background sm:static
            sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden" >
                            <PanelBottom className="w-5 h-5"/>
                            <span className="sr-only">Abrir / Fechar</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="sm:w-xs">
                        <NavMobile/>
                    </SheetContent>
                </Sheet>
                <h2 className="pl-2">Menu</h2>
            </header>
        </div>

    </div>
  )
}

export default Sidebar