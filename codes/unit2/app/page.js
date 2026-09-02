import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import Div02 from "./components/comp2";


export default function Home() {
  return (
    <main>
      <Header/>
      <div className="p-10">
        <p>This is a Home page.</p>
      </div>
      <Div02/>
    </main>
  );
}
