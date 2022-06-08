import { Container } from "./styles";

type Props = {
	children?: React.ReactNode;
};

const ContainerDiv: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ContainerDiv;
