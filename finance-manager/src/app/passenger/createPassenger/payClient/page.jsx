'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useDashStore } from "@/store/DashGoStore"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import SelectStatus from "@/components/Passenger/SelectStatus";
import SelectMethodPay from "@/components/Passenger/SelectMethodPay";
import Link from "next/link";
import { useRouter } from "next/navigation";

const paySchema = z.object({
  quantity: z.string().min(1, { message: "Adicione uma quantidade válida" }),
  value: z.string().min(1, { message: "Adicione um valor válido" }),
  statusPay: z.string({message: "Adicione o status de pagamento"}),
  methodPay: z.string({message: "Adicione um método de pagamento"}),
  volumes: z.string().min(1, { message: "Adicione um volume válido" }),

});

const page = () => {
  const form = useForm({
    resolver: zodResolver(paySchema)
  })
  const router = useRouter()
  const { addPassengerPay} = useDashStore()

  const handleSubmitForm = (data)=>{
    addPassengerPay(data.value,data.statusPay,data.methodPay)
    router.push(`/passenger/createPassenger/payClient/cityPassenger/`)
  }
      
  return (
    <div className="flex justify-center w-[93vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh]">
      <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
        <CardHeader>
          <CardTitle className="text-3xl font-light">Adicionar Passageiros</CardTitle>
          <div className="border-b border-slate-700 mt-3"></div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="grid grid-cols-2 gap-2 ml-2 sm:grid sm:grid-cols-3 md:gap-3 md:grid-cols-2 xl:flex xl:gap-4" onSubmit={form.handleSubmit(handleSubmitForm)}>
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantidade</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Quantidade" className="w-44" {...field}></Input>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Valor" className="w-44" {...field}></Input>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="statusPay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status do pagamento</FormLabel>
                  <FormControl>
                    <SelectStatus field={field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="methodPay"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metodo de pagamento</FormLabel>
                  <FormControl>
                    <SelectMethodPay field={field}/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <div>
              <Button
                type="submit"
                className="bg-pink-500 hover:bg-pink-400 mt-6 absolute top-[67vh] left-[50vw] cursor-pointer
                sm:left-[80vw] sm:mt-0 md:left-[90vw] lg:left-[87vw] lg:top-[72vh]">
                Avançar
              </Button>
              <Link href={`/passenger/createPassenger/`}>
                <Button
                  variant={"secondary"}
                  type="button"
                  className="absolute top-[67vh] left-[28vw] mt-6 cursor-pointer sm:left-[65vw] sm:mt-0
                  md:left-[78vw] lg:left-[81vw] lg:top-[72vh] ">
                  Voltar
                </Button>
              </Link>
            </div>
            </form>
            
            <CardTitle className="text-2xl mt-7 hidden lg:block">Bagagem</CardTitle>

            <div className="flex flex-row gap-4 ml-2">
              <FormField
                control={form.control}
                name="volumes"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel>Volumes</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Volumes" className="w-56" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Descrição" className="w-56 md:w-64 lg:w-96" {...field}></Input>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

          </Form>
        </CardContent>
            
      </Card>

  </div>
  )
}

export default page