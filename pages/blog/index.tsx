import { useState, useEffect } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../api/api";
import { BlogPreview } from "../../components/Blog/BlogPreview/BlogPreview";
import { Section } from "../../components/Section/Section";
import { TagsList } from "../../components/Blog/TagsList/TagsList";
import { getTags } from "../../utils/gettags";
export default function Page({ posts }: { posts: PostMeta[] }) {
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {
    setTags(getTags(posts));
  }, []);
  return (
    <>
      <Head>
        <title>Mój blog</title>
      </Head>
      <Navbar />
      <main>
        <Section
          title={"Blog"}
          id={"blog"}
          lowertitle={"Ostatnie artykuły z bloga 🔥"}
          align="left"
          content={
            <>
              {posts &&
                posts.map((post: PostMeta, index) => {
                  console.log(post);
                  return (
                    <BlogPreview
                      src={post.img}
                      slug={post.slug}
                      title={post.title}
                      tags={post.tags}
                      description={post.excerpt}
                      creator={post.creator}
                      date={new Date(post.date)}
                      key={index}
                    />
                  );
                })}
            </>
          }
        />
        <TagsList tags={tags} />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);
  return { props: { posts } };
}
