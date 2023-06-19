import { Octokit } from "@octokit/core";

const getIssues = async (owner, repo) => {
  const octokit = new Octokit({
    auth: process.env.GET_ISSUE_TOKEN_JW,
  });
  try {
    const res = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
      owner,
      repo,
      per_page: 50,
      sort: "updated",
      direction: "asc",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export default getIssues;
