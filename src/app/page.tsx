import Image from "next/image";
import NavBar from '../components/NavBar'
import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import ProductSlider from "@/components/ProductSlider";


export default function Home() {
  return (
    <div className="px-20">
      Home
      <ProductSlider />
    </div>
  );
}
