"use client"
export default function ProjectLink() {
    const pathname = window.location.pathname
    return (
        <span onClick={()=> window.location.replace("/projects")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/projects" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Projects</span>
    )
}