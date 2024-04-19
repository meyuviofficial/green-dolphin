import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Car } from "lucide-react";

// bg-yellow-400 - for bg
export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col min-h-screen items-center pt-16 justify-center bg-yellow-400 ..."
    >
      {/* <Image
        alt="dev-bg"
        src="https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1] brightness-50 blur-sm"
      /> */}
      <Avatar className="w-32 h-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pt-8">
        HELLO, I'M YUVI !
      </h1>
      <div className="max-w-full px-96 mt-8">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I'm a Site Reliability Engineer with 5 years of experience in the
          field of DevOps and Cloud Computing. I have worked on various cloud
          platforms like AWS, Azure, and GCP. I have experience in managing and
          deploying applications on Kubernetes and Docker. I have worked on
          various CI/CD tools like Jenkins, GitLab CI, and GitHub Actions. I
          have experience in Infrastructure as Code tools like Terraform and
          CloudFormation. I have experience in monitoring tools like Prometheus,
          Grafana, and ELK Stack.
        </p>
      </div>
      <div>
        <Button asChild variant={"destructive"} className="mt-8 rounded-full">
          <Link href="#hero">More</Link>
        </Button>
      </div>
    </div>
  );
}
