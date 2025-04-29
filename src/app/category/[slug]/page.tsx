import { notFound } from "next/navigation";
import { Anton, JetBrains_Mono } from "next/font/google";

// Font import
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const validCategories = [
  "men-fashion",
  "women-fashion",
  "glasses",
  "jewelry",
  "hats-caps",
  "handbags",
  "backpacks",
  "men-shoes",
  "women-shoes",
  "accessories",
  "watches",
];

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { slug } = params;

  // Optional: Validate route
  if (!validCategories.includes(slug)) return notFound();

  return (
    <div className="p-10 mt-24">
      <h1 className={`text-4xl font-bold capitalize ${anton.className}`}>
        {slug.replace("-", " ")}
      </h1>
      <p className="mt-4">
        This is the {slug.replace("-", " ")} category page.
      </p>
    </div>
  );
};

export default CategoryPage;
