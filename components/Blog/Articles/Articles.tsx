import Link from "next/link";
import styles from "./articles.module.scss";
import { PostMeta } from "../../../pages/api/api";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
