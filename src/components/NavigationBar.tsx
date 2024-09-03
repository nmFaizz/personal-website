"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Typography from "./Typography"

import { useEffect, useState } from "react"

export default function NavigationBar() {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0)
    const [visible, setVisible] = useState<boolean>(true)

    const path = usePathname()
    const rootPath = path.split("/")[1]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY

            if (prevScrollPos > currentScrollPos) {
                setVisible(true)
            } else {
                setVisible(false)
            }
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <header className={`sticky top-0  z-50 py-4`}>
            <div className="page-max-width flex items-center justify-center gap-12">
                <nav className={`${visible ? "translate-y-0" : "translate-y-[-300px]"} transition-base flex bg-secondary-black items-center gap-4 md:gap-8 base-border rounded-[50px] py-2 px-5 md:px-12`}>
                    {navs.map((nav, index) => (
                        <Link
                            key={index}
                            href={nav.href}
                        >
                            <Typography className={`${nav.href.replace("/", "") === rootPath ? "text-green-dark" : "text-main-silver"} hover:text-green-dark`}>
                                {nav.name}
                            </Typography>
                        </Link>    
                    ))}
                </nav>
                
            </div>
        </header>
    )
}

export const navs = [
    {
        name: "home",
        href: "/"
    },
    {
        name: "about",
        href: "/about"
    },
    {
        name: "articles",
        href: "/articles"
    },
    {
        name: "projects",
        href: "/projects"
    },
]