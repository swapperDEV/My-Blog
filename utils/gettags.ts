import { PostMeta } from "../pages/api/api";

export const getTags = (posts: PostMeta[]) => {
  let tags: string[] = [];
  posts.map((post) => {
    post.tags.map((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  return tags;
};
