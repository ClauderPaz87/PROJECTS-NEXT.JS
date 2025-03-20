import { FilmIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet,SheetContent,SheetTrigger } from "../ui/sheet"
import SheetFilms from "./SheetFilms"

const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between bg-slate-800 text-gray-100">
        <div className="h-auto flex items-center ml-5">
            <p className="text-lg font-semibold font-mono">Filmes TMDB</p>
        </div>
        <div>
        <div className="h-14 flex items-center">
            <Sheet >
                <SheetTrigger asChild>
                    <Button className="bg-slate-800 text-gray-200 mr-9 hover:bg-slate-800 cursor-pointer">
                        <FilmIcon  size={700}/>
                        <span className="sr-only">Abrir / Fechar</span>
                    </Button>
                </SheetTrigger>
                    <SheetContent side="right" className="w-72 border-0 shadow-md overflow-auto
                    bg-slate-800 text-white">
                        <SheetFilms/>
                    </SheetContent>
            </Sheet>
        </div>
        </div>
    </div>
  )
}

export default Header