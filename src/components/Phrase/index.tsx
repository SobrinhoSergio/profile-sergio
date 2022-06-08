import { Phrase } from "./styles";

type Props = {
	children?: React.ReactNode;
};

const PhraseArticle: React.FC<Props> = ({ children }: Props) => {
  return (
    <Phrase>
      <h3>
        {children}
      </h3>
    </Phrase>
  );
};

export default PhraseArticle;
