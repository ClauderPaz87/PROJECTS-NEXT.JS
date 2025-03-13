import { CircleDollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"

const CardSales = () => {
  return (

        <Card className="flex-1">
            <CardHeader>
                <div className="flex justify-center items-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">Ultimos Clientes</CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>Novos clientes nas ultimas 24 horas</CardDescription>
            </CardHeader>
            
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src=""/>
                        <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Clauder Paz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@testgmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src=""/>
                        <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Clauder Paz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@testgmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src=""/>
                        <AvatarFallback>CL</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Clauder Paz</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@testgmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>

  )
}

export default CardSales