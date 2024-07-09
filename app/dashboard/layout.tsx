import SideNav from "@/components/ui/dashboard/side-nav";
import ProfilBar from "@/components/ui/dashboard/profil-bar";
import { NetworkStatusAlert } from "@/components/ui/network-status";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{overflow:"hidden"}} className="flex w-screen h-screen">
      <div className="w-auto  border">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col h-full">
        <ProfilBar />
        <div className="w-full h-full overflow-y-scroll bg-[#f8fafc]">{children}</div>
      </div>
      <NetworkStatusAlert/>
    </div>
  );
}

export default Layout;
