'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SelectDriver from "./SelectDriver";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

const FormsInput = ({form}) => {

  return (
    <div >
        <div className="grid grid-cols-2 gap-2 sm:grid sm:grid-cols-3 md:gap-5 md:grid-cols-3 xl:flex">
            <FormField
              control={form.control}
              name="dateMatch"
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
              name="dateReturn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Retorno</FormLabel>
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
                    <PopoverContent className="w-auto p-0  bg-slate-900 text-white" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="origin"
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
              name="destiny"
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
              name="place"
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

        <div className="mt-7 absolute bottom-[241px] left-[243px] sm:relative sm:bottom-0 sm:left-0">
          <FormField
                control={form.control}
                name="driver"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motoristas</FormLabel>
                    <FormControl>
                      <SelectDriver field={field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
        </div>
    </div>
  );
};

export default FormsInput;
