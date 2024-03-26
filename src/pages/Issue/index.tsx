import { useContext } from "react";
import { IssueDescriptionCard } from "../../components/IssueDescriptionCard";
import { useLocation } from "react-router-dom";
import { Issue, IssuesContext } from "../../context/issues-context";
import { IssueContainer } from "./styles";
import { IssueBody } from "./IssueBody";

export default function Issue() {
  const { items } = useContext(IssuesContext);
  const location = useLocation();
  const id = location.state.id;
  const issue = items.find((issue) => issue.id === id);

  if (!issue) {
    return <div>Issue not found</div>;
  }

  return (
    <IssueContainer>
      <IssueDescriptionCard issue={issue} />
      <IssueBody body={issue.body} />
    </IssueContainer>
  );
}
