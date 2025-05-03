"use client";
export default function SeedButton() {
  const seed = async () => {
    const res = await fetch("/api/seed_products", { method: "POST" });
    const data = await res.json();
    alert(data.message || data.error);
  };
  return (
    <button onClick={seed} className="mt-24 p-4 bg-black text-white">
      Seed Products
    </button>
  );
}
