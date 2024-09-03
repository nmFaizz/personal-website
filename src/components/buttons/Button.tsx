import clsx from "clsx"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { IconType } from "react-icons"

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
    href?: string,
    type?: "button" | "link"
    scratchMode?: boolean,
    rightIcon?: IconType,
    leftIcon?: IconType,
    size?: "lg" | "md" | "sm",
}

export default function Button({
    children,
    href = "",
    type = "button",
    size = "md",
    className,
    scratchMode = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    ...rest
}: ButtonProps) {

    const classes = clsx(
        [
            size === "lg" && "px-4 py-1 md:py-2 md:px-6",
            size === "md" && "px-2 py-0 md:px-4",
            size === "sm" && "px-2 py-1",
        ],
        
        scratchMode && "w-full", 
        "border-[1px] border-main-silver bg-secondary-black shadow-[0_20px_50px_rgba(0,_128,_0,_0.7)] rounded-md flex items-center gap-1 md:gap-3 h-max ",
        "hover:translate-y-[-2px] transition-all ease-in-out hover:text-green-mint",
        className
    )

    if (type === "link" && !href) {
        throw new Error("href is required when type is 'link'");
    }

    
    if (type === "button") {
        return (
            <button
                className={classes}
                {...rest}
            >
                {RightIcon && <RightIcon />}
                {children}
                {LeftIcon && <LeftIcon />}
            </button>
        )
    } else {    
        return (
            <Link 
                href={href}
                {...rest}
            >
                <button className={classes}>
                    {LeftIcon && <LeftIcon />}
                    {children}
                    {RightIcon && <RightIcon />}
                </button>
            </Link>
        )
    }
}
