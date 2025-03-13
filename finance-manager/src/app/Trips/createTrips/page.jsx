'use client'
import FormsInput from "@/components/Forms/FormsInput";
import { useDashStore } from "@/store/DashGoStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const tripSchema = z.object({
  origin: z.string().min(3, {message:"Adicione uma origem válida"}),
  destiny: z.string().min(3, {message:"Adicione um destino válido"}),
  place: z.string().min(7, {message:"Adicione uma placa válida"}),
  dateMatch: z.date(),
  dateReturn: z.date(),

})

const page = () => {
    const router = useRouter() 
    const { addTrips } = useDashStore()
    const form = useForm({
      resolver: zodResolver(tripSchema),
    })

    const handleSubmitForm = (data)=>{
        addTrips(data.dateMatch,data.dateReturn,data.origin,data.destiny,data.place)
        router.push('/Trips') 
        
        return toast.success('Viagem Cadastrada!!',{
          position:"top-center",
          autoClose:1000,
          pauseOnHover:false,
          closeOnClick : true 
        })
    }

    const btnCancel = ()=>{
      router.push('/Trips')
    }

  return (
    <div className="flex justify-center w-[95vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh]">
      <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
        <CardHeader>
          <CardTitle className="text-3xl ">Criar Viagem</CardTitle>
          <div className="border-b border-slate-700 mt-3"></div>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="" onSubmit={form.handleSubmit(handleSubmitForm)}>
              <FormsInput form={form}/>
                <Button
                type="submit"
                className="bg-pink-500 hover:bg-pink-400 mt-5 absolute top-8/12 left-[50vw] cursor-pointer
                sm:left-[80vw] sm:mt-0 md:left-[90vw]">
                  Salvar
                </Button>
                <Button
                onClick={btnCancel}
                variant={"secondary"}
                type="button"
                className="absolute top-8/12 left-[28vw] mt-5 cursor-pointer sm:left-[65vw] sm:mt-0
                md:left-[78vw] lg:left-[81vw]">
                  Cancelar
                </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
