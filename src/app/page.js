import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoryTiles from "@/components/home/CategoryTiles";
import BrandStory from "@/components/home/BrandStory";
import WhyAntiTarnish from "@/components/home/WhyAntiTarnish";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <CategoryTiles />
      <BrandStory />
      <WhyAntiTarnish />
      <Newsletter />
      <Footer />
    </main>
  );
}
