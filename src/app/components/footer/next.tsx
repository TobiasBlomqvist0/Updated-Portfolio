"use client"
import { useRouter } from "next/navigation"
export default function NextBtn({page}:any) {
    const router = useRouter()
    function nextClick() {
        router.replace(`/${page}`)
    }

    return (
        <button onClick={nextClick} className="p-2 pl-8 pr-8 m-5 text-xl font-bold flex hover:text-2xl" style={{border: "#0500FF solid 2px", color: "#0500FF", borderRadius: "12px"}}>Next</button>
    )
}