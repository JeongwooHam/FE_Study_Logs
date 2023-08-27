import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faCompass,
  faClapperboard,
  faPaperPlane,
  faHeart,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.NavUl>
        <li>
          <S.Img src="img/instaLogo.jpg" />
        </li>
        <li onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} />홈
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          검색
        </li>
        <li>
          <FontAwesomeIcon icon={faCompass} />
          탐색 탭
        </li>
        <li>
          <FontAwesomeIcon icon={faClapperboard} />
          릴스
        </li>
        <li>
          <FontAwesomeIcon icon={faPaperPlane} />
          메시지
        </li>
        <li>
          <FontAwesomeIcon icon={faHeart} />
          알림
        </li>
        <li>
          <FontAwesomeIcon icon={faSquarePlus} />
          만들기
        </li>
        <li onClick={() => navigate("/human")}>
          <S.ProfileImage src="img/profileImage.jpg" />
          프로필
        </li>
      </S.NavUl>
    </>
  );
};

export default SideNav;

const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 2%;
  width: 300px;
  height: 100%;
  position: fixed;
  line-height: 200%;
  li {
    cursor: pointer;
    margin: 5px 0;
    :hover {
      background-color: #d9d9d9;
    }
  }
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`;

const S = {
  NavUl,
  Img,
  ProfileImage,
};
