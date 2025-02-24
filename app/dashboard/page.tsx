import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export default function Component() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-background px-4  sm:px-6 lg:px-8 animate-fade-in loginpagegradient">
      <div className="flex flex-col justify-center items-center mx-auto max-w-md text-center animate-scale-up">
        <div className="flex w-auto h-auto items-center justify-center gap-2 animate-bounce">
          <Image
            src="./login-illust.svg"
            alt="illustration"
            width={50}
            height={50}
          />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl ">
            Bienvenue !
          </h1>
        </div>

        <p className="mt-4 text-lg text-muted-foreground">
          Cliquez sur un onglet en haut à gauche pour commencer.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6">
        <Card className="bg-primary text-primary-foreground greenShadow border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Products</CardTitle>
            <CardDescription>
              Total number of products available
            </CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            <span>245</span>
          </CardContent>
        </Card>
        <Card className="bg-white text-secondary-foreground greenShadow border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Orders</CardTitle>
            <CardDescription>Total number of orders received</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            <span>1,523</span>
          </CardContent>
        </Card>
        <Card className="bg-white text-accent-foreground greenShadow border-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Requests</CardTitle>
            <CardDescription>Total number of customer requests</CardDescription>
          </CardHeader>
          <CardContent className="text-4xl font-bold">
            <span>789</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
