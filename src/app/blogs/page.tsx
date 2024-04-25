import BlogPosts from "@/components/blogposts";
import { NavBar } from "@/components/navbar";
export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <NavBar />
      <BlogPosts />
    </section>
  );
}
