import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/components/utils/mdx-utils";
import { baseUrl } from "@/app/sitemap";
import { NavBar } from "@/components/navbar";
import Image from "next/image";
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

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <NavBar />

      <section className="min-h-screen flex flex-col items-center px-4 py-16 dark:bg-zinc-800  dark:text-white bg-neutral-50 text-zinc-800">
        {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      /> */}
        <h1 className="title font-bold text-4xl tracking-wider pt-12">
          {post.metadata.title}
        </h1>
        <div className="w-3/5 flex px-16 flex-col justify-center items-center">
          <div className="py-4">
            <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
          <div className="p-16 ">
            <Image
              src={post.metadata.image ?? ""}
              alt={post.metadata.title}
              width={96 * 16}
              height={96 * (9 / 16)}
              className="rounded-lg"
            />
          </div>
          <div className="">
            {/* <Image src={post.metadata.image} alt={post.metadata.title} /> */}
            <article className="prose">{post.content}</article>
          </div>
        </div>
      </section>
    </div>
  );
}
