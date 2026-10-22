"use client"
import { useState, useEffect } from "react"

export default function Dashboard() {
    const [user, setUser]=useState("");
    useEffect(()=>{
        let name=sessionStorage.getItem("user");
        if(name){
            setUser(name);
        }
        else {
            window.location.href="/login";
        }
    }, []);
    function logout() {
        sessionStorage.removeItem("user");
        window.location.href="/login";
    }
    return (
        <div>
            <h1>DashBoard</h1>
            <h3>Welcome, {user}</h3>
            <a href="/profile">Go to Profile</a>
            <br/><br/>
            <button onClick={logout}>Logout</button>
        </div>
    )
}