'use client'
import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "react-toastify";
import { useDashStore } from "@/store/DashGoStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const driverSchema = z.object({
  driverEdit: z.string().min(3, { message: "Adicione um nome válido" }),
  phoneEdit: z.string().min(9, { message: "Adicione um número válido" }),
});

const DialogDriverEdit = ({driver}) => {
  const {editingDriver,editUserDriver,editDriver} = useDashStore()
  const form = useForm({
      resolver: zodResolver(driverSchema),
    });
  const [open, setOpen] = useState(false);
  
  const handleSubmitForm = (data)=>{
    editDriver(editingDriver.id, data.driverEdit, data.phoneEdit)

    toast.success("Motorista Editado com sucesso", {
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
      onClick={()=>editUserDriver(driver.id)}
      className="bg-purple-500 hover:bg-purple-400 cursor-pointer rounded-md p-2 w-20 mr-2">
        Editar
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle>Editar Motorista</DialogTitle>
          <DialogDescription>
            Modifique o nome e o telefone do motorista
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitForm)} >
            <div className="mt-5">
              <FormField
                  control={form.control}
                  name="driverEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motorista</FormLabel>
                      <FormControl>
                        <Input className="mt-2" placeholder="Nome do motorista" type="text" {...field}/>
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
                        <Input className="mt-2" placeholder="Telefone do motorista" type="number" {...field}/>
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

export default DialogDriverEdit;
