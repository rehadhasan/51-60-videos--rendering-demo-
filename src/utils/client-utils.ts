import "client-only";

export const ClientSideFunction = ()=>{
    console.log(
        "use window object," +
        "use localstorage"
    )
    return "client-result";
}