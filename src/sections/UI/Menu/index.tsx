import { Menu } from "./styles";

import Redes from "../Redes";
import DarKMode from "../DarkMode";
import Navbar from "../Navbar";

type Props = {
  open: boolean;
};

function MenuSocial(props: Props) {
  return (
    <Menu open={props.open}>
      <Redes />
      <Navbar />
      <DarKMode />
    </Menu>
  );
}

export default MenuSocial;
