import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import {
  FaGithub,
  FaDiscord,
  FaDesktop,
  FaBlog,
  FaShopify,
  FaShoppingBasket,
  FaPaintBrush,
} from "react-icons/fa";
import { Section } from "../components/Section/Section";
import { ImgSection } from "../components/ImgSection/ImgSection";
import { Box } from "../components/UI/Box/Box";
import { TechBox } from "../components/UI/TechBox/TechBox";
import { BoxContainer } from "../components/UI/BoxContainer/BoxContainer";
import { Project } from "../components/Project/Project";
import { ProjectsWrapper } from "../components/UI/ProjectsWrapper/ProjectsWrapper";
import { Logo } from "../components/UI/Logo/Logo";
import { skills } from "../utils/skills";
import { projects } from "../utils/projects";
import { BlogPreview } from "../components/Blog/BlogPreview/BlogPreview";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import Head from "next/head";
import { getAllPosts, PostMeta } from "./api/api";
export default function Page({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Cześć !</title>
      </Head>
      <Navbar />
      <Header
        id={"start"}
        titleFirst={
          <>
            Cześć, jestem <a>Wiktor</a>
          </>
        }
        titleSecond={"Tworzę strony internetowe"}
        description={
          "Serdecznie zapraszam cię do przejrzenia strony! 🚀  Zawiera ona najważniejsze informacje o mnie 🧑‍💻 Jeżeli szukasz osoby która stworzy stronę dla ciebie, tu też znajdziesz pomoc 🤯."
        }
        buttons={[
          {
            element: <FaGithub key="gt" />,
            link: "https://github.com/swapperDEV",
          },
          {
            element: <FaDiscord key="dc" />,
            link: "https://discordapp.com/users/565234973217521694",
          },
          {
            element: <p key="txt">Skontaktuj się ze mną</p>,
            scroll: true,
            scrollV: "contact",
          },
        ]}
      />
      <main>
        <Section
          title={"Oferta"}
          id={"oferta"}
          lowertitle={"Znajdziesz tu to co potrzebujesz."}
          description={
            <>
              Poniżej widnieje moja oferta, nie trzymam się jej oczywiście
              <a> regorystycznie</a> to tylko najczęsciej wykonywane rzeczy,
              skontaktuj się ze mną po niestandardowe zlecenia!
            </>
          }
          content={[
            <Box
              key={"1"}
              title={"Kodowanie statycznych stron"}
              icon={<FaDesktop />}
              description={
                "Jeżeli posiadasz już gotowy szablon swojej strony, mogę go zaprojektować. Jest to najszybszy sposób wykonania strony. Dodatkowo późniejsze zmiany nie będą problemem"
              }
            />,
            <Box
              icon={<FaShoppingBasket />}
              key={"2"}
              title={"Kodowanie dynamicznych stron"}
              description={
                "Mogę stworzyć dla ciebie dynamiczne strony takie jak blogi, sklepy itd. których contentem sam będziesz zarządzał za pomocą autorskiego panelu."
              }
            />,
            <Box
              key={"3"}
              icon={<FaPaintBrush />}
              title={"Poprawa twojej strony internetowej"}
              description={
                "W mojej ofercie również znajduje się poprawa już wcześniej zaprojektowanych stron."
              }
            />,
          ]}
        />
        <ImgSection
          title={"O mnie"}
          id={"omnie"}
          lowertitle={"Zatrzymaj się tu na chwilę 😄"}
          description={
            <>
              Od kilku lat interesuję się szeroko pojętym{" "}
              <a>web developmentem</a>, programowanie to jedno z moich hobby🧑‍🔧
              na codzień jednak wciąż się
              <a> uczę</a> w technikum, mam dopiero <a>18lat.</a> Przyszłość
              chciałbym wiązać z tym hobby! ✨
            </>
          }
          img="/assets/home.png"
          button={"Zobacz moje CV"}
        />
        <Section
          title={"Umiejętności"}
          id={"skills"}
          lowertitle={"Technologie z którymi pracuję"}
          content={
            <BoxContainer>
              <>
                {skills.map((skill, index) => {
                  return (
                    <TechBox
                      path={skill.path}
                      key={index}
                      bgColor={skill.bgColor}
                      name={skill.name}
                      color={skill.color}
                    />
                  );
                })}
              </>
            </BoxContainer>
          }
        />
        <Section
          title={"Projekty"}
          lowertitle={"Tu znajdziesz wszystkie moje projekty."}
          id={"projects"}
          bgColor={"white"}
          content={
            <ProjectsWrapper>
              <>
                {projects.map((project, index) => {
                  return (
                    <Project
                      live={project.link.live}
                      code={project.link.code}
                      key={index}
                      stack={
                        <>
                          {project.stack.map((stack, index) => {
                            return <Logo src={stack} key={index} />;
                          })}
                        </>
                      }
                      title={project.title}
                      description={project.description}
                      src={project.src}
                      badge={project.badge}
                    />
                  );
                })}
              </>
            </ProjectsWrapper>
          }
        />
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
        <Contact />
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
