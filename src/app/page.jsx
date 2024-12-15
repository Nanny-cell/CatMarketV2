import { Carousel, Categories, Navbar, Sales } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 max-w-[1200px] w-full">
      <header className="flex flex-col gap-5" >
        <Navbar />
        <Carousel />
      </header>
      <Categories />
      <Sales />
    </main>
  );
}
