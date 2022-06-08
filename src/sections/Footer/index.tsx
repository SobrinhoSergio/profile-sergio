import React from "react";

import { Footer } from "./styles";

import Logo from "../UI/Logo";

import Phrase from "../../components/Phrase";
import Container from "../../components/Container";

import { react } from "../../assets";

const FooterSection: React.FC = () => {
  return (
    <Footer className="contact" id="contact">
      <Container>
        <Phrase>
          " Ainda não cheguei onde eu quero, no entanto, estou cada vez{" "}
          <span className="destaque">mais perto!</span> "
        </Phrase>
      </Container>

      <aside className="dev">
        <Logo />
        <p>
          Desenvolvido por Sérgio Sobrinho, feito com ReactJs + TypeScript{" "}
          <img src={react} />
        </p>
      </aside>
    </Footer>
  );
};

export default FooterSection;
