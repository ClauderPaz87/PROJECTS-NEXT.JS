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
  clientEdit: z.string().min(3, { message: "Adicione um nome válido" }),
  phoneEdit: z.string().min(11, { message: "Adicione um número válido" }),
  rgEdit: z.string().min(10, { message: "Adicione um número válido" }),
  ssnEdit: z.string().min(9, { message: "Adicione um número válido" }),
});

const DialogEditClient = ({client}) => {
  const {editingClient,editUserClient,editClient} = useDashStore()
  const form = useForm({
      resolver: zodResolver(driverSchema),
    });
  const [open, setOpen] = useState(false);
  
  const handleSubmitForm = (data)=>{
    editClient(editingClient.id, data.clientEdit, data.phoneEdit, data.rgEdit, data.ssnEdit )

    toast.success("Cliente Editado com sucesso", {
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
      onClick={()=>editUserClient(client.id)}
      className="bg-purple-500 hover:bg-purple-400 cursor-pointer rounded-md p-2 w-20 mr-2">
        Editar
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle>Editar Cliente</DialogTitle>
          <DialogDescription>
            Modifique o necessário do cliente
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitForm)} >
            <div className="mt-5">
              <FormField
                  control={form.control}
                  name="clientEdit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Motorista</FormLabel>
                      <FormControl>
                        <Input className="mt-2" placeholder="Nome do Cliente" type="text" {...field}/>
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
                name="rgEdit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rg</FormLabel>
                    <FormControl>
                      <InputMask 
                      className="mt-2 border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" 
                      name="serialNumber" 
                      mask="99-999-999-99" 
                      placeholder="99-999-999-99" 
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
                name="ssnEdit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SSN</FormLabel>
                    <FormControl>
                      <InputMask 
                      className="mt-2 border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" 
                      name="serialNumber" 
                      mask="999-99-9999" 
                      placeholder="999-99-9999" 
                      fluid 
                      {...field}
                      />  
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

export default DialogEditClient;
