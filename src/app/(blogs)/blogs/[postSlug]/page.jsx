"use client"
import BlogComments from "@/components/blog/comments/BlogComments";
import RelatedPost from "@/components/blog/RelatedPost";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

async function BlogDetail({ params }) {
  const router = useRouter();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`,
    { cache: "no-store" }
  );
  const {
    data: { post },
  } = await res.json();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <div className="flex gap-x-3 items-center mb-8">
        <span
          onClick={() => router.back()}
          className="size-5 fill-current text-secondary-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </span>
        <h1 className="text-secondary-700 text-2xl font-bold">
          {post.title}
        </h1>
      </div>
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
        />
      </div>
      <p className="mb-4 font-semibold text-xl">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} />
    </div>
  );
}
export default BlogDetail;
