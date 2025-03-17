import Products from "@/components/Products/Products";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <div>
        <Products/>
      </div>
    </ClerkProvider>
  );
}
