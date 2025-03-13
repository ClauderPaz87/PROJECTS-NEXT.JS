'use client'
import { Form ,FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import SelectDriver from "../../../components/Forms/SelectDriver";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashStore } from "@/store/DashGoStore";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const tripSchema = z.object({
  originEdit: z.string().min(3, {message:"Adicione uma origem válida"}),
  destinyEdit: z.string().min(3, {message:"Adicione um destino válido"}),
  placeEdit: z.string().min(7, {message:"Adicione uma placa válida"}),
  dateMatchEdit: z.date(),
  dateReturnEdit: z.date(),

})

const page = () => {
  const { editTrip, editingTrip, editUserTrip } = useDashStore()
  const router = useRouter()
  const params = useParams()
  const form = useForm({
    resolver: zodResolver(tripSchema)
  })
  
  useEffect(() => {
    if (params.id) {
      editUserTrip(params.id);
    }
  }, [params.id, editUserTrip]);

  useEffect(() => {
    if (editingTrip) {
      form.reset({
        dateMatchEdit: editingTrip.match,
        dateReturnEdit: editingTrip.retorno,
        originEdit: editingTrip.origin,
        destinyEdit: editingTrip.destiny,
        placeEdit: editingTrip.place,
      });
    }
  }, [editingTrip, form]);

  const handleSubmitFormEdit = (data)=>{
  
    editTrip(
      editingTrip.id,
      data.dateMatchEdit,
      data.dateReturnEdit,
      data.originEdit,
      data.destinyEdit,
      data.placeEdit)

    router.push(`/Trips`)

    return toast.success('Viagem Editada!!',{
      position:"top-center",
      autoClose:1000,
      pauseOnHover:false,
      closeOnClick : true 
    })
  }

  const btnCancel = ()=>{
    router.push(`/Trips`)
  }

  return (
    <div className="flex justify-center w-[95vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh]">
      <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
        <CardHeader>
          <CardTitle className="text-3xl ">Editar Viagem</CardTitle>
          <div className="border-b border-slate-700 mt-3"></div>
        </CardHeader>
        <Form {...form}>
          <form className="ml-6" onSubmit={form.handleSubmit(handleSubmitFormEdit)}>
            <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-3 md:gap-5 md:grid-cols-3 xl:flex">
            <FormField
              control={form.control}
              name="dateMatchEdit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de partida</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="border border-gray-200 w-44 rounded-md p-1 bg-slate-900">
                      {field.value ? (
                        <span>{format(field.value, "PPP")}</span>
                      ) : (
                        <span className="flex items-center">
                          <p className="ml-2 text-sm text-zinc-400">pick a date</p>
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </span>
                      )}
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-slate-900 text-white" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
                <FormField
              control={form.control}
              name="dateReturnEdit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de partida</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="border border-gray-200 w-44 rounded-md p-1 bg-slate-900">
                      {field.value ? (
                        <span>{format(field.value, "PPP")}</span>
                      ) : (
                        <span className="flex items-center">
                          <p className="ml-2 text-sm text-zinc-400">pick a date</p>
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </span>
                      )}
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-slate-900 text-white" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
                <FormField
                  control={form.control}
                  name="originEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Origem</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Origem" className="w-44" {...field}></Input>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destinyEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Destino</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Destino" className="w-44" {...field}></Input>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="placeEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Placa</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Placa" className="w-44" {...field}></Input>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
            </div>

            <div className="mt-7 absolute bottom-[228px] left-[252px] sm:relative sm:bottom-0 sm:left-0">
              <FormField
                  control={form.control}
                  name="driver"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motoristas</FormLabel>
                      <FormControl>
                        <SelectDriver field={field} />
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
            </div>
          
            <Button
              type="submit"
              className="bg-pink-500 hover:bg-pink-400 mt-7 absolute top-8/12 left-[50vw] cursor-pointer
              sm:left-[80vw] sm:mt-0 md:left-[90vw]">
              Editar
            </Button>
            <Button 
              onClick={btnCancel}
              variant={"secondary"}
              type="button"
              className="absolute top-8/12 left-[28vw] mt-7 cursor-pointer sm:left-[65vw] sm:mt-0
              md:left-[78vw] lg:left-[81vw]">
                Cancelar
            </Button>  
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default page