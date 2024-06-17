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
const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form className="space-y-4" action={dispatch}>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col flex-end">
          <Link
            href="#"
            className="mt-2 text-sm text-gray-500 hover:underline"
            prefetch={false}
          >
            Don't have an account? Register
          </Link>
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
      Sign In
    </Button>
  );
};

export default LoginForm;
