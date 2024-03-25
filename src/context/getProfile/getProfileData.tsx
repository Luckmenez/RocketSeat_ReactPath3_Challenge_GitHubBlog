import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

interface ProfileData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  url: string;
  company: string;
  followers: number;
}

function getProfileData() {
  return api
    .get<ProfileData>("/users/luckmenez")
    .then((response) => response.data);
}

export function useGetProfileData() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfileData,
  });
}
