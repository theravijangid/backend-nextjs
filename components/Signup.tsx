"use client"

import { signup } from "@/app/actions/user"
import { useState } from "react"

export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    return  (
        <div className="flex flex-col justify-center w-screen h-screen">
            <div className="flex  justify-center ">
                <div className="flex flex-col border-2 border-slate-200 p-12 rounded-md shadow-md">
                    <input onChange={(e) => setEmail(e.target.value)} className="p-2 mb-4 border-2 border-slate-400" type="text" placeholder="enter eamil" />
                    <input onChange={(e) => setPass(e.target.value)} className="p-2 mb-4 border-2 border-slate-400" type="password" placeholder="enter password" />
                    <button onClick={async () => {
                       
                        const res = await signup(email, password)
                        console.log(res) 
                    }} className="p-2 mb-4 border-2 bg-slate-700 font-bold text-white">Sign Up</button>
                </div>
            </div>  
        </div>
    )
}
