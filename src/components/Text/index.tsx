import { Text } from "./styles";

type Props = {
	children?: React.ReactNode;
};

const Txt: React.FC<Props> = ({ children }: Props) => {
  return <Text>{children}</Text>;
};

export default Text;
