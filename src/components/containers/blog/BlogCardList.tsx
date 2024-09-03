import BlogCard from "./BlogCardItem"
import { BlogPost } from "@/contentful/blogPosts"

export default async function BlogCardList({ posts }: { posts: BlogPost[] }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts?.map((post, i) => (
                <BlogCard key={i} {...post} />
            ))}
        </div>
    )
}