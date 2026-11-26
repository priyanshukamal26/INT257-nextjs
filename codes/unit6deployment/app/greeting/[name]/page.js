export default async function GreetingPage({ params }) {
  const { name } = await params;

  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>This page reads its name from the URL.</p>
    </>
  );
}
