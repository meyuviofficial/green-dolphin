import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// bg-yellow-400 - for bg
export default function Hero() {
  return (
    <div
      id=""
      className="flex flex-col min-h-screen items-center justify-center bg-yellow-400 ..."
    >
      {/* <Image
        alt="dev-bg"
        src="https://images.unsplash.com/photo-1511649475669-e288648b2339?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1] brightness-50 blur-sm"
      /> */}
      <div className="rounded-full w-36 h-36 bg-zinc-900 flex items-center justify-center drop-shadow-lg hover:drop-shadow-2xl">
        <Avatar className="w-32 h-32">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-5xl pt-8">
        HELLO, I'M YUVI !
      </h1>
      <div className="max-w-full mx-96 mt-8">
        <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-wide">
          An Enthusiastic SRE with 4+ years of experience in the Platform
          Engineering space with experience on popular clouds like AWS and Azure
          and container orchestration tools like Kubernetes. Automated complex
          workflows, built enterprise grade solutions and maintained the
          compliance of Cloud Infrastructure in huge volumes that are reliable,
          native, scalable and cost-efficient.
        </p>
      </div>
      <div>
        <Button
          asChild
          variant={"destructive"}
          className="mt-8 rounded-full shadow-xl"
        >
          <Link href="#about">More</Link>
        </Button>
      </div>
    </div>
  );
}
