import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";
export default function ProfilBar() {
  return (
    <div className="flex items-center justify-between bg-background px-4 py-3 border border-bottom">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>GS</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium text-foreground">
          v-1.0.0~admin
        </div>
      </div>
      <form
      
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant="ghost" size="sm" className="hover:bg-[#e8f1f1] hover:text-[#1e7376]">
        <LogOutIcon className="mr-2 h-4 w-4" />
          Se deconnecter
        </Button>
      </form>
    </div>
  );
}
