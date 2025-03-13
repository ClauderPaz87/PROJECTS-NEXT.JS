'use client'
import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "react-toastify";
import { useDashStore } from "@/store/DashGoStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

const driverSchema = z.object({
  taxiEdit: z.string().min(3, { message: "Adicione um nome válido" }),
  phoneEdit: z.string().min(11, { message: "Adicione um número válido" }),
  cityEdit: z.string().min(3, { message: "Adicione uma cidade válida" }),
});

const DialogEditTaxi = ({taxi}) => {
  const {editingTaxi,editUserTaxi,editTaxi} = useDashStore()
  const form = useForm({
      resolver: zodResolver(driverSchema),
    });
  const [open, setOpen] = useState(false);
  
  const handleSubmitForm = (data)=>{
    editTaxi(editingTaxi.id, data.taxiEdit, data.phoneEdit, data.cityEdit)

    toast.success("Taxista Editado com sucesso", {
      position: "top-center",
      autoClose: 1000,
      pauseOnHover: false,
      closeOnClick: true,
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger 
      onClick={()=>editUserTaxi(taxi.id)}
      className="bg-purple-500 hover:bg-purple-400 cursor-pointer rounded-md p-2 w-20 mr-2">
        Editar
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle>Editar Taxista</DialogTitle>
          <DialogDescription>
            Modifique o necessário do taxista
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitForm)} >
            <div className="mt-5">
              <FormField
                  control={form.control}
                  name="taxiEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Taxista</FormLabel>
                      <FormControl>
                        <Input className="mt-2" placeholder="Nome do Taxista" type="text" {...field}/>
                      </FormControl>
                      <FormMessage/>
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-5">
                <FormField
                    control={form.control}
                    name="phoneEdit"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                        <InputMask 
                        className="mt-2 border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" 
                        name="serialNumber" 
                        mask="(99)-99999-9999" 
                        placeholder="(99)-99999-9999" 
                        fluid 
                        {...field}
                        />  
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    )}
                />
              </div>

              <div className="mt-5">
              <FormField
                control={form.control}
                name="cityEdit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input className="mt-2" type="text" placeholder="Cidade do taxista" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end mt-7">
                <Button type="submit" className="text-black cursor-pointer" 
                variant="outline">
                  Salvar
                </Button>
              </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogEditTaxi;
