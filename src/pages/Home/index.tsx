import { IssueCard } from "../../components/IssueCard";
import { ProfileCard } from "../../components/ProfileCard";
import { Filter } from "./Filter";
import { HomeContainer, IssuesGrid } from "./styles";

// const list = [{}, {}];

export default function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <Filter />
      <IssuesGrid>
        <IssueCard />
        <IssueCard />
        <IssueCard />
      </IssuesGrid>
    </HomeContainer>
  );
}
