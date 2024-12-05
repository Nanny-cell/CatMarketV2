import { Carousel } from "@/components/Carousel";
import { Categories } from "@/components/Categories";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="max-w-7xl flex flex-col gap-5 ">
      <header className="flex flex-col gap-5" >
        <Navbar />
        <Carousel />
      </header>
      <Categories />
    </main>
  );
}
