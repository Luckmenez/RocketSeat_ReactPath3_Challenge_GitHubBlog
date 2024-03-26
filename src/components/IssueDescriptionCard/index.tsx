import { IssueDescriptionCardFooter } from "./IssueDescriptionCardFooter";
import { IssueDescriptionCardHeader } from "./IssueDescriptionCardHeader";
import { IssueDescriptionCardContainer } from "./styles";
import { Issue } from "../../context/issues-context";

interface IssueDescriptionCardProps {
  issue: Issue;
}

export function IssueDescriptionCard({ issue }: IssueDescriptionCardProps) {
  return (
    <IssueDescriptionCardContainer>
      <IssueDescriptionCardHeader html_url={issue.html_url} />
      <h1>{issue.title}</h1>
      <IssueDescriptionCardFooter
        created_at={issue.created_at}
        name={issue.user.login}
        comments={issue.comments}
      />
    </IssueDescriptionCardContainer>
  );
}
