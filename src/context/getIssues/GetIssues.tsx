import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface User {
  login: string;
}

interface Issue {
  id: number;
  body: string;
  title: string;
  comments: number;
  created_at: Date;
  html_url: string;
  user: User;
}

interface IssuesData {
  total_count: number;
  items: Issue[];
}

type IssuesResponse = IssuesData;

async function getIssues() {
  const { data } = await api.get<IssuesResponse>(
    "search/issues?q=author:Luckmenez"
  );
  console.log("data ", data);
  return data;
}

export function useGetIssues() {
  return useQuery<IssuesResponse>({
    queryKey: ["issues"],
    queryFn: getIssues,
  });
}
