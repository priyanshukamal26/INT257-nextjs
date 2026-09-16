import React from "react";

export default function city() {
    return (
        <div>
            <h1>Select City</h1>
            <form>
                <input type="text"></input>
                <select>
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Patna">Patna</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Madras">Madras</option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}