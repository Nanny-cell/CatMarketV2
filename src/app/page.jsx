import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
        <Carousel />
      </header>
    </main>
  );
}
