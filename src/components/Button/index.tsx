import { Btn } from "./styles";

type Props = {
	children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }: Props) => {
  return <Btn>{children}</Btn>;
};

export default Button;
