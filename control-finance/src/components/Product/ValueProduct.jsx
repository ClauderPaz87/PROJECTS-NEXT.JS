"use client";
import React, { useEffect } from "react";
import { Card, CardHeader } from "../ui/card";
import { Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from "../ui/select";
import ValueTotal from "./ValueTotal";
import { useControlStore } from "@/store/ControlStore";

   
const formSchema = z.object({
  description: z.string().min(2, { message: "Adicione uma descrição ao produto" }),
  value: z.string({ message: "Adicione um valor" }),
  typeValue: z.string({message: "Escolha um tipo de valor"})

});

const ValueProduct = () => {
  const { addProductEntries, addProductExits, addProductAll } = useControlStore()
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const formSubmit = (data) => {
    if(data.typeValue === "entries"){
      addProductEntries(data.description, data.value, data.typeValue)
      addProductAll(data.description, data.value, data.typeValue)
      return
    }
    else if(data.typeValue === "exits"){
      addProductExits(data.description, data.value, data.typeValue)
      addProductAll(data.description, data.value, data.typeValue)
      return
    }
       
  };
  
  return (
    <div className="mt-7 flex flex-col pl-24">

      <div className="flex justify-center">
          <Card className="rounded-sm w-96 h-full shadow-md">
            <CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(formSubmit)}>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                          <Input placeholder="Descrição do produto" {...field} />
                        </FormControl>
                        <FormMessage />
                        <FormDescription>Ex: Compra de roupas</FormDescription>
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-3">
                    <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                            <FormItem className="mt-5">
                            <FormLabel>Valor</FormLabel>
                            <FormControl>
                                <Input className="w-40 p-5" placeholder="R$" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                      control={form.control}
                      name="typeValue"
                      render={({ field }) => (
                        <FormItem className="mt-5">
                          <FormLabel>Valor</FormLabel>
                          <Select onValueChange={field.onChange}>
                            <FormControl>
                              <SelectTrigger className="p-5 w-40">
                                <SelectValue placeholder="Tipos de valor" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="entries">Entrada</SelectItem>
                              <SelectItem value="exits">Saída</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
          
                  </div>
                  <Button
                    type="submit"
                    variant={"none"}
                    className="p-6 bg-pink-600 text-white w-full mt-7 cursor-pointer hover:-translate-y-2 duration-300"
                  >
                    Inserir Valor
                  </Button>
                </form>
              </Form>
            </CardHeader>
          </Card>
      </div>

      <div className="mt-3 flex justify-center">
        <ValueTotal/>
      </div>

    </div>
  );
};

export default ValueProduct;
