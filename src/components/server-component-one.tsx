import fs from "fs";
import {ServerComponentTwo} from "@/components/server-component-two";

export const ServerComponentOne =  ()=> {
    fs.readFileSync("src/components/server-component-one.tsx", "utf8");
    console.log("Server Component One");
    return(
        <div>
            <h1>Server Component One</h1>
            <ServerComponentTwo/>
        </div>
    )
}