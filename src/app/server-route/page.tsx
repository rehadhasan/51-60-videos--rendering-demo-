import {ServerFunction} from "@/utils/server-utils";

export default function ServerRoute() {
    const result = ServerFunction();
    return(
        <div>
            Server Route {result}
        </div>
    )
}