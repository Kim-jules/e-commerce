import CategorySlider from "@/components/CategoryCard";
import NewsLetter from "@/components/NewsLetter";
import ProductGrid from "@/components/ProductGrid";
import ProductSlider from "@/components/ProductSlider";
import TrustedBrands from "@/components/TrustedBrands";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <ProductSlider />
      <CategorySlider />
      <ProductGrid />
      <NewsLetter />
      <TrustedBrands />
    </div>
  );
}
