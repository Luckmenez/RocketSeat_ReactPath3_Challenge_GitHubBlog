import { IssueCard } from "../../components/IssueCard";
import { ProfileCard } from "../../components/ProfileCard";
import { Filter } from "./Filter";
import { HomeContainer, IssuesGrid } from "./styles";
import { api } from "../../lib/axios";

import { useQuery } from "@tanstack/react-query";

interface Issue {
  id: number;
  body: string;
  title: string;
}

interface IssueData {
  total_count: number;
  items: Issue[];
}

async function getIssues() {
  const { data } = await api.get<IssueData>("search/issues?q=author:Luckmenez");
  return data;
}

export default function Home() {
  const {
    data: issues,
    isLoading,
    isError,
  } = useQuery<IssueData>({
    queryKey: ["issues"],
    queryFn: getIssues,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar issues</div>;
  }

  return (
    <HomeContainer>
      <ProfileCard />
      <Filter total_count={issues?.total_count || 0} />
      <IssuesGrid>
        {issues?.items?.map((issue) => (
          <IssueCard key={issue.id} title={issue.title} body={issue.body} />
        ))}
      </IssuesGrid>
    </HomeContainer>
  );
}
