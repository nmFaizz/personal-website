import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiVisualstudiocode, SiTypescript } from "react-icons/si";

export default function TechstackList() {
    return (
        <ul className="mt-5 gap-4 items-center">
            {techstackData.map((stack, i) => (
                <li key={i} className="cursor-pointer w-max list-disc list-inside hover:text-green-dark">
                    {stack.name}
                </li>
            ))}
        </ul>
    )
}

type TechstackData = {
    name: string,
    description: string,
}

const techstackData: Array<TechstackData> = [
    {
        name: "React.JS",
        description: "A JavaScript library for building user interfaces",
    },
    {
        name: "Next.JS",
        description: "A react framework for building production-ready applications",
    },
    {
        name: "Tailwind CSS",
        description: "CSS framework for building user interfaces",
    },
    {
        name: "Typescript",
        description: "Typed superset of JavaScript that compiles to plain JavaScript",
    },
    {
        name: "Postman",
        description: "API development tool",
    },
    {
        name: "React-Query",
        description: "A library for managing, caching, synchronizing and updating server state in React",
    },
    {
        name: "Figma",
        description: "A vector graphics editor and prototyping tool",
    }, 
]