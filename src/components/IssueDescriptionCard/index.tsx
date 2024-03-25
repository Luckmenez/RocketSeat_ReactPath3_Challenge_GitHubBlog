import { useContext } from "react";
import { IssueDescriptionCardFooter } from "./IssueDescriptionCardFooter";
import { IssueDescriptionCardHeader } from "./IssueDescriptionCardHeader";
import { IssueDescriptionCardContainer } from "./styles";
import { ProfileContext } from "../../context/profile-context";

export function IssueDescriptionCard() {
  const { name, created_at } = useContext(ProfileContext);

  return (
    <IssueDescriptionCardContainer>
      <IssueDescriptionCardHeader />
      <h1>Javascript Data Types and Data Structure</h1>
      <IssueDescriptionCardFooter />
    </IssueDescriptionCardContainer>
  );
}
