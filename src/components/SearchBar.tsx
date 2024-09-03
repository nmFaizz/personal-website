"use client"
import React from "react"

import { useSearchParams, useRouter, usePathname } from "next/navigation"

export default function SearchBar() {
    const [search, setSearch] = React.useState<string>("")
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()
    const debounceTimeout = React.useRef<NodeJS.Timeout | null>(null)

    function searchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value
        setSearch(value)

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
        }

        debounceTimeout.current = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            if (value === "") {
                params.delete("search")
            } else {
                params.set("search", value)
            }

            router.push(pathName + "?" + params.toString())
        }, 700) 
    }

    return (
        <div className="flex items-center bg-secondary-black base-border p-2 rounded-md">
            <input 
                type="text" 
                placeholder="Search article..." 
                className="bg-transparent w-full text-sm" 
                value={search}    
                onChange={searchHandler}
            />
        </div>
    )
}