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
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-red-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        SKILLS
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4">
        This section takes you through the list of skills that I possessed over
        the years
      </p>
      <div className="grid grid-cols-4 gap-4 justify-center items-center mx-auto px-4 py-8">
        {skills_data.map((skill, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <div
                key={index}
                className="w-full h-full rounded-full bg-zinc-800 flex justify-center items-center hover:drop-shadow-2xl hover:bg-red-200"
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
