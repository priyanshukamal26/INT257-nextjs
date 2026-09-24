import {Joan} from 'next/font/google'
import React from 'react'

let students=[{id:1, name:"ABC", age:20}, {id:2, name:"XYZ", age:23}];

export async function GET() {
    return Response.json(students);
}

