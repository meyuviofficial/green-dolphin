import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeDocument from "rehype-document";

export default async function MDXStyling(children: string) {
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeStringify) // Convert AST into serialized HTML
    .use(rehypeDocument, {
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      ],
      style: `
        h {
        font-weight: bold ;  /* Makes the text bold */
        padding: 20px 15px 0px 0px;  /* Adds padding around the text */
        margin-bottom: 1em;  /* Adds space below the heading */
        text-align: left;  /* Aligns the text to the center */
}`,
    })
    .process(children);

  return file.toString();
}
