import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { Section } from "../components/Section/Section";
import { ImgSection } from "../components/ImgSection/ImgSection";
import { Box } from "../components/UI/Box/Box";
import { TechBox } from "../components/UI/TechBox/TechBox";
import { BoxContainer } from "../components/UI/BoxContainer/BoxContainer";

export default function Page() {
  const skills = [
    {
      path: "https://media.graphassets.com/Oig5u39yQQio4sOxaOnv",
      bgColor: "rgb(248, 120, 27)",
      color: "white",
      name: "html",
    },
    {
      path: "https://media.graphassets.com/HNTPP8OoRSC4DGfOezMg",
      bgColor: "rgb(70, 83, 198)",
      color: "white",
      name: "css",
    },
    {
      path: "https://media.graphassets.com/YCbuS6QGlvi7m2UZfSQU",
      bgColor: "rgb(214, 138, 226)",
      color: "white",
      name: "scss",
    },
    {
      path: "https://media.graphassets.com/fesCGBNzQQyFg9NahZpO",
      bgColor: "rgb(255, 224, 63)",
      color: "black",
      name: "javascript",
    },
    {
      path: "https://media.graphassets.com/48Rw9y8VQqjN2WldO4Pb",
      bgColor: "rgb(72, 233, 255)",
      color: "black",
      name: "react",
    },
    {
      path: "/assets/lang/next.svg",
      bgColor: "lightgray",
      color: "black",
      name: "nextjs",
    },
    {
      path: "/assets/lang/redux.svg",
      bgColor: "purple",
      color: "white",
      name: "redux",
    },
    {
      path: "/assets/lang/node.svg",
      bgColor: "#333333",
      color: "white",
      name: "node js",
    },
    {
      path: "/assets/lang/express.svg",
      bgColor: "rgb(82, 193, 93)",
      color: "black",
      name: "express",
    },
    {
      path: "https://media.graphassets.com/Q18BMWceQ726PkVKKW2U",
      bgColor: "rgb(117, 44, 175)",
      color: "white",
      name: "python",
    },
    {
      path: "https://media.graphassets.com/Dh6RFahtTauPpJbIwEk1",
      bgColor: "rgb(232, 77, 49)",
      color: "white",
      name: "git",
    },
    {
      path: "https://media.graphassets.com/JuTIIOG5TBaJ5moPLGAQ",
      bgColor: "rgb(87, 42, 42)",
      color: "white",
      name: "sql / postgresql",
    },
    {
      path: "/assets/lang/mongo.svg",
      bgColor: "rgb(82, 193, 93)",
      color: "white",
      name: "mongodb",
    },
    {
      path: "https://media.graphassets.com/XJrOGTQFyiPaAOp7jYw4",
      bgColor: "rgb(66, 82, 221)",
      color: "white",
      name: "typescript",
    },
    {
      path: "/assets/lang/yarn.svg",
      bgColor: "cadetblue",
      color: "white",
      name: "yarn",
    },
  ];
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
      </main>
    </>
  );
}

//https://grzegorzpokorski.pl/o-mnie
//https://revku.dev/
//story book
