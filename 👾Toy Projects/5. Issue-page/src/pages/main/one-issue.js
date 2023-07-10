import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const OneIssue = ({ issue }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const HandleDetailPage = (id) => {
    searchParams.delete("page");
    searchParams.delete("filter");
    navigate(`/detail/${id}`);
  };

  //날짜 영어로 변경하는 로직 구글링함
  const getRelativeTime = (updateDate) => {
    const currentDate = new Date();
    const issueDate = new Date(updateDate);
    const diffInSeconds = Math.floor((currentDate - issueDate) / 1000);
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (diffInSeconds < 60) {
      return rtf.format(-diffInSeconds, "second");
    } else if (diffInSeconds < 3600) {
      return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
    } else if (diffInSeconds < 86400) {
      return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
    } else if (diffInSeconds < 2592000) {
      // 30일로 가정
      return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
    } else if (diffInSeconds < 31536000) {
      // 1년으로 가정
      return rtf.format(-Math.floor(diffInSeconds / 2592000), "month");
    } else {
      return rtf.format(-Math.floor(diffInSeconds / 31536000), "year");
    }
  };

  return (
    <Issue key={issue.id} onClick={() => HandleDetailPage(issue.id)}>
      <div>{issue.title}</div>
      <div>
        #{issue.number} updated {getRelativeTime(issue.updateDate)} by{" "}
        {issue.userName}
        <ReactMarkdown children={issue.label} remarkPlugins={[remarkGfm]} />
      </div>
      {issue.labels && (
        <div>
          {issue.labels.map((label) => (
            <Label
              key={label.id}
              className="Label"
              style={{
                backgroundColor: `#${label.color}`,
                color:
                  parseInt(label.color.replace("#", ""), 16) > 0xffffff / 2
                    ? "black"
                    : "white",
              }}
            >
              {label.name}
            </Label>
          ))}
        </div>
      )}
    </Issue>
  );
};
/* 수정중 */
export default OneIssue;

const Label = styled.span`
  height: 21px;
  padding: 3px;
  border: px solid white;
  border-radius: 12px;
  color: black;
  font-size: 12px;
`;

const Issue = styled.li`
  height: 150px;
  width: 50vw;
  background-color: #0e1117;
  border-radius: 16px;
  border: 0.5px solid white;
  color: white;
  margin: 10px 0px;
  margin-left: 25vw;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  color: #d3dadf;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  overflow: hidden;
  transition: all 0.1s linear;
  :hover {
    transform: scale(1.03);
  }
  div:nth-child(1) {
    font-weight: 900;
    font-size: 17px;
    color: white;
  }
  @media (max-width: 1200px) {
    width: 60vw;
    margin-left: 200px;
  }
  @media (max-width: 767px) {
    width: 60vw;
    margin-left: 20vw;
  }
`;
