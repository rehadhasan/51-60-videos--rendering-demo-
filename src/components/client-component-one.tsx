"use client";

import React, {useState} from "react";

export const ClientComponentOne =  ({children}: {
    children: React.ReactNode;
})=> {
    const [name, setName] = useState("Client Component One");
    console.log(name);
    return(
        <div>
            <h1>Client Component One</h1>
            {children}
        </div>
    )
}