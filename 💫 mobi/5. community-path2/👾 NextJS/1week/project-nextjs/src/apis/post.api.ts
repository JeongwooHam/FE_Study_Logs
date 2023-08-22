import { PostType } from "@/_type";

// fetch의 cache 옵션을 "no-store"로 설정하여 SSR 구현
// 해당 쿼리에 대해서는 자동 캐싱 작업을 진행하지 않고 매번 데이터를 새로 받아온다.
export const fetchPosts = async (): Promise<PostType[]> => {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: PostType[] = await results.json();
  return posts;
};
