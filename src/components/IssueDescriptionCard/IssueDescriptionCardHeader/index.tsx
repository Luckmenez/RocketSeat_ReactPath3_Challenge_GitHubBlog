import {
  IssueDescriptionCardHeaderContainer,
  IssueDescriptionCardHeaderTitle,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function IssueDescriptionCardHeader() {
  const navigate = useNavigate();
  return (
    <IssueDescriptionCardHeaderContainer>
      <IssueDescriptionCardHeaderTitle>
        <div onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>VOLTAR</p>
        </div>
        <a href="http://google.com.br">
          GITHUB
          <div className="space_container" />
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </IssueDescriptionCardHeaderTitle>
    </IssueDescriptionCardHeaderContainer>
  );
}
