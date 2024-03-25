import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface Issue {
  id: number;
  body: string;
  title: string;
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
