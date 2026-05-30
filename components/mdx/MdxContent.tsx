"use client";

import { getMDXComponent } from "next-contentlayer2/hooks";

export function MdxContent({ code }: { code: string }) {
  const Component = getMDXComponent(code);
  return <Component />;
}
