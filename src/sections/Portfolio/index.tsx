import { Portfolio } from "./styles";

import Button from "../../components/Button";
import Title from "../../components/Title";
import Text from "../../components/Text";
import Container from "../../components/Container";

const PortfolioSection: React.FC = () => {
  return (
    <Portfolio>
      <Container>
        <article className="portfolio">
          <Title>Portfólio / Repositórios 📊 </Title>
          <aside className="repositorios">
            <Text>
              Já Desenvolvi para MAIS
              <span className="destaque"> + de 60 Projetos </span> em Meu
              GitHub.
            </Text>
            <Button>
              <a href="https://github.com/SobrinhoSergio" target="_blank">Meu GitHub 💡 </a>
            </Button>
          </aside>
        </article>
      </Container>
    </Portfolio>
  );
};

export default PortfolioSection;
