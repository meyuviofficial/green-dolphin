import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import Link from "next/link";
import card_data from "@/data/about-data";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-green-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        ABOUT ME
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-48">
        {card_data.map((card, index) => (
          <div key={index} className="flex">
            <Card className="hover:drop-shadow-2xl">
              <CardHeader>
                <CardTitle className="font-bold tracking-wider text-center hover:text-green-500">
                  {card.header}
                </CardTitle>
                <CardDescription className="font-semibold tracking-wider text-center">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {card.content.map((content, i) => (
                    <li key={i}>{content}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  {card.footer.map((footer) => (
                    <Badge variant="default" key={index}>
                      {footer}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <Button asChild variant={"ghost"} className="mt-8 rounded-full">
          <Link href="#skills">
            <BiSolidDownArrowCircle className="w-12 h-12 px-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
