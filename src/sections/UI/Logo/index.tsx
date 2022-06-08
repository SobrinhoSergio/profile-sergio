import { Logo } from "./styles";
import {Link} from "react-scroll";

const Lg: React.FC = () => {
  return (
    <Logo>
      <h1 className="logo-home">
        <Link to="home" spy={true} smooth={true} duration={300}>
          Dev <span className="destaque">Jr. 🚀</span>
        </Link>
      </h1>
    </Logo>
  );
};

export default Lg;
