import { getBlogPosts } from "@/contentful/blogPosts";

import { NextResponse } from "next/server";


export async function GET() {
    try {
        const posts = await getBlogPosts();

        return NextResponse.json(JSON.stringify(posts), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (err) {
        return NextResponse.json(JSON.stringify({ message: "Failed to fetch data" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}