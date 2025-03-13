'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useDashStore } from "@/store/DashGoStore"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SelectState from "@/components/Passenger/SelectState";
import SelectTaxi from "@/components/Passenger/SelectTaxi";

const citySchema = z.object({
  city: z.string().min(3, { message: "Adicione uma cidade válida" }),
  address: z.string().min(5, { message: "Adicione um endereço válido" }),
  number: z.string().min(1,{message: "Adicione um número válido"}),
  district: z.string().min(3,{message: "Adicione um bairro válido"}),
  state: z.string({message: "Adicione um estado"}),
  taxi: z.string({message:"Selecione um taxista"})

});

const page = () => {
  const {addPassenger,passengerPay,selectClient,clients } = useDashStore()
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(citySchema) 
  })

  const handleSubmitForm = (data)=>{
    const selectClientConst = clients.find((client)=>client.id === selectClient)
    addPassenger(
      selectClientConst.name,
      selectClientConst.rg,
      selectClientConst.phone,
      data.address,
      data.city,
      data.number,
      data.district,
      data.state,
      data.taxi,
      passengerPay.statePay,
      passengerPay.methodPay,
      passengerPay.value,
    )
    router.push(`/passenger`)
  }
      
  return (
    <div className="flex justify-center items-center min-h-[80vh] pl-60">
      <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
        <CardHeader>
          <CardTitle className="text-3xl font-light">Adicionar Passageiros</CardTitle>
          <div className="border-b border-slate-700 mt-3"></div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitForm)}>
            <div className="flex gap-4" >
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                    <Input type="text" placeholder="Cidade" className="w-44" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Endereço" className="w-44" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Número da casa" className="w-44" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Bairro" className="w-44" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <SelectState form={form} field={field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={form.control}
                name="taxi"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel>Taxi</FormLabel>
                    <FormControl>
                      <SelectTaxi field={field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div>
              <Button
                type="submit"
                className="bg-pink-500 hover:bg-pink-400 absolute top-9/12 left-[89vw] cursor-pointer">
                Salvar
              </Button>

              <Link href={`/passenger/createPassenger/payClient`}>
                <Button
                  variant={"secondary"}
                  type="button"
                  className="absolute top-9/12 left-[83vw] cursor-pointer">
                  Voltar
                </Button>
              </Link>
            </div>
            
            </form>

          </Form>
        </CardContent>
  
      </Card>

  </div>
  )
}

export default page