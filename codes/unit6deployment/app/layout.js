import "./globals.css";

export const metadata = {
  title: "Unit 6 Deployment",
  description: "A basic Next.js project with static and dynamic pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
