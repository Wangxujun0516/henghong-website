import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: "products/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    category: { type: "string", required: true },
    subcategory: { type: "string", required: false },
    model: { type: "string", required: false },
    images: { type: "list", of: { type: "string" }, required: false },
    capacity: { type: "json", required: false },
    voltage: { type: "string", required: false },
    stroke: { type: "string", required: false },
    power: { type: "string", required: false },
    material: { type: "string", required: false },
    accuracy: { type: "string", required: false },
    features: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/products/${doc.slug}`,
    },
  },
}));

export const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "content",
  disableImportAliasWarning: true,
  documentTypes: [Product, About],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
