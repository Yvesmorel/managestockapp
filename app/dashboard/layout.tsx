import SideNav from "@/components/ui/dashboard/side-nav";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[200px]">
        <SideNav />
      </div>
      {children}
    </div>
  );
}

export default Layout;
