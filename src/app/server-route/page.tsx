import {ServerFunction} from "@/utils/server-utils";
import {ImageSlider} from "@/components/ImageSlider";

export default function ServerRoute() {
    const result = ServerFunction();
    // const clientResult = ClientSideFunction();
    // console.log(clientResult);
    return(
        <div>
            Server Route {result}
            <ImageSlider/>
        </div>
    )
}