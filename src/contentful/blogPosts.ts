import { Document as RichTextDoc } from "@contentful/rich-text-types";
import { client } from "./contentfulClient";
import { contentfulImageParse, ContentImage } from "./contentfulImage";
import { type ImageAsset } from "./types/contentfulTypes";
import { TagLink } from "contentful";

export interface BlogPost {
    title: string,
    slug: string,
    body: RichTextDoc,
    date: string,
    thumbnail: ContentImage | null,
    tags: string[],
    description: string 
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const posts = await client.getEntries({
      content_type: 'blog',
      include: 2,
      order: ['-fields.publishDate'],
    });
  
    const blogPostsPromises = posts.items.map(async (post: any) => {
      return await getBlogPost({ slugParams: post.fields.slug }) as BlogPost;
    });
  
    return await Promise.all(blogPostsPromises);
}
  
export async function getBlogPost({ slugParams }: { slugParams: string }): Promise<BlogPost | null> {
    const blog = await client.getEntries({
        content_type: 'blog',
        include: 2,
        'fields.slug': slugParams
    })

    if (blog.total === 0) return null 

    const { blogContent, title, publishDate, thumbnail, slug, description } = blog.items[0].fields;

    return {
        body: blogContent as RichTextDoc,
        title: title as string,
        date: publishDate as string,
        slug: slug as string,
        thumbnail: contentfulImageParse(thumbnail as ImageAsset),
        tags: blog.items[0].metadata.tags.map((tag: { sys: TagLink}) => tag.sys.id),
        description: description as string
    }
}

export async function getLatestPost(MAX_POSTS: number): Promise<BlogPost[]> {
    const blogs = await getBlogPosts();
    
    return await blogs.slice(0, MAX_POSTS);
}