import Link from "next/link";
import Header from "../components/header";


export default function about() {
  return (
    <main className="m-10">
        <Header/>
        <div className="m-10">
            <p>This is an about page.</p>
        </div>
    </main>
  );
}
