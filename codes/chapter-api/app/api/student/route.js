let students=[{id:1, name:"ABC", age:20}, {id:2, name:"XYZ", age:23}];

export async function GET() {
    return Response.json(students);
}

export async function POST(request) {
    const data=await request.json();
    const newStudent={
        id: students.length +1,
        name: data.name,
        age: data.age
    }
    students.push(newStudent);
    return Response.json(newStudent, { status: 201 });
}