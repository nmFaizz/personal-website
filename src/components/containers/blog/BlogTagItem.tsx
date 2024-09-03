"use client"
import { useState } from "react"
import Typography from "../../Typography"
import { MdArrowOutward } from "react-icons/md"
// import { useTagContext } from "./TagContext"

interface BlogTagItemProps {
    tag: string 
}

export default function BlogTagItem({ tag }: BlogTagItemProps) {
    const [isClicked, setIsClicked] = useState<boolean>(false)

    // const { toggleTag } = useTagContext()
    
    // function onTagClickHandler() {
    //     setIsClicked(!isClicked)
    //     toggleTag(tag)
    // }

    return (
        <div 
            className={`base-border ${isClicked ? "text-green-mint" : ""} h-max rounded-full px-3 py-0.5 flex gap-2 items-center cursor-pointer`}
            // onClick={onTagClickHandler}    
        >
            <Typography>
                {tag}
            </Typography>
            <MdArrowOutward className="inline" />       
        </div>
    )
}