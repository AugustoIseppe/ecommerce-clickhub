import Posts from "../model/Posts";

export default async function obterPostsPorId(id: string): Promise<Posts> {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      return data;
  }
  