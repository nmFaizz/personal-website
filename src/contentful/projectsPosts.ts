import { client } from "./contentfulClient"
import { Document as RichTextDoc } from "@contentful/rich-text-types"
import { ContentImage } from "./contentfulImage"
import { contentfulImageParse } from "./contentfulImage"
import { ImageAsset } from "./types/contentfulTypes"

export interface ProjectPost {
    name: string,
    slug: string,
    description: RichTextDoc,
    thumbnail: ContentImage | null,
    stacks: string[],
    deployUrl: string
}

export async function getProjectsPosts(): Promise<ProjectPost[]> {
    const projectsPosts = await client.getEntries({
        content_type: 'projects',
        include: 2,
        order: ['fields.name']
    })

    
    const projectsPostsPromises = projectsPosts.items.map(async (post) => {
        return await getProjectPost({ slugParams: post.fields.slug as string }) as ProjectPost
    })
    
    return await Promise.all(projectsPostsPromises)
}

export async function getProjectPost({ slugParams }: { slugParams: string}): Promise<ProjectPost | null> {
    const projectPost = await client.getEntries({
        content_type: 'projects',
        include: 2,
        "fields.slug": slugParams
    })
    
    if (projectPost.total === 0) return null
    
    const { 
        name, 
        description, 
        thumbnail, 
        stacks, 
        slug, 
        deployUrl
    } =  projectPost.items[0].fields

    return {
        name: name as string,
        description: description as RichTextDoc,
        thumbnail: contentfulImageParse(thumbnail as ImageAsset),
        stacks: stacks as string[],
        slug: slug as string,
        deployUrl: deployUrl as string
    }
}