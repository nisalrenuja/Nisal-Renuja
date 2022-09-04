import React from "react";
import { Link } from "gatsby";
import ArticleBody from "../components/ArticleBody";
import Head from "../components/Head";
import InfoIntro from "../components/InfoIntro";
import Layout from "../components/Layout";

const Info = () => {
  return (
    <Layout>
      <Head title="Info" />
      <InfoIntro />
      <div className="container">
        <section>
          <ArticleBody>
            <h2>
              I’m <em>Nisal</em> – a software engineering undergraduate at SLIIT
              - Curtin University.
            </h2>
            {/* <p>
              I was most recently the director of product design at{" "}
              <Link to="/work/vice">VICE</Link>. I also worked with two{" "}
              <Link to="/work/cover">small</Link>{" "}
              <Link to="/work/karma">startups</Link>, a not-so-small{" "}
              <Link to="/work/etsy">tech company</Link>, and spent a few years
              living agency life. My broad experience makes me adaptable, I
              think.
            </p> */}
            <p>
              I've always been passionate about using technology to come up with
              innovative solutions for everyday problems. Therefore my dream is
              to peruse a career in software engineering and give back to the
              community however possible.
            </p>
            <p>
              I believe that technological advancements must be a collaborative
              effort and we are obliged to use the knowledge that we've gathered
              to make the world a better place for everyone. I'm also a firm
              believer in working smart rather than working hard and trying to
              contribute to open source projects as much as possible.
            </p>
            {/* <p>
              Good inspiration comes from experience. I try to stand often and
              spend time away from my desk. It helps.
            </p>
            <h2>About the website</h2>
            <p>
              My website is built with{" "}
              <a href="https://www.gatsbyjs.com/">Gatsby</a> – a React-based
              framework for generating static sites.
               As an exercise to relearn
              to code in 2021, I built the site from scratch (no templates!)
              with the help of{" "}
              <a href="https://www.framer.com/motion/">Framer Motion</a> and{" "}
              <a href="https://styled-components.com/">Styled Components</a>.  
            </p> */}
          </ArticleBody>
        </section>
      </div>
    </Layout>
  );
};

export default Info;
