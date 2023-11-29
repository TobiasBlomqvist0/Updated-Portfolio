"use client"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
export default function ProjectLink() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <span onClick={()=> router.replace("/projects")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/projects" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Projects</span>
    )
}