import Image from "next/image";
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
    </div>
  );
}
