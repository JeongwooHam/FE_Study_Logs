// 서버 코드

/*
[node-fetch]
- 3버전부터 node 지원
- vercel의 serverless 함수를 통해 CommonJS를 지원하려면 ESN만 제공하는 3버전 사용 불가하여 2 사용 중
- 2버전은 별도의 definitely typed를 통한 타이핑 필요
*/

import fetch from "node-fetch";
import { VercelRequest, VercelResponse } from "@vercel/node";

const { APIKEY } = process.env;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  response.status(200).json(json);
}
