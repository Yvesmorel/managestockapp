import SideNav from "@/components/dashboard/side-nav";

function Page() {
  return (
    <div className="w-full h-full flex-col">
      <SideNav />
        <p className="text-2xl">
            Welcome to manage stock app
        </p>
    </div>
  );
}

export default Page;
