import PostsItem from "@/components/posts/PostsItem";
import Posts from "@/data/model/Posts";
import obterPosts from "@/data/service/obterPosts";

export default async function PaginaUsuarioPorId() {
  const posts = await obterPosts();
  // console.log(posts);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black">Posts</h1>
      <div className="flex flex-col gap-6">
        {posts.map((post: Posts) => (
          <PostsItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
