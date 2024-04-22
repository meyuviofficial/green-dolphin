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
import Link from "next/link";
import { BiSolidUpArrowCircle } from "react-icons/bi";

import cert_data from "@/data/cert-data";

export default function Certifications() {
  return (
    <div
      id="certifications"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-sky-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        CERTIFICATIONS
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4 text-center">
        Certifications are very hard to obtain and good to flex. Here are some
        !!
      </p>
      <div className="grid grid-cols-1 auto-rows-max md:grid-cols-3 gap-8 px-48 min-h-max">
        {cert_data.map((card, index) => (
          <div key={index} className="flex">
            <Card className="hover:drop-shadow-2xl">
              <CardHeader>
                <CardTitle className="font-bold tracking-wider text-center hover:text-sky-600">
                  {card.header}
                </CardTitle>
                <CardDescription className="font-semibold tracking-wider text-center">
                  {card.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center">
                {card.icon}
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  {card.content.map((content, i) => (
                    <li key={i}>{content}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Badge variant="default" key={index}>
                  {card.footer}
                </Badge>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <div>
        <Button asChild variant={"ghost"} className="mt-8 rounded-full">
          <Link href="#">
            <BiSolidUpArrowCircle className="w-12 h-12 px-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
