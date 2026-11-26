import Link from "next/link";
import { notFound } from "next/navigation";
import { messages } from "../../message";

export default async function Home({ params }) {
  const { lang } = await params;
  const content = messages[lang] || messages.en;

  if (!content) {
    notFound();
  }

  return (
    <div lang={lang}>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
    </div>
  );
}