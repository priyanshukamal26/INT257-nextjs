export default async function Products() {
    const response = await fetch(
        "https://dummyjson.com/products"
    );
    const data=await response.json();
    return(
        <main>
            {data.products.map((item)=>(
                <p key={item.id}>{item.title}</p>
            ))}
        </main>
    )
}