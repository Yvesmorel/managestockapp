import { signOut } from "@/auth";
import NavBar from "./nav-bar";
import { CircleStackIcon } from "@heroicons/react/16/solid";
export default function SideNav() {
  return (
    <div className="flex h-full flex-col items-center px-2 py-2 w-[180px]">
      <div className="font-semibold h-20 w-full bg-[#0070f2] text-white rounded-md mb-2 relative">
        <div className="absolute bottom-1 left-1 flex gap-2">
          <CircleStackIcon className="h-[22px] w-[22px]" />
          GESTOCK
        </div>
      </div>

      <div className="flex flex-col flex-1 w-full justify-between  ">
        <NavBar />
        <div className="w-full flex-1 bg-[#f9fafb] my-2"></div>
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="w-full flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ">
            Se deconnecter
          </button>
        </form>
      </div>
    </div>
  );
}
