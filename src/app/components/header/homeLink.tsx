"use client"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
export default function HomeLink() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <span onClick={()=> router.replace("/")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Home</span>
    )
}