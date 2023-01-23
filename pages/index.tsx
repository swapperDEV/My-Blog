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
import { Button } from "../components/UI/Button/Button";
import { ContactSection } from "../components/ContactSection/ContactSection";
import { Footer } from "../components/Footer/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Header
        titleFirst={"Cześć, jestem Wiktor"}
        titleSecond={"Tworzę strony internetowe"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis doloribus fuga sapiente soluta praesentium. Aliquid!"
        }
        buttons={[
          <FaGithub key="gt" />,
          <FaDiscord key="dc" />,
          <p key="txt">Skontaktuj się ze mną</p>,
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
          img="/assets/hero.png"
          button={"Zobacz moje CV"}
        />
        <Section
          title={"Umiejętności"}
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
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

//https://grzegorzpokorski.pl/o-mnie
//https://revku.dev/
//story book
