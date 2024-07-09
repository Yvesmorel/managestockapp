import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = nextUrl.pathname === "/";
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        // If the user is trying to access the dashboard and is logged in, allow access
        if (isLoggedIn) {
          return true;
        }
        // If the user is trying to access the dashboard and is not logged in, redirect to login
        return false; 
      } else if (isOnLoginPage) {
        // If the user is on the login page and is already logged in, redirect to dashboard
        if (isLoggedIn) {
          return Response.redirect(new URL("/dashboard", nextUrl));
        }
      }
      // For all other cases, allow access
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
