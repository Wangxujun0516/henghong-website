import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: true },
    image: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.sourceFileName.replace(/\.mdx$/, "")}`,
    },
  },
}));

export const Product = defineDocumentType(() => ({
  name: "Product",
  filePathPattern: "products/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: false },
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
    available: { type: "boolean", required: false },
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
  documentTypes: [Blog, Product, About],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
});
