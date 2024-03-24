import { IssueCard } from "../../components/IssueCard";
import { ProfileCard } from "../../components/ProfileCard";
import { Filter } from "./Filter";
import { HomeContainer, IssuesGrid } from "./styles";
import { IssuesContext } from "../../context/issues-context";

import { useContext } from "react";

interface Issue {
  id: number;
  body: string;
  title: string;
}

export interface IssueData {
  total_count: number;
  items: Issue[];
}

export default function Home() {
  const { items: issues, total_count } = useContext(IssuesContext);

  return (
    <HomeContainer>
      <ProfileCard />
      <Filter total_count={total_count || 0} />
      <IssuesGrid>
        {issues?.map((issue) => (
          <IssueCard key={issue.id} title={issue.title} body={issue.body} />
        ))}
      </IssuesGrid>
    </HomeContainer>
  );
}
