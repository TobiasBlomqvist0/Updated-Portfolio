"use client"
export default function BackBtn({page}:any) {
    function backClick() {
        if(page === "home") window.location.replace("/")
        else window.location.replace(`/${page}`)
    }

    return (
        <button onClick={backClick} className="p-2 pl-8 pr-8 m-5 text-xl font-bold flex hover:text-2xl" style={{border: "#FF0000 solid 2px", color: "#FF0000", borderRadius: "12px"}}>Back</button>
    )
}