"use client"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
export default function ContactLink() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <span onClick={()=> router.replace("/contact")} className="text-2xl font-bold cursor-pointer mb-1" style={pathname === "/contact" ? {borderBottom: "#0500FF solid 4px", marginBottom: "0"} : {}}>Contact</span>
    )
}