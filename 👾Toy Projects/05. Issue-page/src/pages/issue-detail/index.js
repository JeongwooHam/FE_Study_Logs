import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const IssueDetailPage = () => {
  const navigate = useNavigate();
  const handlePageChange = () => {
    navigate("/");
  };

  const params = useParams();
  const issueId = params.id;
  console.log("targetId", params.id);

  // param의 id와 값 일치하는 데이터 받아오기
  const issueList = useSelector((state) => state.issue.issueList);
  const target = [...issueList].find((el) => el.id === parseInt(issueId));
  console.log("target", target);

  const imageURL = target.user.avatar_url;
  console.log("image", imageURL);

  // markdown 문법 수정
  // 주석 삭제
  const removeHtmlComments = () => {
    const visitor = (node) => {
      if (
        node.type === "html" &&
        node.value.startsWith("<!--") &&
        node.value.endsWith("-->")
      ) {
        return null;
      }
    };

    return (tree) => {
      tree.children = tree.children.filter((child) => visitor(child) !== null);
    };
  };

  return (
    <Box>
      <Container>
        <ImgContainer>
          <ProfileImg alt="img" src={imageURL} />
        </ImgContainer>
        <UserID>{target.user.login}</UserID>
        <IssueDetail>
          <IssueNumber>#{target.number}</IssueNumber>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IssueTitle>{target.title}</IssueTitle>
          </div>
          <DetailTop>
            <StateBox>{target.state}</StateBox>
            <div>
              <span>opened this issue on</span>
              {target.updated_at.split("T")[0]}
            </div>
            <div>|</div>
            <div>
              {target.comments}
              <span>comments</span>
            </div>
          </DetailTop>
        </IssueDetail>
        <IssueContentContainer>
          <div>
            <ReactMarkdown
              children={target.body}
              transformLinkUri={(uri) => uri.replace(/<!--.*?-->/g, "")}
              remarkPlugins={[remarkGfm, removeHtmlComments]}
              components={{
                pre: ({ node, children, ...props }) => (
                  <pre
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={{
                      borderLeft: "5px solid skyblue",
                      padding: "2rem",
                      lineHeight: "1.5rem",
                      margin: "2rem auto",
                    }}
                  >
                    {children}
                  </pre>
                ),
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      children={String(children).replace(/\n$/, "")}
                      style={a11yDark}
                      language={match[1]}
                      PreTag="div"
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </div>
        </IssueContentContainer>
        <BtnContainer>
          <GoBackBtn onClick={() => handlePageChange()}>
            {"Back to Main Page"}
          </GoBackBtn>
        </BtnContainer>
      </Container>
    </Box>
  );
};

export default IssueDetailPage;

const Box = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex-grow: 2;
  background-color: lightgray;
  width: 59vw;
  margin-left: 23vw;

  * {
    color: black;
  }
  border-radius: 16px;
`;

const ImgContainer = styled.div`
  margin-top: 19px;
`;

const ProfileImg = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

const UserID = styled.div`
  text-align: right;
  text-align: center;
  margin-top: 15px;
  font-size: 13px;
  font-weight: 500;
`;

const IssueDetail = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  span {
    margin: 10px;
  }
`;

const DetailTop = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 100;
  * {
    margin-right: 1vw;
  }
  div {
    line-height: 20px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const IssueTitle = styled.div`
  padding-left: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-right: 1vw;
`;

const IssueNumber = styled.div`
  font-weight: 100;
  color: gray;
  font-size: 24px;
`;

const IssueContentContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  width: 54vw;
  height: transparent;
  margin-left: 2.5vw;
  margin-bottom: 25px;
  padding: 20px;
  text-align: left;
  font-size: 12px;
  font-weight: 100;
  line-height: 20px;
  div {
    display: block;
    overflow: visible;
  }
  button {
    margin-top: 10px;
  }
`;

const BtnContainer = styled.div`
  margin: 10px 100px;
  margin-bottom: 20px;
`;

const GoBackBtn = styled.button`
  border: none;
  background-color: white;
  color: black;
  border-radius: 6px;
  padding: 10px;
  font-size: 12px;
  font-weight: 100;
  :hover {
    text-decoration: underline solid 1px black;
  }
  position: relative;
  bottom: 0px;
`;

const StateBox = styled.div`
  background-color: #1f883d;
  color: white;
  width: 80.63px;
  height: 32px;
  padding: 5px 12px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 200;
  border-radius: 2em;
`;
