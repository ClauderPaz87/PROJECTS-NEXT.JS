import TableUsers from "../components/MainUsers/TableUsers";
import FormsUsers from "../components/MainUsers/FormsUsers";
import UserAdmin from "../components/MainUsers/UserAdmin"

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:flex w-full ">
      <TableUsers/>
      <FormsUsers/>
    </div>
  );
}
