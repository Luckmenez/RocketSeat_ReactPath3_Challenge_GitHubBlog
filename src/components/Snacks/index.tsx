import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SnackContainer } from "./styles";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface SnacksProps {
  title: string;
  image: IconDefinition;
}

export function Snacks({ title, image }: SnacksProps) {
  return (
    <SnackContainer>
      <FontAwesomeIcon icon={image} style={{ color: "#3a536b" }} size="lg" />
      <p>{title}</p>
    </SnackContainer>
  );
}
