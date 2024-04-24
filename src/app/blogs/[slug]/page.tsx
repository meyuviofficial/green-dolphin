import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/components/utils/mdx-utils";
import { baseUrl } from "@/app/sitemap";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
import MDXStyling from "@/components/mdx-styling";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  let post_html = await MDXStyling(post?.content ?? "");
  return (
    <div>
      <NavBar />

      <section className="min-h-screen flex flex-col items-center px-4 py-16 bg-cyan-300 dark:text-white text-zinc-800">
        <h1 className="title font-bold text-4xl tracking-wider pt-12">
          {post?.metadata.title}
        </h1>
        <div className="p-4">
          <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            {formatDate(post?.metadata?.publishedAt ?? "")}
          </p>
        </div>
        <div className="md:w-3/5 w-screen flex md:px-16 px-4 flex-col justify-center items-center mt-4 md:mt-16 rounded-xl pb-16 hover:drop-shadow-lg bg-neutral-100 dark:bg-zinc-900">
          <div className="md:p-16 p-2">
            <Image
              src={post?.metadata?.image ?? ""}
              alt={post?.metadata?.title ?? ""}
              width={96 * 16}
              height={96 * (9 / 16)}
              className="rounded-lg"
            />
          </div>
          <div className="">
            <article className="prose">
              <div dangerouslySetInnerHTML={{ __html: post_html }}></div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
