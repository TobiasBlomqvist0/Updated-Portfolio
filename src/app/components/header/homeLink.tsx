"use client"
export default function HomeLink() {
    const pathname = window.location.pathname
    return (
        <span onClick={()=> window.location.replace("/")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Home</span>
    )
}