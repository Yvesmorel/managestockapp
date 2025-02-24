import SideNav from "@/components/ui/dashboard/side-nav";
import ProfilBar from "@/components/ui/dashboard/profil-bar";
import { NetworkStatusAlert } from "@/components/ui/network-status";
import NextTopLoader from "nextjs-toploader";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{overflow:"hidden"}} className="flex w-screen h-screen">
      <NextTopLoader
        color="#000000"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <div className="w-auto  ">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col h-full bg-white">
        <ProfilBar />
        <div className="w-full h-full overflow-y-scroll rounded bg-[#f4f8f8] customscrollBar">{children}</div>
      </div>
      <NetworkStatusAlert/>
    </div>
  );
}

export default Layout;
