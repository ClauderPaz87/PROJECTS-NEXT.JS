import CardFoods from "@/components/Foods/CardDelivery";
import Foods from "@/components/Foods/Foods";

export default function Home({searchParams }) {
  return (
    <div>
      <CardFoods/>
      <Foods/>
    </div>
  );
}
