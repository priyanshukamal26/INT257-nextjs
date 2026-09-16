import React from "react";


export default function Contact() {
    async function addStudent(fromData) {
        "use server"
        return console.log("Form Submitted");
    }
    return (
        <form action={addStudent} className="p-3 flex flex-col gap-4 w-[400px] mx-auto mt-10 border">
            <h1>Student Form</h1>
            <input type="text" placeholder="Name" className="border p-2" />
            <input type="text" placeholder="Email" className="border p-2" />
            <input type="text" placeholder="Address" className="border p-2" />
            <input type="text" placeholder="Phone" className="border p-2" />
            <button type="Submit"/>Submit
        </form>
    )
}