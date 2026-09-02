
export default function aboutLayout({children}) {
    return(
        <html>
            <body className="min-h-flex flex-col">{children}
                <footer className="bg-amber-600 text-amber-50 text-center">This is About Page</footer>
            </body>
        </html>
    )
}