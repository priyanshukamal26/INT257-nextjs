"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
    const [data, setData]=useState(null);
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .catch((error)=>console.error("Error:", error));
    }, [])
    if(!data) {
        return <div>Loading.....</div>
    }
    return (
        <main>
            {data.products.map((item)=>(
                <p key={item.id}>{item.title}</p>
            ))}
        </main>
    )
}