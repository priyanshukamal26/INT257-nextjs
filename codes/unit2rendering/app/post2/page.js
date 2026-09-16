"use client"

import React, { useActionState } from "react";
import studentData from "./action";

export default function page() {
    const [data, formAction] = useActionState(studentData, null);
    return (
        <div>
            <form action={formAction} className="m-4 border">
                <h1>Student Info</h1>
                <label>Name</label>
                <input type="text" name="name" className="m-4 border"/><br/>
                <label>Gender</label>
                <input type="radio" name="gender" value="Male" className="m-4 border"/>Male<br/>
                <input type="radio" name="gender" value="Female" className="m-4 border"/>Female<br/>
                <input type="submit" name="btn" className="m-4 border p-2"/><br/>
                {data && (
                    <div>
                        Student Name : {data.name}<br/>
                        Student Selected Gender : {data.gender}
                    </div>
                )}
            </form>
        </div>
    )
}