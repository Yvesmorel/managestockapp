import { signOut } from "@/auth";
import NavBar from "./nav-bar";
import { CircleStackIcon } from "@heroicons/react/16/solid";
export default function SideNav() {
  return (
    <div className="flex h-full flex-col items-center px-2 py-2 w-[180px]">
      <div className="font-semibold h-[52px] w-full  flex items-center text-black rounded-md mb-2 relative p-2">
        <div className="flex gap-2 ">
          <CircleStackIcon className="h-[22px] w-[22px] text-[#1e7376]" />
          <p>G-</p>
          <p className="text-[#1e7376]">STOCK</p>
        </div>
      </div>

      <div className="flex flex-col flex-1 w-full justify-between">
        <NavBar />
        <div className="w-full flex-1 my-2"></div>
        <p className="text-[10px] text-center font-regular">
          G-STOCK version-1.0.0
        </p>
      </div>
    </div>
  );
}
