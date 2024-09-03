import Typography from "@/components/Typography"

export default function ActivitiesList() {
    return (
        <div className="">
            {activitiesData.map((activity, index) => (
                <div className="base-border-b py-5 mt-5" key={index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <Typography size="base" element="h2">
                            {activity.role}
                        </Typography>
                        
                        <Typography size="base" element="p">
                            {activity.date}
                        </Typography>   
                    </div>
                    <Typography size="base" element="p">
                        {activity.institution}
                    </Typography>
                    <Typography size="base" element="p" className="text-main-silver mt-5">
                        {activity.description}
                    </Typography>

                    {activity.list && (
                        <div>
                            <Typography size="base" element="h3" className="mt-3">
                                List of Activities
                            </Typography>
                            <ul className="list-disc list-inside text-main-silver">
                                {activity.list.map((item, index) => (
                                    <li key={index} className="text-size-base">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

            ))}
        </div>
    )
}

type ActivitiesData = {
    role: string,
    institution: string,
    date: string,
    description: string,
    list?: Array<string> 
}

const activitiesData: Array<ActivitiesData> = [
    {
        role: "Marketing Team",
        institution: "Flexoo Software House HMTC",
        date: "Jun 2023 - Present",
        description: "Flexoo is a software house that focuses on developing software for clients, I have the oppurtinities to become marketing team and build the website for promotion",
        list: [
            "Build website for promotion using Next.js", 
            "Create social media content based on breif request", 
            "Brainstorming for marketing strategy using SCRUM business proccess"
        ]
    },
    {
        role: "Creative Design",
        institution: "Schematics ITS 2024",
        date: "Jun 2023 - Present",
        description: "Schematics is an annual event held by Department of Informatics Engineering ITS, I create design such as guidebook, PPTs, Certificates, social media content and more",
    },
    {
        role: "Front-end Web Developer",
        institution: "CATHODIC AMPP ITS SC",
        date: "Jun 2023 - Present",
        description: "CATHODIC is an event held by AMPP ITS SC that focuses on corrosion engineering and material protection, as a front-end web developer I build the website for the event and manage for the registration flow in front-end side",
    },
]