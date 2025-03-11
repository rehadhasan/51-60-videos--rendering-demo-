"use client"

import {useState} from "react";

export default function Dashboard() {
    const [name, setName] = useState("")
    console.log("Dashboard Client Component")
    return(
        <>
            <h1>Dashboard</h1>
            <input placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>Hello, {name}</p>
        </>
    )
}