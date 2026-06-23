"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import type { ComponentProps } from "react";

// Custom components for MDX
const components = {
  // Tables with Tailwind styling
  table: ({ children, ...props }: ComponentProps<"table">) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentProps<"thead">) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: ComponentProps<"th">) => (
    <th
      className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentProps<"td">) => (
    <td className="border border-gray-200 px-4 py-3" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: ComponentProps<"tr">) => (
    <tr className="even:bg-gray-50" {...props}>
      {children}
    </tr>
  ),

  // Blockquotes with styled containers
  blockquote: ({ children, ...props }: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-primary bg-gray-50 p-4 my-6 rounded-r-lg"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Headings with proper spacing
  h1: ({ children, ...props }: ComponentProps<"h1">) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentProps<"h2">) => (
    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-20" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentProps<"h3">) => (
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentProps<"h4">) => (
    <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children, ...props }: ComponentProps<"p">) => (
    <p className="text-gray-700 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  // Lists
  ul: ({ children, ...props }: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentProps<"li">) => (
    <li className="text-gray-700" {...props}>
      {children}
    </li>
  ),

  // Code blocks
  pre: ({ children, ...props }: ComponentProps<"pre">) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentProps<"code">) => (
    <code
      className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),

  // Links
  a: ({ children, href, ...props }: ComponentProps<"a">) => (
    <a
      href={href}
      className="text-primary hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // Images
  img: ({ src, alt, ...props }: ComponentProps<"img">) => (
    <img
      src={src}
      alt={alt || ""}
      className="w-full h-auto rounded-lg my-6"
      {...props}
    />
  ),

  // Strong and emphasis
  strong: ({ children, ...props }: ComponentProps<"strong">) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: ComponentProps<"em">) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),

  // Horizontal rule
  hr: (props: ComponentProps<"hr">) => (
    <hr className="border-gray-200 my-8" {...props} />
  ),
};

export function MdxContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
