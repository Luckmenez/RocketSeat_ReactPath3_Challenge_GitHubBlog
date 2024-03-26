import { IssueCard } from "../../components/IssueCard";
import { ProfileCard } from "../../components/ProfileCard";
import { Filter } from "./Filter";
import { HomeContainer, IssuesGrid } from "./styles";
import { IssuesContext } from "../../context/issues-context";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

interface Issue {
  id: number;
  body: string;
  title: string;
}

export interface IssueData {
  total_count: number;
  items: Issue[];
}

function handleNavigateToIssue(navigate: NavigateFunction, id: number) {
  navigate("issue", { state: { id } });
}

export default function Home() {
  const navigate = useNavigate();
  const { items: issues, total_count } = useContext(IssuesContext);
  const [issuesState, setIssuesState] = useState<IssueData>({
    total_count: total_count || 0,
    items: issues,
  });

  function handleFilter(query: string) {
    const filteredIssues = query
      ? issues?.filter(
          (issue) => issue.title.includes(query) || issue.body.includes(query)
        )
      : issues;

    setIssuesState({
      total_count: filteredIssues.length,
      items: filteredIssues,
    });
  }

  return (
    <HomeContainer>
      <ProfileCard />
      <Filter
        filterIssues={handleFilter}
        total_count={issuesState.total_count || 0}
      />
      <IssuesGrid>
        {issuesState.items?.map((issue) => (
          <div
            onClick={() => handleNavigateToIssue(navigate, issue.id)}
            key={issue.id}
          >
            <IssueCard title={issue.title} body={issue.body} />
          </div>
        ))}
      </IssuesGrid>
    </HomeContainer>
  );
}
