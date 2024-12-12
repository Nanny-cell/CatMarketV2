import { Carousel } from "@/components/Carousel";
import { Categories } from "@/components/Categories";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 max-w-[1200px] w-full">
      <header className="flex flex-col gap-5" >
        <Navbar />
        <Carousel />
      </header>
      <Categories />
    </main>
  );
}
