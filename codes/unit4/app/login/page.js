"use client"
import React from "react";

export default function Login() {
    function login(e) {
        e.preventDefault();
        let name=e.target.username.value;
        sessionStorage.setItem("user", name);
        window.location.href="/dashboard";
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input name="username" placeholder="Enter name" required></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}