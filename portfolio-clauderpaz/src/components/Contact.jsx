'use client'
import { useRef } from "react"

const Contact = () => {
    const name = useRef('')
    const mensage = useRef('')
    const phone = "5581994528411"

    const handleSubmit = (e) => {
        e.preventDefault()
        const texto = `Olá me chamo ${name.current.value}, ${mensage.current.value} `
        const msgFormat = encodeURIComponent(texto)

        const url = `https://wa.me/${phone}?text=${msgFormat}`
        console.log(url)

        window.open(url, '_blank')
    }


    return (
        <div id="contato" className="min-h-screen w-full mt-14">
            <div className="w-full flex justify-center">
                <p className="font-bold text-colorLight text-4xl">Entre em contato</p>
            </div>
            <div className="w-full h-96 flex justify-center items-center">
                <form  onSubmit={handleSubmit} className="bg-gray-800 backdrop-blur-lg w-full max-w-xl h-68 rounded-lg p-7 ">
                    <div>
                        <input placeholder="Seu nome"
                            className="p-2 bg-gray-800 rounded-lg text-white border border-colorVidro w-full outline-none 
                    hover:shadow-lg duration-300 hover:shadow-shadowImage hover:border-colorPrimary"
                            type="text"
                            ref={name}
                        />
                    </div>
                    <div className="">
                        <textarea className="p-5 bg-gray-800 rounded-lg text-white border border-colorVidro w-full outline-none 
                    mt-4 resize-none hover:shadow-lg duration-300 hover:shadow-shadowImage hover:border-colorPrimary"
                            ref={mensage}
                            placeholder="Deixe sua mensagem">
                        </textarea>
                    </div>
                    <div className="mt-5">
                        <button
                            className="w-full h-12 font-bold text-colorLight rounded-lg transition-all ease-linear
                            hover:-translate-y-1 hover:shadow-lg bg-colorSecondary hover:shadow-shadowImage"
                            type="submit">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact