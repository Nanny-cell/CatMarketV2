import { Carousel, Categories, Sales } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 w-full">
      <header className="flex flex-col gap-5" >
        <Carousel />
      </header>
      <Categories />
      <Sales />
    </main>
  );
}
