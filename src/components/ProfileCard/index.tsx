import {
  ProfileCardContainer,
  ProfileDataContainer,
  ProfileDescription,
  ProfileTitle,
} from "./styles";
import { ProfileCardFooter } from "./ProfileCardFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProfileContext } from "../../context/profile-context";

export function ProfileCard() {
  const { name, avatar_url, url, bio, login, company, followers } =
    useContext(ProfileContext);
  return (
    <ProfileCardContainer>
      <img src={avatar_url} />
      <ProfileDataContainer>
        <ProfileTitle>
          <h4>{name}</h4>
          <div>
            <a href={url}>
              VER NO GITHUB
              <div className="space_container" />
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </div>
        </ProfileTitle>
        <ProfileDescription>{bio}</ProfileDescription>
        <ProfileCardFooter
          login={login}
          company={company}
          followers={followers}
        />
      </ProfileDataContainer>
    </ProfileCardContainer>
  );
}
