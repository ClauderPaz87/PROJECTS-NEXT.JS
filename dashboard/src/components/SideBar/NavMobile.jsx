import { Home, Package, Package2, Settings2, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";

const NavMobile = () => {
  return (
    <div>
      <nav className="grid gap-6 text-lg font-medium">
        <Link href="#" 
        className="rounded-full flex h-10 w-10 bg-primary text-lg
        items-center justify-center text-primary-foreground md:text-base gap-4 ">
          <span className="sr-only" >Logo</span>
          <Package className="h-5 w-5 transition-all"/>
        </Link>

        <Link href="#" 
        className="flex items-center gap-4 px-2.5 text-muted-foreground
        hover:text-foreground">
          <Home className="h-5 w-5 transition-all"/>
          <span>Home</span>
        </Link>

        <Link href="#" 
        className="flex items-center gap-4 px-2.5 text-muted-foreground
        hover:text-foreground">
          <ShoppingBag className="h-5 w-5 transition-all"/>
           <span >Pedidos</span>
        </Link>

        <Link href="#" 
        className="flex items-center gap-4 px-2.5 text-muted-foreground
        hover:text-foreground">
          <Package2 className="h-5 w-5 transition-all"/>
          <span>Produtos</span>
        </Link>

        <Link href="#" 
        className="flex items-center gap-4 px-2.5 text-muted-foreground
        hover:text-foreground">
          <Users className="h-5 w-5 transition-all"/>
          <span>Clientes</span>
        </Link>

        <Link href="#" 
        className="flex items-center gap-4 px-2.5 text-muted-foreground
        hover:text-foreground">
          <Settings2 className="h-5 w-5 transition-all"/>
          <span >Configurações</span>
        </Link>
      </nav>
    </div>
  );
};

export default NavMobile;
