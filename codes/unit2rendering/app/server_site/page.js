export default async function Products() {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return(
        <main>
            <h1>Products</h1>
            {data.products.map((item)=>(
                <p className="p-10" key={item.id}>
                    {item.id}
                    {item.title}
                </p>
            ))}
        </main>
    )
}