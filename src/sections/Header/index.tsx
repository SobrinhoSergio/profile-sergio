import { Header } from "./styles";

import Logo from "../UI/Logo";
import Burger from "../UI/Burger";
import DarkMode from "../UI/DarkMode";
import Navbar from "../UI/Navbar";

import Container from "../../components/Container";

const HeaderSection: React.FC = () => {
  return (
    <Header>
      <Container>
        <section className="header">
          <Logo />
          <DarkMode />
          <Burger />
        </section>
      </Container>
      <Navbar />
    </Header>
  );
};

export default HeaderSection;
