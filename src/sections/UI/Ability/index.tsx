import { AiOutlineMobile, AiOutlineDesktop, AiOutlineRocket } from "react-icons/ai";

import { Ability } from "./styles";

import Text from "../../../components/Text";

const AbilityArticle: React.FC = () => {
  const skills = [
    {
      title: "Programação",
      description:
        "Desenvolvimento de Sistemas Web, Front/Back End com a utilização de várias tecnologias",
      icon: <AiOutlineDesktop />
    },

    {
      title: "Mobile",
      description:
        "Desenvolvimento de Aplicativos e Sistemas Web responsivos para a melhor experiência do usuário, em qualquer tipo de dispositivos.",
        icon: <AiOutlineMobile />
    },

    {
      title: "Skills",
      description:
        "Bom desempenho em equipe, boa comunicação e focado. Aprendizado rápido, e resolução de problemas com metodologias de sucesso.",
        icon: <AiOutlineRocket />
    }
  ];
  return (
    <Ability>
      {skills.map((value, index) => {
        return (
          <div key={index} className="habilidade">
            <div className="conhecimento">
              <span className="icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <Text>{value.description}</Text>
            </div>
          </div>
        );
      })}
    </Ability>
  );
};

export default AbilityArticle;
