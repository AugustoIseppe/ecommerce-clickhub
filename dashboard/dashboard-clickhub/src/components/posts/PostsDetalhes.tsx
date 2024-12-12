import Posts from "@/data/model/Posts";

interface PostsDetalhesProps {
  post: Posts;
}

export default async function PostsDetalhes(props: PostsDetalhesProps) {
  const { post } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span>
        {post.id} | {post.userId}
      </span>
      <h1 className="text-4xl font-bold uppercase ;">{post.title}</h1>
      <p className="text-lg text-gray-500 capitalize">{post.body}</p>
    </div>
  );
}
