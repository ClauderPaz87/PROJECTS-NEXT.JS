import { LayoutDashboard, ShoppingBag } from "lucide-react";
import { SidebarGroup, SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";

const SideBarGroupGeral = () => {
  return (
    <div>
      <SidebarGroup className="text-white text-sm ">
        <SidebarMenuButton asChild>
          <Link className="flex flex-row" href="/CardDashboard">
            <span>
              <LayoutDashboard size={20} className="mr-5" />
            </span>
            Dashboards
          </Link>
        </SidebarMenuButton>
      </SidebarGroup>

      <SidebarGroup className="text-white text-sm flex flex-row ">
        <SidebarMenuButton asChild>
          <Link className="flex flex-row" href="/Trips">
            <span>
              <ShoppingBag size={20} className="mr-5" />
            </span>
            Viagens
          </Link>
        </SidebarMenuButton>
      </SidebarGroup>
    </div>
  );
};

export default SideBarGroupGeral;
