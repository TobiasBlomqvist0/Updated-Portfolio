"use client"

import { useState } from "react"

export default function Project() {
    const [name, setName] = useState("Project name")
    const [imageUrl, setImageUrl] = useState("")
    return (
        <div className="flex flex-col h-full items-center">
            <h2 className="m-8 text-xl">{name}</h2>
            <div className=" w-full h-2/4 bg-gray-400 flex">
                <button><span className="m-2 font-bold text-2xl">&lt;</span></button>
                <img className="w-full h-full" src={``} alt="" />
                <button><span className="m-2 font-bold text-2xl">&gt;</span></button>
            </div>
        </div>
    )
}