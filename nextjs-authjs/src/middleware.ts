import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("in middleware: ", req.nextauth.token);
  },
  {
    callbacks: {
      authorized: async ({ req, token }) => {
        console.log("in authorized: ", token);
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "admin";
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
