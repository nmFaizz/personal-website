import Link from "next/link"

import NextImage from "@/components/NextImage"

import Typography from "../../Typography"
import { Document as RichTextDoc } from "@contentful/rich-text-types"
import { ContentImage } from "@/contentful/contentfulImage"

import { readingTime, getRichTextString } from "@/app/utils/readingTime"

import { IoIosTimer } from "react-icons/io";

interface BlogCardProps {
  slug: string,
  thumbnail: ContentImage | null,
  title: string,
  date: string,
  body: RichTextDoc,
  description: string
}

export default function BlogCard({
  slug,
  thumbnail,
  body,
  description,
  date,
  title,
}: BlogCardProps) {

  const readingTimeFormatted = readingTime(getRichTextString(body))

  return (
    <Link href={`/articles/${slug}`}>
      <div 
        className="base-border-b transition-all h-full ease-in-out pb-8 group scale-[1] hover:scale-[1.02] space-y-3 overflow-hidden" 
      >
        <NextImage 
          src={`https:${thumbnail!.src}`}
          width={thumbnail!.width}
          height={thumbnail!.height}
          alt={thumbnail!.alt!}
          priority
          classNames={{image: "rounded-md"}}
          className="bg-black w-full relative overflow-hidden"
        />
        
        <div className="space-y-2">
          <Typography
            element="h2"
            size="md"
            className=""
          >
            {title}
          </Typography>

          <div>
            <div className="flex items-center gap-1">
              <IoIosTimer />
              <Typography
                element="p"
                size="sm"
                className="border-b-[1px] border-green-dark"
              >
                {readingTimeFormatted} read
              </Typography>
            </div>
          </div>

          <div className="text-main-silver text-size-sm">
            {new Date(date).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
              day: "numeric"
            })}
          </div>
          
          <div className="line-clamp-2 text-main-silver text-size-sm">
            {description}
          </div>
        </div>
        
      </div>
    </Link>
  )
}