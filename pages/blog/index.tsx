import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../api/api";
import Articles from "../../components/Blog/Articles/Articles";
import { BlogPreview } from "../../components/BlogPreview/BlogPreview";
import { Section } from "../../components/Section/Section";
export default function Page({ posts }: { posts: PostMeta[] }) {
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
              <BlogPreview
                title={"Co skłoniło mnie do programowania?"}
                description={
                  "Wiele osób, zastanawia się czy to dla nich, lecz po co się zastanawiać jak można się przekonać."
                }
                creator={"Wiktor"}
                date={"12 lipca 2022"}
                src={"/assets/coding.jpg"}
              />
              <BlogPreview
                title={"Co skłoniło mnie do programowania?"}
                description={
                  "Wiele osób, zastanawia się czy to dla nich, lecz po co się zastanawiać jak można się przekonać."
                }
                creator={"Wiktor"}
                src={"/assets/coding.jpg"}
                date={"12 lipca 2022"}
              />
              <BlogPreview
                title={"Co skłoniło mnie do programowania?"}
                description={
                  "Wiele osób, zastanawia się czy to dla nich, lecz po co się zastanawiać jak można się przekonać."
                }
                creator={"Wiktor"}
                src={"/assets/coding.jpg"}
                date={"12 lipca 2022"}
              />
            </>
          }
        />{" "}
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
