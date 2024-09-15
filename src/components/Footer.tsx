import Typography from "./Typography"

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="page-max-width">
            <div className="flex md:items-center flex-col md:flex-row gap-3 base-border-t w-full py-8">
                <div className="flex flex-wrap gap-2">
                    {socialMedia.map(({ username, link, icon }) => (
                        <Link 
                            href={link}
                            target="_blank"
                            key={username}
                            className="flex items-center gap-2 hover:text-green-dark text-size-md p-2 base-border rounded-md"
                        >
                            {icon}
                        </Link>
                    ))}
                </div>

                <Typography size="sm">
                    Nur Muhammad Faiz &copy; 2024
                </Typography>
            </div>
        </footer>
    )
}

const socialMedia = [
    {
        username: "Nur Muhammad Faiz",
        link: "https://www.linkedin.com/in/nur-muhammad-faiz/",
        icon: <FaLinkedin />
    },
    {
        username: "Github",
        link: "https://www.github.com/nmfaizz",
        icon: <FaGithub />
    },
    {
        username: "Instagram",
        link: "https://www.instagram.com/nmfaizz__/",
        icon: <FaInstagram />
    }
]