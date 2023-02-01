import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { BlogPreview } from "../../../components/Blog/BlogPreview/BlogPreview";
import { Footer } from "../../../components/Footer/Footer";
import { Navbar } from "../../../components/Navbar/Navbar";
import { Section } from "../../../components/Section/Section";
import { getAllPosts, PostMeta } from "../../api/api";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <Navbar />
      <main>
        <Section
          title={"Blog"}
          id={"blog"}
          lowertitle={`Artykuły z tagiem ${slug} 📌 `}
          align="left"
          content={
            <>
              {posts.map((post: PostMeta, index) => {
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
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
