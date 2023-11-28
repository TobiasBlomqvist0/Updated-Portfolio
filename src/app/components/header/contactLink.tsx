"use client"

export default function ContactLink() {
    const pathname = window.location.pathname
    return (
        <span onClick={()=> window.location.replace("/contact")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/contact" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Contact</span>
    )
}