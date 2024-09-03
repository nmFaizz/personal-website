import { getBlogPost } from "@/contentful/blogPosts";
import { ImageResponse } from "@vercel/og";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get("slug") || "NOT FOUND" 
    const post = await getBlogPost({ slugParams: slug})
    const title = post ? post.title : "NOT FOUND"

    return new ImageResponse(
        (
            <div 
                style={{
                    backgroundColor: "#000000",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "3rem",
                }}
            >
                <div tw="bg-main-silver flex">
                    <h1 tw="font-bold text-7xl">{title}</h1>
                </div>
                
                <div tw="flex items-center">
                    <figure className="">
                        <img 
                            src="https://nmfaizz-rev3.vercel.app/images/nur-muhammad-faiz.JPG" 
                            alt="Nur Muhammad Faiz"
                            tw="w-24 h-24 rounded-full" 
                            style={{ objectFit: "cover" }}
                        />
                    </figure>

                    <div tw="flex flex-col ml-12 gap-0 ">
                        <h2 tw="text-4xl">Nur Muhammad Faiz</h2>
                        <p tw="mt-[-15px]">I write, design, and develop</p>
                    </div>
                </div>
            </div>
        ),
    )
}