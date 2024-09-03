import Typography from "@/components/Typography";
import Aos from "@/components/AOS";
import SearchBar from "@/components/SearchBar";
import BlogCardList from "@/components/containers/blog/BlogCardList";

import { Metadata } from "next";
import { getBlogPosts } from "@/contentful/blogPosts";

export const metadata: Metadata = {
    title: "Articles",
    description: "Read the latest articles about web development, programming, and more.",
}

export default async function ArticlePage({ 
    searchParams 
}: { searchParams: { search: string} }) {
    const posts = await getBlogPosts()
    const filteredPosts = searchParams.search ? (
        posts.filter(post => (
            post.title.toLowerCase().includes(searchParams.search.toLowerCase())
        ))
    ) : posts
    
    return (
        <main className="page-max-width py-12">
            <Aos options={{
                animatedClassName: "fade-up",
                once: true,
                duration: 5000
            }}>
                <div className="space-y-5">
                    <div className="mb-12">
                        <Typography
                            element="h1"
                            size="xl"
                        >
                            Articles
                        </Typography>
                        <Typography className="text-main-silver mb-5">
                            I write about tech, hobbies and thoughts.
                        </Typography>
                        
                        <SearchBar />  
                    </div>

                    {filteredPosts.length === 0 ? (
                        <div className="min-h-[150px] flex items-center justify-center">
                            <Typography
                                size="md"
                                className="text-main-silver"
                            >
                                Ooops... No match results.
                            </Typography>
                        </div>
                    ) : (
                        <Aos options={
                            {
                                animatedClassName: "fade-up",
                                once: true,
                                duration: 1000
                            }
                        }>
                            <BlogCardList posts={filteredPosts} />
                        </Aos>
                    )}
                </div>
            </Aos>
        </main>
    )
}