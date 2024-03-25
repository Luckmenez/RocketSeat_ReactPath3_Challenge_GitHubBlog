import { IssueDescriptionCardFooterContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { Snacks } from "../../Snacks";
import { useContext } from "react";
import { ProfileContext } from "../../../context/profile-context";
import { intlFormatDistance } from "date-fns";

export function IssueDescriptionCardFooter() {
  const { name, created_at } = useContext(ProfileContext);
  return (
    <IssueDescriptionCardFooterContainer>
      <Snacks title={name} image={faGithub} />
      <Snacks
        title={intlFormatDistance(created_at, new Date())}
        image={faCalendar}
      />
      <Snacks title="1 comment" image={faComment} />
    </IssueDescriptionCardFooterContainer>
  );
}
