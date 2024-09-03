import ProjectsCardList from "@/components/containers/projects/ProjectsCardList"
import Typography from "@/components/Typography"
import Aos from "@/components/AOS"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Projects",
    description: "A collection of projects that I have worked on."
}

export default async function ProjectsPage() {
    return (
        <main className="page-max-width py-12">
            <Aos options={{
                duration: 5000,
                animatedClassName: 'fade-up'
            }}>
                <div>
                    <Typography
                        size="xl"
                        element="h1"
                    >
                        Projects
                    </Typography>
                    <Typography
                        size="base"
                        className="text-main-silver"
                    >
                        Selected Projects that im proud of.
                    </Typography>
                </div>
            </Aos>

            <Aos options={{
                duration: 1000,
                animatedClassName: 'fade-up',
                delay: 100
            }}>
                <ProjectsCardList />
            </Aos>
        </main>
    )
}