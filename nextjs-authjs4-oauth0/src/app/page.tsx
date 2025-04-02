import Nav from "@/components/nav";
import { auth0 } from "@/lib/auth0";
import Link from "next/link";

export default async function Home() {
  const session = await auth0.getSession();
  return (
    <>
      <Nav />
      <h1>Hello</h1>
      <p>{session?.user?.name}</p>
      <Link href="/admin">Admin</Link>
    </>
  );
}
