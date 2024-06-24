// #region ::: IMPORTS
// libs
import Head from "next/head";
// styles
import * as styled from "../styles/pages/AboutMe.style";
// utils
import { getTranslation } from "../utils/translations";
// types
import type { NextPage } from "next";
// #endregion ::: IMPORTS

const AboutMe: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>{getTranslation("/.about-me.title")}</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.BodyContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("/.about-me.tl-dr"),
          }}
        />
        <styled.SectionContainer>
          <styled.SectionContent>
            I am in my final year of a Computer Science degree at{" "}
            <a rel="noreferrer" target="_blank" href="https://www.unimi.it/it">
              UniMi
            </a>
            , where I have delved into advanced theory and practices in Computer
            Science. Before university, I worked for two years as a frontend and
            mobile developer, learning to write quality code that is both
            efficient and scalable. In 2023/24, I studied in France at
            Paris-Saclay University through an international exchange program.
          </styled.SectionContent>
          <styled.TLDRImageContainer>PROPIC</styled.TLDRImageContainer>
        </styled.SectionContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("/.about-me.in-detail"),
          }}
        />
        <styled.SectionContainer>
          <styled.InDetailLineContainer>
            <div
              style={{ width: 15, height: "100%", backgroundColor: "blue" }}
            />
          </styled.InDetailLineContainer>
          <styled.SectionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eligendi assumenda cumque veniam, esse, inventore accusamus deleniti
            aut fuga quaerat sed debitis laborum ipsa praesentium magnam
            officiis cupiditate, eveniet error. Assumenda accusantium eligendi
            quisquam tempora quaerat tenetur consequuntur nulla fuga eaque
            repellat! Facere rerum aliquam repellendus voluptates deleniti unde
            odit iste. Vel commodi reprehenderit explicabo exercitationem. Quos
            quam autem sunt. Dolores tempore rem reiciendis obcaecati saepe.
            <br />
            Explicabo officiis ipsa, ea alias repudiandae perferendis soluta
            omnis iste quos. Quis dicta, delectus ea, nemo cupiditate, soluta
            porro quae pariatur cumque assumenda dolore. Consectetur nobis
            laborum reiciendis quia debitis, perferendis vel illo ex.
            <br />
            <br />
            Commodi est consequatur minus fugiat voluptatum aspernatur odio non
            voluptatibus facilis repellat vero fugit et, deleniti architecto
            eveniet accusantium cum. Nostrum magnam veniam ratione enim alias ex
            illum dolorem, dolore quis corrupti placeat iusto qui in aut
            quibusdam molestiae? Voluptate provident temporibus debitis illum id
            molestiae ad totam, minima laudantium. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Adipisci nesciunt nisi dolorum nobis
            autem beatae voluptatum et. Minus, ad. Iste nostrum alias
            dignissimos eveniet, minus ipsum praesentium suscipit veniam
            excepturi. Corrupti minus deserunt veniam consectetur in quo
            repudiandae consequatur aliquam, itaque et ratione doloremque
            cupiditate ipsam delectus similique placeat nihil asperiores
            reiciendis eveniet officia, praesentium tenetur.
            <br />
            <br />
            Non itaque aliquid laudantium. Repudiandae debitis corporis
            laudantium adipisci perferendis officiis facere cumque quibusdam
            quae esse tenetur obcaecati eligendi corrupti, molestiae nobis nam
            optio porro? Quod, aliquid. Assumenda quos rerum, aut facilis
            distinctio hic. Quis eaque temporibus beatae, ipsam architecto
            consequatur saepe sunt expedita. Adipisci vero quasi architecto
            voluptates similique incidunt, repellat dolores consectetur in enim
            voluptatem deserunt eos debitis alias, nobis impedit itaque.
            Voluptate beatae amet nobis, minus architecto reiciendis deleniti
            non quos. Cumque, eligendi natus corrupti ullam officia at qui
            dolore velit ipsam, debitis numquam fugit modi eveniet? Accusantium
            ipsa ut odio!
          </styled.SectionContent>
        </styled.SectionContainer>
      </styled.BodyContainer>
    </>
  );
};

export default AboutMe;
