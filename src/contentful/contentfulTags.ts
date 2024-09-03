import * as contentful from "contentful-management"

const { CONTENTFUL_MANAGEMENT_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env

export interface ContentfulTag {
    name: string,
    id: string
}

export async function getTags(): Promise<ContentfulTag[]> {
    const client = contentful.createClient({
        accessToken: CONTENTFUL_MANAGEMENT_ACCESS_TOKEN!
    })
    await client.getSpace(CONTENTFUL_SPACE_ID!)

    const tagsObject = await client.getSpace(CONTENTFUL_SPACE_ID!)
        .then((space) => space.getEnvironment("master"))
        .then((env) => env.getTags())
    const tags = tagsObject.items.map((tag) => ({ name: tag.name, id: tag.sys.id }))   
    
    return Promise.all(tags) as Promise<ContentfulTag[]>
}