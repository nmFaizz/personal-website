import Typography from "@/components/Typography"
import ActivitiesList from "@/components/containers/about/ActivitiesList"
import Button from "@/components/buttons/Button"
import TechstackList from "@/components/containers/about/TechstackList"
import Aos from "@/components/AOS"
import NextImage from "@/components/NextImage"

import { Metadata } from "next"

import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5";
import UnstyledButton from "@/components/buttons/UnstyledButton"

export const metadata: Metadata = {
    title: "About",
    description: "Discover more about me as a software engineering enthusiast through my acitivities, my gears, and more!",
    openGraph: {
        url: "https://nmfaizz.vercel.app/about",
        siteName: "Nur Muhammad Faiz",
        images: [
            {
                url: "https://nmfaizz.vercel.app/images/nur-muhammad-faiz.JPG",
                width: 800,
                height: 600,
                alt: "Nur Muhammad Faiz"
            },
        ],
        locale: "en_US",
        type: "profile",
    }
}

export default async function AboutPage() {
    
    return (
        <main className="page-max-width-sm py-12 space-y-12">
            <section className="">
                <Typography size="xl" element="h1">
                    About
                </Typography>
                
                <div>
                    <div className="flex justify-center gap-5 my-12">
                        <div className="overflow-hidden">
                            <Aos options={{
                                duration: 1000,
                                animatedClassName: 'fade-up'
                            }}>
                                <NextImage 
                                    src="/images/nur-muhammad-faiz.JPG"
                                    fill
                                    alt="Me!"
                                    className="relative w-[120px] h-[120px] rounded-full overflow-hidden"
                                    classNames={{image: "object-cover"}}
                                />
                            </Aos>
                        </div>

                        <div className="overflow-hidden">
                            <Aos options={{
                                duration: 1000,
                                animatedClassName: 'fade-up'
                            }}>
                                <NextImage 
                                    src="/images/nur-muhammad-faiz.JPG"
                                    fill
                                    alt="nur muhammad faiz"
                                    className="relative w-[120px] h-[120px] overflow-hidden rounded-full"
                                    classNames={{image: "object-cover grayscale"}}
                                />
                            </Aos>
                        </div>

                    </div>

                    <div className="overflow-hidden">
                        <Aos options={{
                            duration: 1000,
                            animatedClassName: 'fade-up',
                            delay: 200
                        }}>
                            <Typography size="xl" element="h3" className="text-center">
                                Nur Muhammad Faiz
                            </Typography>
                        </Aos>
                    </div>
                </div>
                

                <div className="space-y-5 mt-12">
                    <Typography size="base" className="text-main-silver">
                        Hello, Im Faiz. I Just started my developer journey on 2023, 
                        and I&apos;m excited to learn more about the tech-related topics. 
                        Currently working with React Ecosystem and Typescript. I spend my free
                        time to learn new things and improve my skills. I never statisfied 
                        with my skills, so ill do continous learning and become 
                        life-long learner.
                    </Typography>

                    <Typography className="text-main-silver">
                        Speaking about my interest, i love to play games,
                        reading fiction novels or article, listening to music, and code!.
                        Game is also my part of motivation to learn programming.
                    </Typography>

                    <Typography size="base" className="text-main-silver">
                        I am an undergraduate Software Engineering Student at 
                        Institut Teknologi Sepuluh Nopember (ITS).
                    </Typography>
                </div>

                <div className="flex justify-center flex-wrap gap-5 mt-12">
                    {socials.map((social, index) => (
                        <Button 
                            leftIcon={social.icon} 
                            type="link" 
                            size="lg" 
                            key={index} 
                            href={social.href} 
                            className=" hover:text-green-mint"
                        >
                            @{social.name}
                        </Button>
                    ))}
                </div>

                <div className="flex flex-col r mt-12 text-main-silver gap-5">
                    <Typography>
                        Jl. Karimun No 18 GKB, Gresik, Jawa Timur.
                    </Typography>

                    <UnstyledButton
                        type="link"
                        href="https://itsacid-my.sharepoint.com/:f:/g/personal/5053231008_student_its_ac_id/EthiYcQWzM5Lkh4NGJ0kx90BoQdpCkDLYoFMRAixG-1gsA?e=6nlnOo"
                        leftIcon={IoDocumentText}
                    >
                        Download CV
                    </UnstyledButton>
                </div>
            </section>

            <section>
                <Typography size="xl" element="h1">
                    Activities
                </Typography>

                <ActivitiesList />
            </section>

            <section>
                <Typography size="xl" element="h1">
                    Techstack
                </Typography>

                <TechstackList />
            </section>
        </main>
    )
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