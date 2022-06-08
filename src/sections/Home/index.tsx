import { Home } from "./styles";

import Container from "../../components/Container";

const HomeSection: React.FC = () => {
  return (
    <Home className="home" id="home">
      <Container>
        <hgroup className="principal">
          <h1>
            Fala, Dev sou o <span className="destaque">Sérgio Sobrinho </span>{" "}
            <span className="animation">👋</span>
          </h1>
          <h2>Em busca do Progresso! 🏆</h2>
          <h1>
            Desenvolvedor de Software <span className="destaque">Jr.</span>
          </h1>
        </hgroup>

        <span className="mouse">
          <span className="mouse-wheel"></span>
        </span>
      </Container>
    </Home>
  );
};

export default HomeSection;
