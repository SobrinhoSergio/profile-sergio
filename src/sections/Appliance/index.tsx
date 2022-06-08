import { Appliance } from "./styles";

import Title from "../../components/Title";
import Container from "../../components/Container";

import Languages from "../UI/Languages";

const ApplianceSection: React.FC = () => {
  return (
    <Appliance id="appliance">
      <Container>
        <Title>Tecnologias / Ferramentas 📚</Title>
        <Languages />
      </Container>
    </Appliance>
  );
};

export default ApplianceSection;
