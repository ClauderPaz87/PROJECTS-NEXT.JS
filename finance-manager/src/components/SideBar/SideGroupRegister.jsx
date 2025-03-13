import { BusFront, CarTaxiFront, Users2 } from "lucide-react";
import { SidebarGroup, SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";

const SideBarGroupRegister = () => {
  return (
    <div>
      <SidebarGroup className="text-white text-sm flex flex-row">
        <SidebarMenuButton asChild>
          <Link className="flex flex-row" href="/clientes">
            <Users2 size={20} className="mr-5" />
            Clientes
          </Link>
        </SidebarMenuButton>
      </SidebarGroup>

      <SidebarGroup className="text-white text-sm flex flex-row">
        <SidebarMenuButton asChild>
          <Link className="flex flex-row" href="/Drivers">
            <BusFront size={20} className="mr-5" />
            Motoristas
          </Link>
        </SidebarMenuButton>
      </SidebarGroup>

      <SidebarGroup className="text-white text-sm flex flex-row">
        <SidebarMenuButton>
          <Link className="flex flex-row" href="/taxi">
            <CarTaxiFront size={20} className="mr-5" />
            Taxistas
          </Link>
        </SidebarMenuButton>
      </SidebarGroup>
    </div>
  );
};

export default SideBarGroupRegister;
