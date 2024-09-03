import clsx from "clsx"

type TypographyElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
type TextSize = "2xl" | "xl" | "md" | "sm" | "lg" | "base" | "custom"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    element?: TypographyElements,
    size?: TextSize,
    children: React.ReactNode
}

export default function Typography({
    element: Element = "p",
    size = "base",
    className,
    ...rest
}: TypographyProps) {
    return (
        <Element 
            {...rest}
            className={clsx(
                [
                    size === "2xl" && "text-size-2xl",
                    size === "xl" && "text-size-xl",
                    size === "md" && "text-size-md",
                    size === "sm" && "text-size-sm",
                    size === "base" && "text-size-base",
                    size === "lg" && "text-size-lg",
                ],
                className,
            )}
        >   

        </Element>
    )
}