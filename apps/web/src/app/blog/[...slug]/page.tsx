import type { Post } from 'contentlayer/generated';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactElement } from 'react';

import { Mdx } from '../../../components';

interface PostProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = (
  params: PostProps['params'],
): Promise<Post | undefined> => {
  const slug = params.slug.join('/');
  const postFromParams = allPosts.find((post) => post.slugAsParams === slug);

  if (!postFromParams) {
    null;
  }

  return Promise.resolve(postFromParams);
};

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({
  params,
}: PostProps): Promise<ReactElement> {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {/* {post.image ? <div className="relative w-full h-[345px] mb-12">
          <Image
            alt={post.title}
            className="rounded-lg w-full m-0 object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={post.image}
          />
        </div> : null} */}

      <header>
        <h1 className="mb-2">{post.title}</h1>
        {post.description ? (
          <p className="text-xl mt-0 mb-6 text-gray-700 dark:text-gray-200">
            {post.description}
          </p>
        ) : null}
        <p className="space-x-1 text-xs text-gray-500">
          <span>{format(parseISO(post.date), 'MMMM dd, yyyy')}</span>
          <span>{` • `}</span>
          <span>{post.readingTimeText}</span>
          <span>{` • `}</span>
          <span>
            <Link
              href={`/categories/${encodeURIComponent(
                post.category.toLowerCase(),
              )}`}
            >
              {post.category}
            </Link>
          </span>
        </p>
      </header>
      <hr className="my-6" />
      <Mdx code={post.body.code} />
    </article>
  );
}
