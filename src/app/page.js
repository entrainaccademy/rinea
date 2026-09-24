import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryTiles from "@/components/home/CategoryTiles";
import WhyAntiTarnish from "@/components/home/WhyAntiTarnish";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <div className="post-hero flex flex-col">
        <CategoryTiles />
        <FeaturedProducts />
        <WhyAntiTarnish />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
