import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "../loading";
import IssueList from "./list";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { filterIssueList, getIssues } from "../../reducer/issue";
import { useIssueList } from "../../contexts/issueList";

const IssueMainPage = () => {
  const { issueList, setIssueList } = useIssueList();
  const targetList = useSelector((state) => state.issue.issueList);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const pageNumberFromURL = searchParams.get("page");
  const filterFromURL = searchParams.get("filter");
  const itemsPerPageFromURL = searchParams.get("items");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortOption, setSortOption] = useState("created");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.issue.getIssueState);

  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        const res = dispatch(
          getIssues({ owner: "angular", repo: "angular-cli" })
        );
        console.log("res", res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIssueList();
  }, []);

  useEffect(() => {
    console.log("targetList", targetList);
    const formattedIssueList = targetList.map((issue) => ({
      id: issue.id,
      userId: issue.twitter_username,
      number: issue.number,
      title: issue.title,
      date: issue.created_at,
      updateDate: issue.updated_at,
      commentCount: issue.comments,

      profileURL: issue.user.avatar_url,
      userName: issue.user.login,
      content: issue.body,
      labels: issue.labels,
    }));
    setIssueList(formattedIssueList);
    // dispatch(filterIssueList(formattedIssueList))
    console.log("issueList", issueList);
  }, [targetList]);

  useEffect(() => {
    setCurrentPage(pageNumberFromURL ? parseInt(pageNumberFromURL) : 1);
  }, [pageNumberFromURL]);

  useEffect(() => {
    setSortOption(filterFromURL || "created");
  }, [filterFromURL]);

  useEffect(() => {
    setItemsPerPage(itemsPerPageFromURL ? parseInt(itemsPerPageFromURL) : 10);
  }, [itemsPerPageFromURL, location.search]);

  const handlePageClick = (newPage) => {
    if (currentPage === newPage) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(newPage);
    navigate(`?page=${newPage}&filter=${sortOption}&items=${itemsPerPage}`);
  };

  const paginateIssues = (issues) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return issues.slice(startIndex, endIndex);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // 현재 페이지를 1로 설정
    navigate(`?page=1&filter=${sortOption}&items=${event.target.value}`);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1&filter=${event.target.value}&items=${itemsPerPage}`);
  };

  const sortIssues = (issues) => {
    if (sortOption === "created") {
      return issues.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "updated") {
      return issues.sort(
        (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
      );
    } else if (sortOption === "comments") {
      return issues.sort((a, b) => b.commentCount - a.commentCount);
    }
    return issues;
  };

  const totalPages = Math.ceil(issueList.length / itemsPerPage);
  const sortedIssues = sortIssues(issueList);
  const displayedIssues = paginateIssues(sortedIssues);

  return (
    <div>
      <SelectForm>
        <Select style={{ marginRight: "10px" }}>
          SORT{" "}
          <select value={sortOption} onChange={handleSortOptionChange}>
            <option value="created">CREATE</option>
            <option value="updated">UPDATE</option>
            <option value="comments">COMMENT</option>
          </select>
        </Select>
        <Select>
          SHOW:{" "}
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10 PER PAGE</option>
            <option value={20}>20 PER PAGE</option>
            <option value={50}>50 PER PAGE</option>
          </select>
        </Select>
      </SelectForm>
      <div>
        {loading ? (
          <LoadingPage />
        ) : (
          <IssueList displayedIssues={displayedIssues} />
        )}
      </div>
      <Pagenation>
        <LastBtn
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
        >
          FIRST
        </LastBtn>
        <LastBtn
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          PREV
        </LastBtn>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PageBtn
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              isSelected={currentPage === pageNumber}
            >
              {pageNumber}
            </PageBtn>
          );
        })}
        <LastBtn
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          NEXT
        </LastBtn>
        <LastBtn
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          LAST
        </LastBtn>
      </Pagenation>
    </div>
  );
};

export default IssueMainPage;

const Pagenation = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }
`;

const SelectForm = styled.div`
  margin-left: 5vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Select = styled.label`
  width: 80px;
  height: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  border-radius: 16px;
  border: 0.5px solid ${({ isSelected }) => (isSelected ? "black" : "white")};
  font-size: 13px;
  padding-left: 6px;
  padding-top: 3px;
  padding-bottom: 1px;
  margin-bottom: 10px;
`;

const LastBtn = styled.button`
  width: 50px;
  height: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  border-radius: 16px;
  border: 0.5px solid ${({ isSelected }) => (isSelected ? "black" : "white")};
  font-size: 13px;
  :hover {
    background-color: rgb(90, 83, 83);
  }
  @media (max-width: 767px) {
    width: 45px;
    height: 20px;
    font-size: 12px;
    text-align: center;
  }
`;

const PageBtn = styled.button`
  width: 50px;
  height: 20px;

  background-color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  border-radius: 16px;
  border: 0.5px solid ${({ isSelected }) => (isSelected ? "black" : "white")};
  font-size: 13px;
  :hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "white" : "rgb(90, 83, 83)"};
  }

  @media (max-width: 767px) {
    width: 45px;
    height: 20px;
    font-size: 12px;
    text-align: center;
  }
`;
