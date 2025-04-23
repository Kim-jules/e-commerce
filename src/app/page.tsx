import Image from "next/image";
import NavBar from '../components/NavBar'
import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="px-20">
      Home Page
    </div>
  );
}
