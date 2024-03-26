import {
  IssueDescriptionCardHeaderContainer,
  IssueDescriptionCardHeaderTitle,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface IssueDescriptionCardHeaderProps {
  html_url: string;
}

export function IssueDescriptionCardHeader({
  html_url,
}: IssueDescriptionCardHeaderProps) {
  const navigate = useNavigate();
  return (
    <IssueDescriptionCardHeaderContainer>
      <IssueDescriptionCardHeaderTitle>
        <div onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </div>
        <a href={html_url}>
          GITHUB
          <div className="space_container" />
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </IssueDescriptionCardHeaderTitle>
    </IssueDescriptionCardHeaderContainer>
  );
}
