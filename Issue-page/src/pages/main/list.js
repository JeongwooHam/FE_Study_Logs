import OneIssue from "./one-issue";

const IssueList = ({ displayedIssues }) => {
  console.log(displayedIssues);

  return displayedIssues.map((issue, i) => <OneIssue issue={issue} key={i} />);
};

export default IssueList;
