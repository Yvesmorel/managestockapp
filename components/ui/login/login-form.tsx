"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import { CircleStackIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import LoadingButton from "../loading-button";
const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className=" flex shadow-lg  p-1 rounded" action={dispatch}>
      <div className="w-100 h-auto flex justify-center items-center bg-white">
        <Image
          src="./login-illust.svg"
          alt="illustration"
          width={300}
          height={300}
        />
      </div>
      <Card className="w-full h-full max-w-md border-none shadow-none bg-[#e8f1f178]">
        <CardHeader className="space-y-1">
          <div className="flex gap-2 font-bold">
            <CircleStackIcon className="h-[22px] w-[22px] text-[#1e7376]" />
            <p>G-</p>
            <p className="text-[#1e7376]">STOCK</p>
          </div>
          <CardTitle className="text-2xl">Bienvenue</CardTitle>
          <CardDescription>
            Entrez votre email et mot de passe pour vous connecter à votre
            compte.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="border-none"
              id="email"
              type="email"
              name="email"
              placeholder="Entrez votre adresse email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              className="border-none"
              id="password"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col flex-end">
          {/* <Link
      href="#"
      className="mt-2 text-sm text-gray-500 hover:underline"
      prefetch={false}
    >
      Vous n'avez pas de compte? Inscrivez-vous
    </Link> */}
          <LoginButton />
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};
const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" disabled={pending} aria-disabled={pending}>
      {!pending && <p>Connctez vous</p>}
      {pending && <LoadingButton />}
    </Button>
  );
};

export default LoginForm;
