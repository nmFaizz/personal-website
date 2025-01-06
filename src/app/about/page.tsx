import { Metadata } from "next"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

import Typography from "@/components/Typography"
import Button from "@/components/buttons/Button"
import Aos from "@/components/AOS"
import NextImage from "@/components/NextImage"

export const metadata: Metadata = {
    title: "About",
    description: "Discover more about me as a software engineering enthusiast through my acitivities, my gears, and more!",
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
                        Hello, I&apos;m Faiz. I started my developer journey in 2023, 
                        and I&apos;m excited to continously learn and grow in the field of software engineering, 
                        building scalable, maintainable, and robust applications.
                    </Typography>

                    <Typography className="text-main-silver">
                        Beside my passion in software engineering, I also do visual design, 
                        creating engaging content, and marketing strategy.
                    </Typography>

                    <Typography size="base" className="text-main-silver">
                        I am pursuing my bachelor degree in Software Engineering at 
                        Institut Teknologi Sepuluh Nopember (ITS), Surabaya. 
                        I manage to balance my academic and non academic activities, 
                        such as joining software house, event committees, and more.
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