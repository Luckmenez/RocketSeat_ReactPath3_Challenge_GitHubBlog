import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";

interface IssuesContextProvider {
  children: React.ReactNode;
}

interface Issue {
  id: number;
  body: string;
  title: string;
}

interface IssuesContextData {
  total_count: number;
  items: Issue[];
}

type IssuesResponse = IssuesContextData;

export const IssuesContext = createContext<IssuesContextData>(
  {} as IssuesContextData
);

async function getIssues() {
  const { data } = await api.get<IssuesResponse>(
    "search/issues?q=author:Luckmenez"
  );
  return data;
}

export function IssuesProvider({ children }: IssuesContextProvider) {
  const { data, isLoading, isError } = useQuery<IssuesResponse>({
    queryKey: ["issues"],
    queryFn: getIssues,
  });

  console.log("aaaaa ", data);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError || !data) {
    return <div>Erro ao carregar issues</div>;
  }

  return (
    <IssuesContext.Provider value={data}>{children}</IssuesContext.Provider>
  );
}
