import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
const blogs = [
  {
    title: "Dad: A Villain but a Hero",
    description:
      "An inspiring short tale of a boy who eradicated “poverty” for his entire bloodline.",
    date: "14th Dec, 2023",
    author: "Yuvi",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*2-QJXvDsy2jmhsLY",
    tags: ["Philosophy", "Life"],
    url: "https://medium.com/@meyuviofficial/my-dad-villain-but-a-hero-c9bafd9a804e",
  },
  {
    title: "How to handle Multi-Cluster setup for AKS in your local machine",
    description:
      "Setting up the multi-cluster setup for AKS in your local machine.",
    date: "17th May, 2023",
    author: "Yuvi",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*u1yLlMvnpMeTOGgu",
    tags: ["Kubernetes", "AKS"],
    url: "https://medium.com/@meyuviofficial/how-to-handle-multi-cluster-setup-for-aks-in-your-local-machine-2ff8f9b0f791",
  },
];

export default function BlogPosts() {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-cyan-400 w-screen md:w-full"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        BLOGS
      </h1>
      <p className="text-md text-center leading-relaxed mb-6 tracking-wide w-full pt-4">
        Here you will find my blog posts related to Tech, Philosophy and my life
        experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-48 px-4">
        {blogs.map((blog, index) => (
          <div key={index} className="flex">
            <Card className="hover:drop-shadow-2xl">
              <CardHeader>
                <CardTitle className="font-bold tracking-wider text-center hover:text-green-500">
                  {blog.title}
                </CardTitle>
                <CardDescription className="font-semibold tracking-wider text-center">
                  By {blog.author} on {blog.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col ">
                  <div>
                    <Image
                      src={blog.image}
                      alt="blog"
                      width={800}
                      height={650}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="pt-4">
                    {blog.description}{" "}
                    <Link
                      href={blog.url || ""}
                      className="tex-bold font-semibold underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  {blog.tags.map((footer) => (
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
    </div>
  );
}
