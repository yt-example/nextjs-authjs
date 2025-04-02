import { User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User & { role: string };
  }
}

declare module "next-auth/jwt" {
  type JWT = User & { role: string };
}
