
"use client"

export default function Error({error}) {
    return(
        <main>
            <h1>Something wrong in yout code.</h1>
            <h1>{error.message}</h1>
        </main>
    )
}