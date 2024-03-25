import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileFooterContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface ProfileCardFooterProps {
  login: string;
  company: string;
  followers: number;
}

export function ProfileCardFooter({
  login,
  company,
  followers,
}: ProfileCardFooterProps) {
  return (
    <ProfileFooterContainer>
      <div>
        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>{login}</p>
        </div>

        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faBuilding}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>{company}</p>
        </div>

        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faUserGroup}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>{followers}</p>
        </div>
      </div>
    </ProfileFooterContainer>
  );
}
