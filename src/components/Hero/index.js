import React from "react";
import * as Styled from "./styled";
import { Link } from "gatsby";
import JiggleText from "../JiggleText";

const Hero = () => {
  return (
    <Styled.Wrapper>
      <Styled.Statement>
        <div className="large">
          DESIGN{" "}
          <em>
            <br />
            AND
          </em>{" "}
          <br />
          DEVELOP.
        </div>
        <div className="small">
          A{" "}
          <em>
            good
            <br />
            guy
          </em>{" "}
          who
          <br />
          makes
          <br />
          <em>
            good
            <br />
            websites
          </em>
          .
        </div>
      </Styled.Statement>
      <div className="container">
        <Styled.Bio>
          I’m <Link to="/info">Nisal</Link> – I'm a software engineering
          undergraduate at SLIIT - Curtin University.
        </Styled.Bio>
        <Styled.Bio>
          Creative people make me{" "}
          <em>
            <JiggleText>happy</JiggleText>
          </em>
          .
        </Styled.Bio>
      </div>
    </Styled.Wrapper>
  );
};

export default Hero;
