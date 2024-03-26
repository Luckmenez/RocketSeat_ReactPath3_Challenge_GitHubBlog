import { createContext } from "react";
import { useGetIssues } from "./getIssues/GetIssues";

interface IssuesContextProvider {
  children: React.ReactNode;
}

interface User {
  login: string;
}

export interface Issue {
  id: number;
  body: string;
  title: string;
  comments: number;
  created_at: Date;
  user: User;
  html_url: string;
}

interface IssuesContextData {
  total_count: number;
  items: Issue[];
}

export const IssuesContext = createContext<IssuesContextData>(
  {} as IssuesContextData
);

export function IssuesProvider({ children }: IssuesContextProvider) {
  const {
    data: issuesData,
    isLoading: isLoadingIssues,
    isError: isErrorIssues,
  } = useGetIssues();

  if (isLoadingIssues) {
    return <div>Carregando...</div>;
  }

  if (isErrorIssues || !issuesData) {
    return <div>Erro ao carregar issues</div>;
  }

  return (
    <IssuesContext.Provider
      value={{
        items: issuesData.items,
        total_count: issuesData.total_count,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
