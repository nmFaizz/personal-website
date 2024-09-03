import NextImage from "@/components/NextImage";
import Typography from "@/components/Typography"
import { IoIosTimer } from "react-icons/io";

import { getBlogPost, BlogPost } from "@/contentful/blogPosts"
import RichText from "@/contentful/RichText"

import { readingTime, getRichTextString } from "@/app/utils/readingTime";
import NotFound from "@/app/not-found";

import { siteConfig } from "@/constant/config";

export async function generateMetadata({ params }: { params: { blog: string }}) {
    const post = await getBlogPost({ slugParams: params.blog })

    return {
        title: post?.title,
        description: post?.description!,
        openGraph: {
            url: `${siteConfig.url}/articles/${params.blog}`,
            title: post?.title,    
            siteName: siteConfig.title,
            description: post?.description,
            images: [`${siteConfig.url}/api/og?slug=${params.blog}`],
            type: "website",
            locale: "en_US",
          },
          twitter: {
            title: siteConfig.title,
            card: "summary_large_image",
            description: siteConfig.description,
            images: [`${siteConfig.url}/api/og?slug=${params.blog}`],
          },
    }
}

export default async function SingleArticlePage({ 
    params 
}: { 
    params: { blog: string }
}) {
    const post: BlogPost | null = await getBlogPost({ slugParams: params.blog })

    if (!post) return <NotFound />

    const dateOptions: Intl.DateTimeFormatOptions = {
        month: "long",
        year: "numeric",
        day: "numeric"
    }

    const datePublished = new Date(post!.date).toLocaleString("en-US", dateOptions)

    const readingTimeString = readingTime(getRichTextString(post!.body))
 
    return (
        <main className="page-max-width-sm py-3 overflow-hidden">
            {post && (
                <>
                    <div className="">
                        <NextImage 
                            src={"https:" + post.thumbnail?.src}
                            width={post.thumbnail?.width}
                            height={post.thumbnail?.height}
                            alt={post.thumbnail?.alt!}
                            priority
                            classNames={{image: "rounded-md md:rounded-lg"}}
                        />

                        <div className="py-4 text-center base-border-b">
                            <Typography
                                size="2xl"
                                element="h1"
                            >
                                {post.title}
                            </Typography>

                            <Typography
                                size="base"
                                element="p"
                                className="text-main-silver"
                            >
                                {datePublished} &#x2022; Nur Muhammad Faiz
                            </Typography>

                            <div className="flex gap-2 items-center text-[13px] md:text-[16px] mt-16">
                                <IoIosTimer className="text-xl" />
                                <Typography size="custom" className="border-b-[1px] border-green-mint">
                                    {readingTimeString} read
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <article className="py-8">
                        <RichText document={post.body} className="text-size-lg" />
                    </article>
                </>
            )}
        </main>
    )
}