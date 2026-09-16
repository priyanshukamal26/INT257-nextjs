export default async function StuentId({params}) {
    const {id}=await params;

    const students={
        101: "Rahul", 102: "Priya", 103: "Aman"
    };

    // return (
    //     <div>
    //         <h1>Student Details</h1>
    //         <h2>ID: {id}</h2>
    //         <h2>name: {students[id]}</h2>
    //     </div>
    // )

    if(id=="101") {
        return(
            <main>
                <h1>Student ID Present</h1>
            </main>
        )
    }
    else {
        return(
            <main>
                <h1>Student ID {id} Not Present</h1>
            </main>
        )
    }
}