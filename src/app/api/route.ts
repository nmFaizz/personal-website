"use server";
import { getBlogPosts, BlogPost } from "@/contentful/blogPosts";
import { getTags, ContentfulTag } from "@/contentful/contentfulTags";

export interface ContentfulBlogData {
    posts?: BlogPost[],
    tags?: ContentfulTag[],
    message?: string    
}

export async function GET() {
    try {
        const posts: BlogPost[] = await getBlogPosts();
        return new Response(JSON.stringify(posts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error('Failed to fetch data:', err);

        return new Response(JSON.stringify({ message: "Failed to fetch data" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}