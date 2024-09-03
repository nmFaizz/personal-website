import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";

import { FaHome } from "react-icons/fa";

export default function NotFound() {
    return (
        <main className="page-max-width">
            <section className="flex items-center justify-center min-h-[80vh]">
                <div className="flex justify-center items-center flex-col gap-5">
                    <Typography
                        element="h1"
                        size="xl"
                    >
                        ERROR |<span className="text-green-dark">404</span>
                    </Typography>
                    
                    <Typography
                        element="p"
                        size="md"
                    >
                       Page Not Found    
                    </Typography>

                    <Button 
                        type="link"
                        size="md"
                        href="/"
                        className="mt-5 flex items-center gap-2 base-border px-4 py-2 rounded-md">
                        Return to Home

                        <FaHome className="ml-2" />
                    </Button>
                </div>  
            </section>
        </main>
    )
}