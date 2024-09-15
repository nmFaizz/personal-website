import Typography from "@/components/Typography";
import BlogCard from "@/components/containers/blog/BlogCardItem";
import ContentCardList from "@/components/containers/ContentCardList";
import ProjectCardItem from "@/components/containers/projects/ProjectCardItem";
import Button from "@/components/buttons/Button";
import Aos from "@/components/AOS";
import UnstyledButton from "@/components/buttons/UnstyledButton";
import NextImage from "@/components/NextImage";

import { BlogPost, getLatestPost } from "@/contentful/blogPosts";
import { getLatestProjects } from "@/contentful/projectsPosts";

import { 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiNextdotjs, 
  SiTailwindcss,
  SiReact,
  SiGmail 
} from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";

import Marquee from "react-fast-marquee";

const MAX_POSTS = 3;

export default async function Home() {
  const blogPosts = await getLatestPost(MAX_POSTS);
  const projectsData = await getLatestProjects(MAX_POSTS);

  
  return (
    <>
      <main className="page-max-width min-h-[200vh] relative overflow-hidden space-y-16 py-12">
        <section className="space-y-24">
          <div className="max-w-[566px] flex flex-col gap-5 items-center text-center m-auto">
            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up'
            }}>
              <Typography size="xl" element="h1">
                Nur Muhammad Faiz
              </Typography>
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 100
            }}>
              <Typography>
                Self-Taught Software Engineer
              </Typography> 
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 200
            }}>
              <Typography className="text-main-silver">
                A Learner who&apos;s diving deep into software development. 
                Everyday at least 1% working with React and Typescript.
              </Typography>
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 300
            }}>
              <Typography className="text-main-silver">
                Jl. Karimun No 18 GKB, Gresik, Jawa Timur, Indonesia
              </Typography>
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 400
            }}>
              
              <UnstyledButton
                  type="link"
                  href="https://itsacid-my.sharepoint.com/:b:/g/personal/5053231008_student_its_ac_id/EdT3LGCKpVVPnbIdsyg73ZYBvTmekCmY4nNGNkHGXfz8TQ?e=pZoVWm"
                  leftIcon={IoDocumentText}
              >
                  Download CV
              </UnstyledButton>
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 500
            }}>
              <Button
                type="link"
                size="lg"
                href="/about"
              >
                More About Me
              </Button>
            </Aos>

            <Aos options={{
              duration: 5000,
              animatedClassName: 'fade-up',
              delay: 600
            }}>
              <div className="flex flex-wrap justify-center gap-5 text-main-silver text-size-sm">
                {socials.map((social, index) => (
                  <UnstyledButton
                    type="link"
                    leftIcon={social.icon}
                    href={social.href}
                    key={index}
                  >
                    {social.name}
                  </UnstyledButton>
                ))}
              </div>
            </Aos>
          </div>
          
          <Aos options={{
            animatedClassName: 'fade-up',
            duration: 5000,
            delay: 700
          }}>
            <div className="flex justify-center overflow-hidden">
              <div className="flex justify-center gap-2 md:gap-4 w-[1200px]">
                {heroImages.map((image, i) => (
                  <NextImage
                    key={i}
                    src={image.src}
                    fill
                    alt={image.alt}
                    className="w-[190px] sm:w-[290px] min-h-[220px] sm:min-h-[320px] relative"
                    classNames={{image: "rounded-xl object-cover"}}
                    priority
                  />
                ))}
              </div>
            </div>
          </Aos>

          <Marquee>
            {stacks.map((stack, i) => (
              <div key={i} className="flex items-center gap-3 ml-4 base-border bg-secondary-black rounded-md px-4 py-2 md:py-3">
                <span className="text-xl md:text-3xl">
                  {stack.icon}
                </span>
                <span className="text-size-lg">
                  {stack.name}
                </span>
              </div>
            ))}
          </Marquee>
        </section>


        <ContentCardList
          title="Articles"
          subtitle="I write about tech, hobbies and thoughts."
          type="articles"
        >
          {blogPosts.map((post: BlogPost, i) =>
            <BlogCard key={i} {...post} />
          )}
        </ContentCardList>

        <ContentCardList
          title="Projects"
          subtitle="Selected projects that I've worked on."
          type="projects"
        >
          {projectsData.map((project, i) => (
            <ProjectCardItem key={i} {...project} />
          ))}
        </ContentCardList>
      </main>
    </>
  );
}

const socials = [
  {
      name: "@nmfaizz",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/nmfaizz"
  },
  {
      name: "@nmfaizz__",
      icon: FaInstagram,
      href: "https://www.instagram.com/nmfaizz__" 
  },
  {
      name: "@nmFaizz",
      icon: FaGithub,
      href: "https://www.github.com/nmFaizz"
  }, 
  {
      name: "Gmail",
      icon: SiGmail,
      href: "mailto:mfaiz582@gmail.com"
  }
]

const heroImages = [
  {
    src: "/images/unsplash-abstract.jpg",
    alt: "Abstract art"
  },
  {
    src: "/images/nur-muhammad-faiz.JPG",
    alt: "Me!"
  },
  {
    src: "/images/unsplash-abstract-2.jpg",
    alt: "Abstract art"
  },
]

const stacks = [
  {
    name: "React",
    icon: <SiReact />
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />
  },
  {
    name: "Typescript",
    icon: <SiTypescript />
  },
  {
    name: "Javascript",
    icon: <SiJavascript />
  },
  {
    name: "HTML",
    icon: <SiHtml5 />
  },
]