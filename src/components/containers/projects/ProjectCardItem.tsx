import Image from "next/image"
import Link from "next/link"
import Typography from "../../Typography"

import { ProjectPost } from "@/contentful/projectsPosts"
import NextImage from "@/components/NextImage"

export default function ProjectCardItem({
    name,
    thumbnail,
    stacks,
    slug
}: ProjectPost) {

    return (
      <Link href={`/projects/${slug}`}>
        <div 
          className="transition-all h-full pb-12 ease-in-out group scale-[1] hover:scale-[1.02] space-y-3" 
        >
          <NextImage 
            src={`https:${thumbnail!.src}`}
            width={thumbnail!.width}
            height={thumbnail!.width}
            alt={thumbnail!.alt!}
            classNames={{image: "object-cover"}}
          />

          <div className="space-y-2">
            <Typography element="p">
              {name}
            </Typography>

            <div className="flex gap-2 flex-wrap text-main-silver">
              {stacks.map(data => 
                <div key={data} className="rounded-sm">
                  <Typography size="custom" className="text-[13px] border-b-[1px] border-green-dark">
                    #{data}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    )
}