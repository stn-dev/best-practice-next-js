import Image from "next/image";
import Link from "next/link";
import Button from "../app/components/Button/page"

export default function Home() {
  return (
    <main>
      <h1>this is the home page</h1>
      <Link href="/article" >article</Link>
      <br />
      <Link href="/dashboard" >dashboard</Link>
      <br />
      <Link href="/connexion" >connexion</Link>
      <br />
      <Link href="/inscription" >inscription</Link>
      <br />
      <Button />
    </main>
  );
}
