import { Title } from "./styles";

type Props = {
	children?: React.ReactNode;
};

const H1: React.FC<Props> = ({ children }: Props) => {
  return <Title>{children}</Title>;
};

export default H1;
