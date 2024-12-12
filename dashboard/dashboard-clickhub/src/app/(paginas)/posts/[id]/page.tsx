"use client";

import PostsDetalhes from "@/components/posts/PostsDetalhes";
import Posts from "@/data/model/Posts";
import obterPostsPorId from "@/data/service/obterPostsPorId";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default async function PaginaPostsPorId() {
  const { id } = useParams();
  const [post, setPosts] = useState<Posts | null>(null);

  useEffect(() => {
    if (id) {
      obterPostsPorId(id as string).then(setPosts);
      console.log("Post:", post);
    }
  }, [id]);
  // console.log("Post:", post);
  if (!post) return <div>Post não encontrado</div>;

  return (
    <div className="flex flex-col gap-5">
      <PostsDetalhes post={post} />
      {/* <h1 className="text-4xl font-bold">{post.body}</h1> */}
      <Link href="/posts" className="self-center bg-blue-500 p-2 rounded">
        Voltar
      </Link>
    </div>
  );
}
