import { Home, Package, Settings2, ShoppingBag, Users } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const NavDesktop = () => {
  return (
    <div>
      <aside
        className="fixed inset-y-0 left-0 z-10 hidden w-14
        border-r bg-background sm:flex"
      >
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="flex w-9 h-9 shrink-0 items-center justify-center bg-primary
                    text-primary-foreground rounded-full"
            >
              <Package className="w-4 h-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Home className="w-5 h-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Início
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Package className="w-5 h-5" />
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Produtos
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span className="sr-only">Pedidos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Pedidos
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Users className="w-5 h-5" />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Clientes
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Settings2 className="w-5 h-5" />
                  <span className="sr-only">Configurações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                Configurações
              </TooltipContent>
            </Tooltip>

          </TooltipProvider>
        </nav>
      </aside>
    </div>
  );
};

export default NavDesktop;
