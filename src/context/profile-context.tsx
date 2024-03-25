import { createContext } from "react";
import { useGetProfileData } from "./getProfile/getProfileData";

interface ProfileData {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  url: string;
  company: string;
  followers: number;
  created_at: Date;
}

interface ProfileContextProvider {
  children: React.ReactNode;
}

export const ProfileContext = createContext<ProfileData>({} as ProfileData);

export function ProfileProvider({ children }: ProfileContextProvider) {
  const { data, isLoading, isError } = useGetProfileData();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError || !data) {
    return <div>Erro ao carregar perfil</div>;
  }

  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
}
