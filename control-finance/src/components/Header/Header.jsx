import { Card, CardHeader, CardTitle } from "../ui/card"

const Header = () => {
  return (
    <div className="w-full h-14">
        <Card className="rounded-none shadow-md h-full">
            <CardHeader className="flex justify-around items-center h-full">
                <CardTitle className="font-bold text-xl">
                <span className="text-red-600">Nu</span> Kenzie
                </CardTitle>
                <p className="p-1 px-3.5 bg-zinc-300 rounded-md">Início</p>
            </CardHeader>
        </Card>
    </div>
  )
}

export default Header