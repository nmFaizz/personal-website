import NotFound from "@/app/not-found"
import { siteConfig } from "@/constant/config"

import Typography from "@/components/Typography"
import NextImage from "@/components/NextImage"
import UnstyledButton from "@/components/buttons/UnstyledButton"
import { CiGlobe } from "react-icons/ci"

import { getProjectPost } from "@/contentful/projectsPosts"
import RichText from "@/contentful/RichText"


export async function generateMetadata({ params }: { params: { project: string } }) {
    const project = await getProjectPost({ slugParams: params.project })

    return {
        title: project?.name,
        description: project?.description!,
        openGraph: {
            url: `${siteConfig.url}/articles/${params.project}`,
            title: project?.name,    
            siteName: siteConfig.title,
            description: project?.name,
            images: [`${siteConfig.url}/api/og?slug=${params.project}`],
            type: "website",
            locale: "en_US",
          },
          twitter: {
            title: siteConfig.title,
            card: "summary_large_image",
            description: siteConfig.description,
            images: [`${siteConfig.url}/api/og?slug=${params.project}`],
          },
    }
}

export default async function ProjectPage({ params }: { params: { project: string } }) {  
    const project = await getProjectPost({ slugParams: params.project })

    if (!project) return <NotFound />

    return (
        <main className="page-max-width space-y-5"> 
            <NextImage 
                src={"http:" + project.thumbnail!.src!}
                width={project.thumbnail!.width!}
                height={project.thumbnail!.height!}
                alt={project.thumbnail!.alt!}
            />

            <div>
                <Typography size="xl" element="h1">
                    {project?.name}
                </Typography>

                {project.deployUrl && (
                    <UnstyledButton
                        type="link"
                        href={project.deployUrl}
                        className="border-b-[1px] border-green-dark mt-5"
                        leftIcon={CiGlobe}
                    >
                        Visit Site
                    </UnstyledButton>   
                )}
            </div>

            <article className="pb-1">
                <RichText document={project.description} className="text-size-lg" />
            </article>
        </main>
    )
}