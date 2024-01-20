import {
  ProfileCardContainer,
  ProfileDataContainer,
  ProfileDescription,
  ProfileTitle,
} from "./styles";
import ProfileAvatar from "../../assets/avatar.svg";
import { ProfileCardFooter } from "./ProfileCardFooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src={ProfileAvatar} />
      <ProfileDataContainer>
        <ProfileTitle>
          <h4>Cameron Williamson</h4>
          <div>
            <a href="http://google.com.br">GIT HUB</a>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div>
        </ProfileTitle>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileCardFooter />
      </ProfileDataContainer>
    </ProfileCardContainer>
  );
}
