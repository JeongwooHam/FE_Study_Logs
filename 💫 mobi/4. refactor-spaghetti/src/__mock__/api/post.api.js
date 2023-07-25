// msw를 사용하여 가상의 REST API endpoint 생성
import { rest } from "msw";
import {
  definePostComment,
  definePostDetail,
  definePostList,
} from "../data/post.data";

// getPostList와 getCommentList 하나로 합쳐 중복 제거

// page, limit, take 로직을 하나로 묶는 것이 좋을지?

// 게시글 목록 반환
export const getPostList = rest.get("/api/posts", async (req, res, ctx) => {
  // page, limmit, take parameter를 query string으로 받아서 페이지네이션 처리
  const page = req.url.searchParams.get("page");
  const limit = req.url.searchParams.get("limit");
  const take = req.url.searchParams.get("take");
  const count = 486;

  console.log(take);

  const totalPage = Math.ceil(count / parseInt(take));
  let startPage = Math.floor((page - 1) / limit) * limit + 1;
  let endPage = parseInt(startPage) + parseInt(limit) - 1;

  if (endPage >= totalPage) endPage = totalPage;
  if (startPage > endPage && endPage < totalPage) {
    startPage = endPage;
    endPage = startPage + limit - 1;
  }

  // 200 상태 코드와 페이지네이션 정보 반환
  return res(
    ctx.status(200),
    ctx.json({
      PageNation: {
        totalCount: count,
        totalPage,
        currentPage: parseInt(page),
        startPage,
        endPage,
      },
      Posts: definePostList(parseInt(take)),
    })
  );
});

// 특정 게시글의 상세 정보 반환
export const getPostDetail = rest.get("/api/post", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(definePostDetail));
});

// 댓글 목록 반환
export const getCommentList = rest.get(
  "/api/comments",
  async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const limit = req.url.searchParams.get("limit");
    const take = req.url.searchParams.get("take");
    const count = 311;

    console.log(take);

    const totalPage = Math.ceil(count / parseInt(take));
    let startPage = Math.floor((page - 1) / limit) * limit + 1;
    let endPage = parseInt(startPage) + parseInt(limit) - 1;

    if (endPage >= totalPage) endPage = totalPage;
    if (startPage > endPage && endPage < totalPage) {
      startPage = endPage;
      endPage = startPage + limit - 1;
    }

    return res(
      ctx.status(200),
      ctx.json({
        PageNation: {
          totalCount: count,
          totalPage,
          currentPage: parseInt(page),
          startPage,
          endPage,
        },
        Comments: definePostComment(parseInt(take)),
      })
    );
  }
);
