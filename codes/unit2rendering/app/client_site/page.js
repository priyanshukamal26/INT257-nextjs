"use client"

import React, {useState} from "react"

export default function page() {
    const [count, setCount]=useState(0)
    return(
        <div>
            <h1 className="text-2xl">{count}</h1>
            <button onClick={()=>(setCount(count+1))}>Click Me</button>
        </div>
    )
}