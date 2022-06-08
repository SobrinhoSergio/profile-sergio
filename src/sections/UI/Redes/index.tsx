import { GrGithub, GrLinkedin, GrInstagram, GrFacebook } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";

const RedesSociais: React.FC = () => {
  const icone = [
    {
      i: <GrGithub />,
      name: "https://github.com/SobrinhoSergio"
    },
    {
      i: <GrLinkedin />,
      name: "https://www.linkedin.com/in/sobrinhosergio"
    },
    {
      i: <GrInstagram />,
      name: "https://www.instagram.com/sergio.sob7/"
    },
    {
      i: <GrFacebook />,
      name: "https://www.facebook.com/sergio.sobrinho.9638/"
    },
    {
      i: <FaWhatsapp />,
      name: "https://api.whatsapp.com/send?phone=5521974211921"
    }
  ];
  return (
    <ul className="redes-sociais">
      {icone.map((value, index) => {
        return (
          <li key={index}>
            <a href={value.name} target="_blank"> {value.i}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default RedesSociais;
