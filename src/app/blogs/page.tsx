import { BlogPosts } from "@/components/utils/blog-posts";
import Blogs from "@/components/blogs";
import { NavBar } from "@/components/navbar";
export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <NavBar />
      <Blogs />
    </section>
  );
}
