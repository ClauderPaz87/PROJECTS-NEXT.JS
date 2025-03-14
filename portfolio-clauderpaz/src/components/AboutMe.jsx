
const AboutMe = () => {
    return (
        <div id="sobre" className="min-h-96 mt-9">
            <div>
                <p className="font-extrabold text-5xl text-colorLight flex justify-center">Sobre Mim</p>
            </div>
            <div className="w-full flex justify-center mt-6">
                <div className="rounded-md p-4 max-w-screen-md max-h-44 bg-gray-800 backdrop-blur-md">
                    <p className="text-colorLight text-sm shadow-sm font-medium w-full text-center">
                        Olá, me chamo Clauder Paz tenho 18 anos, sou desenvolvedor front-end uso a
                        linguagem JavaScript juntamente com tecnologias como reactJs e nextJs,
                        domino bem o html e css, mas ultilizo o bootstrap ou taiwlind para estilização,
                        tento sempre manter o código limpo e fazendo boas práticas. Dentro nextjs, ultilizo ferramentas
                        como, Zustand, uuid, reactCharts, useRouter e o reactRouter. Além de entender bastante sobre o node-js,
                        e fazendo criações de banco de dados, com mongoDb e prisma.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe