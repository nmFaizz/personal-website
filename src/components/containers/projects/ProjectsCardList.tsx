import ProjectCardItem from "./ProjectCardItem"
import { getProjectsPosts } from "@/contentful/projectsPosts"


export default async function ProjectsCardList() {
    const projects = await getProjectsPosts()

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
            {projects.map((project, i) => (
                <ProjectCardItem key={i} {...project} />
            ))}
        </div>
    )
}