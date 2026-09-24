export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 p-5">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">College Notice Board</h1>
          <p className="mt-2 text-slate-600">Important updates for students</p>
        </header>
        <main className="mx-auto mt-8 max-w-2xl m-20">{children}</main>
      </body>
    </html>
  );
}