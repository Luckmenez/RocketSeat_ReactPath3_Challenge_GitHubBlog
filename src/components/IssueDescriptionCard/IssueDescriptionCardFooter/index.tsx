import { IssueDescriptionCardFooterContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { Snacks } from "../../Snacks";
import { intlFormatDistance } from "date-fns";

interface IssueDescriptionCardFooterProps {
  name: string;
  created_at: Date;
  comments: number;
}

export function IssueDescriptionCardFooter({
  name,
  created_at,
  comments,
}: IssueDescriptionCardFooterProps) {
  return (
    <IssueDescriptionCardFooterContainer>
      <Snacks title={name} image={faGithub} />
      <Snacks
        title={intlFormatDistance(created_at, new Date())}
        image={faCalendar}
      />
      <Snacks title={`${comments} comentários`} image={faComment} />
    </IssueDescriptionCardFooterContainer>
  );
}
