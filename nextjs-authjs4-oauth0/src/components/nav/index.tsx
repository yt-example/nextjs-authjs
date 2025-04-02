"use client";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Nav() {
  const { user } = useUser();
  console.log(user);
  return (
    <nav>
      <ul>
        <li>
          {user ? (
            <Link href="/auth/logout">Sign out</Link>
          ) : (
            <Link href="/auth/login">Sign in</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
