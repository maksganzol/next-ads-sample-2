import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PostGrid } from "@/components/PostGrid";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PostGrid />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
