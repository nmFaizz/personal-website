import clsx from "clsx"
import Link from "next/link"
import { HTMLAttributes } from "react"
import { IconType } from "react-icons"

interface UntstyledButtonProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
    href?: string,
    type?: "button" | "link"
    scratchMode?: boolean,
    rightIcon?: IconType,
    leftIcon?: IconType,
}

export default function UnstyledButton({
    children,
    href = "",
    type = "button",
    className,
    scratchMode = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    ...rest
}: UntstyledButtonProps) {

    const classes = clsx(
        scratchMode && "w-full", 
        "flex items-center gap-1 h-max hover:text-green-dark border-b-[1px] border-green-dark",
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
