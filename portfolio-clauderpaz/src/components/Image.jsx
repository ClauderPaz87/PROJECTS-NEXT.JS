import Image from "next/image"
import myImage from "../../public/My_image.jpeg"

const MyImage = () => {
  return (
    <div id="inicio">
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Image src={myImage} quality={100} className="h-56 w-56 rounded-full shadow-2xl 
            border border-colorVidro shadow-shadowImage image
            "/>
            <p className="font-bold text-colorPrimary text-4xl mt-2 ">Clauder Paz</p>
            <p className="text-base text-colorLight mt-3">Desenvolvedor Front-End</p>
        </div>
    </div>
  )
}

export default MyImage