import { MdArrowForwardIos } from "react-icons/md"

import Typography from "@/components/Typography"
import Aos from "../AOS"
import Button from "../buttons/Button"

interface ContentListProps {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    type: "articles" | "projects"
}

export default function ContentCardList({
    title,
    subtitle,
    children,
    type
}: ContentListProps) {
    return (
      <Aos options={{
        duration: 5000,
        animatedClassName: 'fade-up'
      }}>
        <section className="rounded-xl">
          <div className="space-y- max-w-[550px] flex-1">
            <Typography
              element="h1"
              size="xl"
            >
              {"{ " + title + " }"}
            </Typography>
            <Typography className="text-main-silver">
              {subtitle}
            </Typography>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8`}>
            {children}
          </div>

          <Button 
            type="link"
            href={`/${type}`}
            rightIcon={MdArrowForwardIos}
            size="lg"
            className="mt-5"
          >
              <Typography
                element="p"
                size="base"
              >
                View More {type}
              </Typography>
          </Button>
        </section>
      </Aos>
    )
}