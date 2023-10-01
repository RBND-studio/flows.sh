import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { ReactElement } from 'react';

const mdxComponents = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps): ReactElement {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
