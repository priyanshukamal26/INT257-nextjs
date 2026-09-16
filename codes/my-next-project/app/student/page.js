// export default function Students() {
//     return (
//         <div className="p-5">
//             <p>This is a Student Data Page.</p>
//         </div>
//     )
// }

import {resolve} from "styled-jsx/css"

export default async function Student() {
    const New = await new Promise((resolve) =>
        setTimeout(resolve, 2000)
    );

    return (
        <main className="p-10">
            This is a student info page.
        </main>
    );
}