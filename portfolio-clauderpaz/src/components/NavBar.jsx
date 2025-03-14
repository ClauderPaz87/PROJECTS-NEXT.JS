
const NavBar = () => {
  return (
    <div>
        <nav className="bg-gray-800 w-screen h-16 fixed top-0 z-50 ">
            <div className="text-white h-16 gap-12 text-lg font-medium flex justify-center items-center">
                <a href="#inicio" className="cursor-pointer">Início</a>
                <a href="#sobre" className="cursor-pointer">Sobre</a>
                <a href="#projetos" className="cursor-pointer">Projetos</a>
                <a href="#contato" className="cursor-pointer">Contato</a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar