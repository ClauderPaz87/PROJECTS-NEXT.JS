'use client'
import {Card, CardDescription, CardHeader, CardTitle, }from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  return (
    <div className="flex justify-center w-[95vw] items-center min-h-[80vh] md:pl-60 md:w-[100vw] md:min-h-[80vh]">
      <Card className="bg-slate-900 border-0 shadow-sm text-white w-5xl h-96">
        <CardHeader>
          <CardTitle className="text-3xl ">DashBoard</CardTitle>
          <CardDescription className="flex justify-center items-center h-48">
            Não há dados ainda
          </CardDescription>
        </CardHeader>

        <Select>
          <SelectTrigger className="relative left-[4vw] top-[55px] w-24 lg:left-[66vw]">
            <SelectValue placeholder="Mês" />
          </SelectTrigger>
          <SelectContent className="bg-slate-950 text-white">
            <SelectItem value="Jan">Janeiro</SelectItem>
            <SelectItem value="Fev">Fevereiro</SelectItem>
            <SelectItem value="Mar">Março</SelectItem>
            <SelectItem value="Abr">Abril</SelectItem>
            <SelectItem value="Mai">Maio</SelectItem>
            <SelectItem value="Jun">Junho</SelectItem>
            <SelectItem value="Jul">Julho</SelectItem>
            <SelectItem value="Ago">Agosto</SelectItem>
            <SelectItem value="Set">Setembro</SelectItem>
            <SelectItem value="Out">Outubro</SelectItem>
            <SelectItem value="Nov">Novembro</SelectItem>
            <SelectItem value="Dez">Dezembro</SelectItem>
          </SelectContent>
        </Select>
      </Card>
    </div>
  );
};

export default Dashboard;
