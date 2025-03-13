import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from "../ui/sidebar";
import SideBarGroupGeral from "./SideBarGroupGeral";
import SideBarGroupRegister from "./SideGroupRegister";

const SideBar = () => {
  return (
    <SidebarProvider >
      <Sidebar className="h-[87vh] absolute top-20 w-52 flex flex-col bg-slate-950 p-4">

        <SidebarHeader className="text-zinc-400 font-medium text-xs">Geral</SidebarHeader>

        <SidebarContent className="mt-2" >
            <SideBarGroupGeral />
        </SidebarContent>

        <SidebarHeader className="text-zinc-400 font-medium text-xs mt-6">Cadastro</SidebarHeader>

        <SidebarContent className="mt-2">
            <SideBarGroupRegister/>
        </SidebarContent>

      </Sidebar>
    </SidebarProvider>
  );
};

export default SideBar;
