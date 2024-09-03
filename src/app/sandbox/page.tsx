import Button from "@/components/buttons/Button";
import Typography from "@/components/Typography";
import { FaHome } from "react-icons/fa";
import UnstyledButton from "@/components/buttons/UnstyledButton";

import Marquee from "react-fast-marquee";

export default function SandboxPage() {
    return (
        <main className="page-max-width">
            <section className="py-24">
                <div className="base-border-b pb-5">
                    <Typography
                        element="h1"
                        size="xl"
                    >
                        Typography
                    </Typography>
                </div>

                <div>
                    <Typography
                        element="p"
                        size="2xl"
                    >
                        Text 2XL
                    </Typography>
                    <Typography
                        element="p"
                        size="xl"
                    >
                        Text XL
                    </Typography>
                    <Typography
                        element="p"
                        size="md"
                    >
                        Text MD
                    </Typography>
                    <Typography
                        element="p"
                        size="base"
                    >
                        Text BASE
                    </Typography>
                </div>
            </section>

            <section>
                <div className="base-border-b pb-5">
                    <Typography
                        element="h1"
                        size="xl"
                    >
                        Buttons
                    </Typography>
                </div>

                <div className="mt-12 flex flex-wrap gap-5">
                    <Button 
                        type="button"
                        size="md"

                    >
                        Click Me
                    </Button>

                    <Button
                        type="link"
                        size="lg"
                        href="/sandbox"
                    >
                        Link Button
                    </Button>

                    <Button
                        type="button"
                        size="sm"
                        leftIcon={FaHome}
                    >
                        With Icon
                    </Button>

                    <UnstyledButton
                        type="button"
                        leftIcon={FaHome}
                    >
                        Borderless
                    </UnstyledButton>
                </div>
            </section>
            
            <section>
                <div className="base-border-b pb-5">
                    <Typography
                        element="h1"
                        size="xl"
                    >
                        Marquee
                    </Typography>
                </div>

                <div>
                    <Marquee>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            NEXT JS
                        </div>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            Tailwind CSS
                        </div>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            React JS
                        </div>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            Typescript
                        </div>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            Javascript
                        </div>
                        <div className="mr-12 bg-main-white text-main-black px-4 rounded-sm">
                            React-Query
                        </div>
                    </Marquee>
                </div>
            </section>
        </main>
    )
}