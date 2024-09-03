import Typography from "@/components/Typography";
import BlogCard from "@/components/containers/blog/BlogCardItem";
import ContentCardList from "@/components/containers/ContentCardList";
import ProjectCardItem from "@/components/containers/projects/ProjectCardItem";
import Button from "@/components/buttons/Button";
import Aos from "@/components/AOS";
import UnstyledButton from "@/components/buttons/UnstyledButton";
import NextImage from "@/components/NextImage";

import { BlogPost, getBlogPosts } from "@/contentful/blogPosts";
import { getProjectsPosts } from "@/contentful/projectsPosts";

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
} from "react-icons/si";

import Marquee from "react-fast-marquee";

const MAX_POSTS = 3;

export default async function Home() {
  function sliceData<T>(data: T[], max: number): T[] {
    return data.length > MAX_POSTS ? data.slice(0, 3) : data;
  }

  const blogPosts = await getBlogPosts();
  const slicedBlogPosts = await sliceData(blogPosts, MAX_POSTS);
  const projectsData = await getProjectsPosts();
  const slicedProjects = await sliceData(projectsData, MAX_POSTS);
  
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
              delay: 300
            }}>
              <div className="flex flex-wrap justify-center gap-5 text-main-silver text-size-sm">
                {socials.map((social, index) => (
                  <UnstyledButton
                    type="link"
                    leftIcon={social.icon}
                    href={social.href}
                    key={index}
                  >
                    @{social.name}
                  </UnstyledButton>
                ))}
              </div>
            </Aos>
          </div>
          
          <Aos options={{
            animatedClassName: 'fade-up',
            duration: 5000,
            delay: 400
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
          {slicedBlogPosts.map((post: BlogPost, i) =>
            <BlogCard key={i} {...post} />
          )}
        </ContentCardList>

        <ContentCardList
          title="Projects"
          subtitle="Selected projects that I've worked on."
          type="projects"
        >
          {slicedProjects.map((project, i) => (
            <ProjectCardItem key={i} {...project} />
          ))}
        </ContentCardList>
      </main>
    </>
  );
}

const socials = [
  {
      name: "nmfaizz",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/nmfaizz"
  },
  {
      name: "nmfaizz__",
      icon: FaInstagram,
      href: "https://www.instagram.com/nmfaizz__" 
  },
  {
      name: "nmFaizz",
      icon: FaGithub,
      href: "https://www.github.com/nmFaizz"
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
  }
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