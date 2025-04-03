import NavLinks from "@/components/nav-links";
import NavSearch from "@/components/nav-search";

export default function Navbar() {
    console.log("Navbar");
    return (
        <div>
            <h1>Navbar</h1>
            <NavLinks/>
            <NavSearch/>
        </div>
    )

}