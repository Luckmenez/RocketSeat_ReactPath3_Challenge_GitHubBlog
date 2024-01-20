import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProfileFooterContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function ProfileCardFooter() {
  return (
    <ProfileFooterContainer>
      <div>
        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>cameronwll</p>
        </div>

        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faBuilding}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>RocketSeat</p>
        </div>

        <div className="card__foooter--snacks">
          <FontAwesomeIcon
            icon={faUserGroup}
            style={{ color: "#3a536b" }}
            size="lg"
          />
          <p>RocketSeat</p>
        </div>
      </div>
    </ProfileFooterContainer>
  );
}
