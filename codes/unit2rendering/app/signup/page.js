"use client"
import React, {useActionState} from "react";
import { SignUpData } from "./action";

export default function Signup() {
    const [student, formAction]=useActionState(SignUpData, null)
    return (
        <div>
            <h1 className="m-2">SignUp</h1>
            <form action={formAction}>
                 <input type="text" name="name" placeholder="Enter Name" className="border m-2" /><br />
                 <input type="text" name="email" placeholder="Enter Email" className="border m-2" /><br />
                 <input type="text" name="password" placeholder="Enter Password" className="border m-2" /><br />
                 <input type="text" name="cpassword" placeholder="Enter Confirm Password" className="border m-2" /><br />
                 <button type="Submit" name="btn" className="border m-2">Submit</button>
                 
                 {student &&  (
                    <div>
                        <p>{student.name}</p> 
                        <p>{student.email}</p> 
                        <p>{student.password}</p> 
                        <p>{student.cpassword}</p> 
                    </div>
                 )}
            </form>
        </div>
    )
}