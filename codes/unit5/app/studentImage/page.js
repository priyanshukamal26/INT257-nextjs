// import Image from "next/image";
// import React from "react";

// export default function studentPage() {
//     return <div>
//         <h1>Student</h1>
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//         <Image src="/imageHash.jpeg" alt="Student" height={300} width={300} />
//     </div>
// }

import Image from 'next/image'
export default function ImagePage() {
    return (
        <div>
            <h1>Remote Image Optimization</h1>
            <Image src='https://backiee.com/static/wallpapers/456x257/278140.jpg'
                alt='Nature'
                height={300}
                width={500}
            />
        </div>
    )
}