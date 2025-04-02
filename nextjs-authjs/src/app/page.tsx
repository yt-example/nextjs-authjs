import Nav from "@/components/nav";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      <Nav />
      <h1>Hello</h1>
      <p>{session?.user?.name}</p>
      <Link href="/admin">Admin</Link>
    </>
  );
}
