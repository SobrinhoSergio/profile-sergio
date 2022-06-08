import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Appliance from "../Appliance";
import Parallax from "../Parallax";
import Parallax2 from "../Parallax2";

const Main: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Parallax />
      <Skills />
      <Appliance />
      <Portfolio />
      <Parallax2 />
    </div>
  );
};

export default Main;
