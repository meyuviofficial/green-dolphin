import { Button } from "./ui/button";
import Link from "next/link";
import skills_data from "@/data/skills-data";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-red-400 w-screen md:w-full"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        SKILLS
      </h1>
      <p className="text-sm md:text-md leading-relaxed mb-6 tracking-wide pt-4 mx-4 text-center">
        This section takes you through the list of skills that I possessed over
        the years
      </p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-4 justify-center items-center px-2 md:px-4 md:py-8">
        {skills_data.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <div
                key={index}
                className=" h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200"
              >
                <TooltipTrigger key={index}>{skill.icon}</TooltipTrigger>
                <TooltipContent key={index}>
                  <p>{skill.name}</p>
                </TooltipContent>
              </div>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div>
        <Button asChild variant={"ghost"} className="mt-8 rounded-full">
          <Link href="#certifications">
            <BiSolidDownArrowCircle className="w-12 h-12 px-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
