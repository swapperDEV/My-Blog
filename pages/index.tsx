import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { FaGithub, FaDiscord } from "react-icons/fa";
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
import { BlogPreview } from "../components/BlogPreview/BlogPreview";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Slide, Zoom } from "react-awesome-reveal";
export default function Page() {
  return (
    <>
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
          lowertitle={"Znajdziesz tu to co potrzebujesz."}
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic
              aliquid dolores, cum consectetur labore quasi ratione mollitia
              impedit <a>inventore nisi ducimus!</a> Totam tenetur iure
              necessitatibus suscipit, placeat accusantium ea!
            </>
          }
          content={[<Box key={"1"} />, <Box key={"2"} />, <Box key={"3"} />]}
        />
        <ImgSection
          title={"O mnie"}
          id={"omnie"}
          lowertitle={"Zatrzymaj się tu na chwilę 😄"}
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic
              aliquid dolores, cum consectetur labore quasi ratione mollitia
              impedit <a>inventore nisi ducimus!</a> Totam tenetur iure
              necessitatibus suscipit, placeat accusantium ea! mollitia impedit{" "}
              <a>inventore nisi ducimus!</a> Totam tenetur iure necessitatibus
              suscipit, placeat accusantium ea! ✨
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
          lowertitle={"Najnowsze aktykuły na blogu 🔥"}
          align="left"
          content={
            <>
              <BlogPreview />
              <BlogPreview />
              <BlogPreview />
            </>
          }
        />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

//https://grzegorzpokorski.pl/o-mnie
//https://revku.dev/
//EN VERSION PLS
