// #region ::: IMPORTS
// libs
import Head from "next/head";
// components
import CustomLink from "../components/CustomLink";
// types
import type { NextPage } from "next";
// styles
import * as styled from "../styles/pages/AboutMe.style";
// #endregion ::: IMPORTS

const AboutMe: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.BodyContainer>
        <h1>About me</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          blanditiis natus facere voluptates quis autem ab assumenda repudiandae
          exercitationem alias corrupti ducimus, dolores quasi facilis rem ex
          necessitatibus. Aliquid, fugit. Id ea repellendus sunt quasi similique
          asperiores, ab itaque atque quidem aliquam possimus facere corrupti
          maiores repellat earum? Mollitia ipsam nisi totam quia magni
          perspiciatis nihil ipsum, facilis laboriosam est. Voluptatibus dolore
          perspiciatis aliquam architecto tempore modi amet veritatis aspernatur
          expedita repellat repellendus perferendis, odit libero? Excepturi
          blanditiis, nisi voluptatem impedit voluptatibus aliquid officia
          inventore praesentium rem odit. Mollitia, magni? Quia illum
          praesentium, eos quas magni minima labore nostrum rerum odit facilis.
          Laboriosam deserunt ad minima similique nobis at quos voluptatibus,
          nesciunt culpa? Soluta ratione maxime, assumenda sed quo dolor.
        </div>
      </styled.BodyContainer>
    </>
  );
};

export default AboutMe;
