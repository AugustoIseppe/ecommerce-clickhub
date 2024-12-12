import Posts from "@/data/model/Posts";
import Link from "next/link";

interface PostsItemProps {
  post: Posts;
}

export default function PostsItem(props: PostsItemProps) {
  const { post } = props;

  return (
    <Link
      href={`/posts/${post.id}`}
      className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
    >
      <div className="flex flex-col justify-center gap-1.5 p-4">
        <h2 className="text-2xl font-bold">
          {post.id} | {post.title}
        </h2>
        <p className="text-xs text-zinc-400">{post.body}</p>
      </div>
    </Link>
  );
}
