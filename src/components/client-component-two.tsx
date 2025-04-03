"use client";

import {useState} from "react";

export const ClientComponentTwo =  ()=> {
    const [name, setName] = useState("Client Component Two");
    console.log(name);
    return(
        <div>
            <h1>Client Component Two</h1>
        </div>
    )
}