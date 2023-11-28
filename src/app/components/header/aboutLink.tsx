"use client"
export default function AboutLink() {
    const pathname = window.location.pathname
    return (
        <span onClick={()=> window.location.replace("/about")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/about" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>About</span>
    )
}