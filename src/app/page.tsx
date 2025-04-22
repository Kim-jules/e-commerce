import Image from "next/image";
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <div className="px-20">
      <NavBar />
      <h1>Hello world</h1>
    </div>
  );
}
