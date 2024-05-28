import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-[5rem]">
      <Header />
      <Hero />
    </main>
  );
}
