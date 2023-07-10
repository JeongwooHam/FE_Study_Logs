import { styled } from "styled-components";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Toggle = ({ toggle }) => {
  // toggle1-first/second, toggle2-third/fourth 객체 만들어서 map 돌리는 것으로 로직 변경하기

  // 클릭된 값을 param으로 전달
  const [searchParams, setSearchParams] = useSearchParams();
  let activatedToggle = searchParams.get("title");

  const [isToggleOpen, setIsToggleOpen] = useState(
    activatedToggle === toggle.title
  );

  let targetOption = searchParams.get("key");

  const updateParam = (title, key) => {
    searchParams.set("title", title);
    searchParams.set("key", key);
    setSearchParams(searchParams);
  };

  if (toggle)
    return (
      <>
        <S.ToggleContainer>
          <S.Title isOpen={isToggleOpen}>
            {toggle.title}
            <BsFillSuitHeartFill
              className="ToggleIcon"
              onClick={() => setIsToggleOpen((prev) => !prev)}
            />
          </S.Title>
          {isToggleOpen &&
            toggle.children.map((option, i) => (
              <S.EachToggleOption
                key={i}
                onClick={() => updateParam(toggle.title, option.key)}
                isTarget={option.key === targetOption}
              >
                {option.content}
              </S.EachToggleOption>
            ))}
        </S.ToggleContainer>
      </>
    );
};

export default Toggle;

const ToggleContainer = styled.ul`
  margin: 50px;
  list-style: none;
`;

const Title = styled.div`
  padding: 0px;
  font-size: 28px;
  font-weight: bold;
  margin: 20px;
  .ToggleIcon {
    color: salmon;
    margin-left: 10px;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  }
`;

const EachToggleOption = styled.li`
  font-size: 20px;
  font-weight: 300;
  margin: 20px;
  height: 40px;
  line-height: 40px;
  background-color: ${(props) =>
    props.isTarget ? "rgba(255, 158, 170, 0.4)" : "transparent"};
`;

const S = { ToggleContainer, Title, EachToggleOption };
