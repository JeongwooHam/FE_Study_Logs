<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/0aef51bc-b350-4af6-9814-a59236a6c3c7" width="60%"/></p>

## 🌟 Next.js 프로젝트 생성하기

```
npx create-next-app@latest [프로젝트명]
```

- [Reference](https://nextjs.org/docs/getting-started/installation)

## 🌟 Next.js Route System 실습하기

- init한 프로젝트에 라우트 만들기

```
- "/" (home)
- "/posts"
```

- posts route에는 https://jsonplaceholder.typicode.com/를 활용하여 ssr을 구현한 게시글 목록을 보여주세요

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/08571f45-7b03-4852-bcef-3e858e6df946" width="50%"/>
<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/78e36285-a4f2-4ccb-8745-5ce6529506d2" width="50%"/>

### 🤠 Next.js 13 버전에서 app 폴더가 추가되었습니다!

- Next.js에서 새롭게 추가된 App 폴더의 모든 컴포넌트는 기본 값이 Server Component로 설정되어 있다.
- 따라서 서버에서 데이터를 불러오는 작업을 별도의 추가 작업 없이 바로 할 수 있다.

```
🤔 Server-Components를 사용하면 무엇이 좋은가요?
```

1. Client-Side에서 돌아가지 않는 DB 및 API 등의 백엔드 서비스에 접근할 수 있다.
2. 보안 키 값들이 Client-Side에 드러나지 않도록 지킬 수 있다.
3. data-fetching과 렌더링을 동일한 환경에서 수행할 수 있다.
4. 서버에 렌더링을 캐싱할 수 있다.
5. 번들링할 JS 코드 양을 줄일 수 있따.

### 👩‍🏫 Next.js 13을 활용한 풀이 방법

- <code>@latest</code>로 설치된 Next.js가 13 버전이어서 해당 버전의 기능을 최대한 활용해 풀이해보았다.

> [routing](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)

1. 프로젝트 설치 시 생성된 app 폴더에 <code>page.tsx</code> 파일을 생성한다.
2. <code>next.config.js</code> 파일을 수정해 app 폴더를 사용할 수 있게 한다.

```
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```

3. <code>layout.tsx</code>

- 기존 pages 폴더 하위에 위치하던 <code>\_app.tsx</code> 파일과 <code>\_document.tsx</code> 파일의 역할을 대체한다.

4. <code>/posts</code> 라우팅 구현하기

- Next.js 13 버전은 12 버전의 파일 이름 라우팅 방식 대신 온전한 폴더 방식 라우팅 방식을 사용한다.
- 따라서 12 버전에서 <code>/pages/posts.tsx</code> 방식으로 진행했던 라우팅을 13 버전에서는 <code>app/posts/page.tsx</code> 파일을 생성하여 진행한다.
- <code>/posts</code> 까지가 폴더 방식 라우팅, 그리고 그 라우팅의 기본 파일이 <code>page.tsx</code>인 것이다.

5. home, posts 페이지를 이동하는 nav bar 생성하기

- <code>Header.tsx</code> 파일에 Link 태그를 사용한 Nav Bar를 구현했다.
- 13버전부터는 폴더 밑의 <code>page.tsx</code> 파일이 가장 먼저 읽히는 파일이 되었다.
- 따라서 <code>Header.tsx</code>라는 이름의 컴포넌트를 생성한다고 해서 <code>/Header</code>이라는 경로로 라우팅이 되지 않는다.

- 이후, layout.tsx의 RootLayout Header 컴포넌트를 추가해주었다.

```ts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
```

6. postList, onePost 컴포넌트 생성하기

- 이전 버전까지는 컴포넌트 생성을 위해서는 별도로 Component 폴더를 만들어 저장해주어야 했다.
- 하지만 이제는 <code>/app/posts</code> 폴더 아래에 바로 컴포넌트를 생성해줄 수 있다.

```
🤔 왜 useRouter을 사용하지 않고 Link 태그를 사용했나요?
```

- <code>Link from "next/link</code>
  - next에서 a 태그와 유사한 기능을 하도록 제공하는 태그로, SPA를 활용할 수 있다.
  - <code>a</code>를 생성하기 때문에 웹 사이트가 크롤링되어 **SEO에 유리**하다.
  - 페이지를 다시 로드하지 않고 SPA 동작처럼 보이게 한다.
  - **고정된 URL**로 이동하는 경우 Link 태그를 활용하면 좋다.
- <code>router.push</code>
  - react/next에서의 페이지 이동방식
  - 이미 다운로드 되어 있는 화면으로 이동한다.
  - 데이터 요청에 대한 response 값을 통한 다이나믹 라우팅 등 고정된 URL이 아닌 경우 <code>router.push</code>를 사용하면 좋다.
  - 대신 <code>a</code> 태그를 생성하지 않아 해당 태그는 크롤링되지 않고, 따라서 SEO에 불리하다.

> data-fetching

- Next.js가 13 버전으로의 업데이트에서 의도한 것은 Server-Side-Component이다.
- 이 때문에 13 버전부터는 모든 컴포넌트가 Server-Side 컴포넌트이고, 따라서 <code>getServerSideProps</code>를 사용하지 않고도 React 컴포넌트 안에서 바로 Server-Side 데이터를 가져올 수 있다.
- app 폴더에서는 data-fetching을 위해 <code>getServerSideProps</code>와 <code>getStaticProps</code> 함수 대신 fetchAPI를 사용할 수 있다.

```ts
export const fetchPosts = async (): Promise<PostType[]> => {
  const results = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: PostType[] = await results.json();
  return posts;
};
```

- fetch의 cache 옵션을 <code>no-store</code>로 설정해줌으로써 매 요청시마다 데이터를 refetch하고, 그 때마다 Server-Side에서 페이지를 생성한다.

#### 🔎 References

- [SSR 개념 이해와 Next.js로 실습까지 해보는 SSR 환경 구축하기](https://velog.io/@jeff0720/Next.js-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4-%EB%B6%80%ED%84%B0-%EC%8B%A4%EC%8A%B5%EA%B9%8C%EC%A7%80-%ED%95%B4%EB%B3%B4%EB%8A%94-SSR-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95)
