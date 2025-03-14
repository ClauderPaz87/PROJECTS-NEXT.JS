import Image from "next/image"
import twitter from "../../public/projeto_twitter.png"
import platform from "../../public/projeto_usuarios.png"
import weather from "../../public/projeto_weather.png"
import Link from "next/link"

const Projects = () => {
  return (
    <div id="projetos" className="mt-24 min-h-screen w-full">

      <div className="mb-16 flex justify-center">
        <p className="text-5xl font-extrabold text-colorLight">Meus Projetos</p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 lg:px-44 gap-8">

        <Link href="https://spiffy-alpaca-3a137e.netlify.app/" 
        className="hover:shadow-xl hover:shadow-shadowImage hover:-translate-y-3 hover:scale-105 
        transition-all ease-linear w-72 mx-auto">
          <div>
            <Image src={twitter} quality={100} className="h-52 max-w-full object-cover rounded-t-xl"/>
          </div>
          <div className="bg-gray-800 rounded-b-md max-w-80 backdrop-blur-md p-4">
            <p className="font-bold text-2xl text-colorLight mb-3">Clone do twitter</p>
            <p className="text-colorLight h-28">
              Clone do twitter interativo e responsivo, com tweets gerados automaticamente.
            </p>
          </div>
        </Link>

        <Link href="https://projeto-plataformadeusuarios.vercel.app/" 
        className="hover:shadow-xl hover:shadow-shadowImage hover:-translate-y-3 hover:scale-105 transition-all ease-linear
        w-72 mx-auto">
          <div>
            <Image src={platform} className="h-52 max-w-full object-cover rounded-t-xl"/>
          </div>
          <div className="bg-gray-800 rounded-b-md max-w-80 backdrop-blur-md p-4">
            <p className="font-bold text-2xl text-colorLight mb-3">Plataforma de usuários</p>
            <p className="text-colorLight h-24">
              Projeto de usuários com funcionalidades, e um formulário mais avançado.
            </p>
          </div>
        </Link>

        <Link href="https://projeto-appweather.vercel.app/" 
        className="hover:shadow-xl hover:shadow-shadowImage hover:-translate-y-3 hover:scale-105 transition-all ease-linear
        w-72 mx-auto">
          <div>
            <Image src={weather} className="h-52 max-w-full object-cover rounded-t-xl"/>
          </div>
          <div className="bg-gray-800 rounded-b-md max-w-80 backdrop-blur-md p-4">
            <p className="font-bold text-2xl text-colorLight mb-3">App de tempo</p>
            <p className="text-colorLight h-28">
              App de tempo feito com consumo de api do openWeather.
            </p>
          </div>
        </Link>

      </div>

    </div>
  )
}

export default Projects