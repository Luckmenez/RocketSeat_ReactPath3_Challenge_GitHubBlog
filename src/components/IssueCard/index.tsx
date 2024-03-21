import {
  IssueCardContainer,
  IssueCardDescription,
  IssueCardTitle,
} from "./styles";

interface IssueCardProps {
  title: string;
  body: string;
}

export function IssueCard({ title, body }: IssueCardProps) {
  return (
    <IssueCardContainer>
      <IssueCardTitle>
        <h4>{title}</h4>
        <span>Há 1 dia</span>
      </IssueCardTitle>
      <IssueCardDescription>
        <p>{body}</p>
      </IssueCardDescription>
    </IssueCardContainer>
  );
}
