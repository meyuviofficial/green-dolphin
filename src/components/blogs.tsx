import Link from "next/link";
import { formatDate, getBlogPosts } from "@/components/utils/mdx-utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function Blogs() {
  let allBlogs = getBlogPosts();
  return (
    <div
      id="blogs"
      className="min-h-screen flex flex-col items-center px-4 py-16 bg-fuchsia-400"
    >
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-widest mx-96 mt-8 lg:text-5xl pt-8">
        BLOGS
      </h1>
      <p className="text-md leading-relaxed mb-6 tracking-wide w-2/5 pt-4">
        Here you will find some of my blogs, mostly about technology and
        programming. I hope you find them useful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-48">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <div key={index} className="flex">
              <Card className="hover:drop-shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-bold tracking-wider text-center hover:text-green-500">
                    <Link href={`/blogs/${post.slug}`}>
                      {post.metadata.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="font-semibold tracking-wider text-center">
                    {post.metadata.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>{post.metadata.summary}</CardContent>
                <CardFooter>
                  <div className="w-full">{post.metadata.publishedAt}</div>
                </CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
