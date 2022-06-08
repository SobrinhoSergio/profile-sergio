import { Skills } from "./styles";

import Ability from "../UI/Ability";

import Title from "../../components/Title";
import Container from "../../components/Container";

const SkillsSection: React.FC = () => {
  return (
    <Skills id="skills">
      <Container>
        <Title>Habilidades / Skills 💼</Title>
        <Ability />
      </Container>
    </Skills>
  );
};

export default SkillsSection;
