"use client"
import {useState, useEffect} from "react";

export default function Profile() {
    const [user, setUser]=useState("");
    useEffect(()=>{
        let name=sessionStorage.getItem("user");
        if(!name) {
            window.location.href="/login";
        }
        else {
            setUser(name);
        }
    }, []);
    function logout() {
        sessionStorage.removeItem("user");
        window.location.href="/login";
    }

    return (
        <div>
            <h1>Profile</h1>
            <h3>Welcome, {user}</h3>
            <a href="/dashboard">Go to Dashboard</a>
            <br/><br/>
            <button onClick={logout}>Logout</button>
        </div>
    )
}