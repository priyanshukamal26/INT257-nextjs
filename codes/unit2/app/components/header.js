export default function header() {
    return(
        <main>
            <h1>This is my header page</h1>
            <nav className="flex justify-evenly hover-underline">
                <a href="\">Home</a>
                <a href="about">About</a>
                <a href="contact">Contact</a>
            </nav>
        </main>
    )
}