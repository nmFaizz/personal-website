"use client"
import * as React from "react"
import Image, { ImageProps } from "next/image"

import clsx from "clsx"

type NextImageProps = {
    alt: string,
    classNames?: {
        image: string
    }
} & ( 
    | { width: number; height: number } 
    | { fill?: true; width?: number; height?: number}
) & ImageProps

type ImageStatus = "loading" | "loaded"

export default function NextImage({
    src,
    width,
    height,
    alt,
    className,
    classNames,
    fill,
    ...rest
}: NextImageProps) {
    const [status, setStatus] = React.useState<ImageStatus>("loading")

    return (
        <figure className={className}>
            <Image
                className={clsx(
                    classNames?.image,
                    `${status === "loading" ? "blur-[20px]" : "blur-0"}`,
                    "transition-all ease-in-out"
                )}
                src={src}
                width={width}
                height={height}
                alt={alt}
                fill={fill}
                onLoad={() => setStatus("loaded")}
                {...rest}
            />
        </figure>
    )
}