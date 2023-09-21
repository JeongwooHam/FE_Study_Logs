<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/956b7fdd-1589-4cf8-9d61-3fa494ac22a2" width="60%"/></p>

- 기존의 Next.js에서는 <code>/page</code> 폴더에 웹 사이트의 모든 페이지 컴포넌트를 담아 처리하는 Page Router 방식을 사용했다.

<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/479132f6-99c3-455c-81d6-b8c54e88fc48" width="60%"/></p>

```
👩‍🏫 Next.js는 13.4 버전부터 새로운 App Router을 지원합니다!
```

## 🧭 App Router

- React Server Components를 기반으로 구축되었다.
- 서버 데이터를 가져오기에 중점을 두고 있다.
- 경로 이동 시 페이지를 다시 렌더링하지 않고, SPA처럼 URL만 업데이트하면 next.js는 변경된 segment만 렌더링한다.

### ✏️ Layout

- 주소 이동 간 상태를 유지하는 복잡한 인터페이스를 쉽게 배치할 수 있게 한다.
- 비용이 많이 드는 리렌더링을 방지하면서 자체 경로 패턴을 사용할 수 있게 한다.
- 레이아웃을 중첩하고, 컴포넌트나 스타일 같은 경로와 응용 프로그램의 코드를 조합할 수 있게 한다.

<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/af0b4f61-f3e6-4721-af86-735b6b8f648a" width="50%"/></p>

```
🧐 App Router에서 http://주소/dashboard 라우팅을 하려면 어떻게 해야 할까?
```

1. <code>/app/dashboard/page.js</code> 파일 생성하기

```js
// app/dashboard/page.js
export default function Page() {
  return <div>Hello, Word!:)</div>;
}
```

2. 같은 폴더 내에 layout 파일 정의하기

```js
// app/dashboard/layout.js
export default function BlogLayout({ children }) {
  return <section>{children}</section>;
}
```

- layout은 dashboard 내의 모든 곳에서 UI를 공유한다.
- layout은 상태를 유지하고, 해당 폴더 내에서 탐색할 때 리렌더링이 되지 않는다.

### 🖌️ Server Component

| 서버 컴포넌트                                                                                                                                                                | 클라이언트 컴포넌트                                                                                                                                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - 서버에서 직접 데이터를 가져온다. <br/> - 보안에 민감한 정보에 안전하게 접근할 수 있다. <br/> - 렌더링에 필요한 라이브러리를 번들에 필요하지 않아 JS 사이즈를 줄일 수 있다. | - <code>onClick</code>, <code>onChange</code>와 같은 이벤트 리스너를 등록할 수 있다. <br/> - useState, useReducer, useEffect와 같은 상태와 생명주기를 관리할 수 있다. <br/> - 브라우저에서 사용할 수 있는 API나 custom hook을 구현할 수 있다. |

- React의 서버 컴포넌트 아키텍처를 지원한다.
  - 클라이언트로 전송되는 JS의 양을 줄일 수 있다.
  - 복잡한 인터페이스 구축이 가능해 초기 페이지 로드 속도가 빨라진다.
- 클라이언트 컴포넌트에서는 서버 컴포넌트를 import 할 수 없다.
  - 클라이언트 컴포넌트 하위에 서버 컴포넌트가 위치해야 하는 경우 상위의 서버 컴포넌트에서 children으로 넘겨주어야 한다.

> 🚨 서버 컴포넌트와 CSS-in-JS

- 현재 서버 컴포넌트에서는 런타임 JS를 필요로 하는 CSS-in-JS를 사용할 수 없다.
- 따라서 CSS-in-JS를 사용하는 경우 서버 컴포넌트에서는 사용이 불가능하다는 점을 염두에 두어야 한다.

### 🖍️ Streaming

<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/a1e1b6e1-8e60-4cb8-b808-a249e688d27e" width="50%"/></p>

- dashboard 내부에 <code>loading.js</code>를 추가해 로딩 상태를 표시할 수 있다.
  - 어떤 위치에서 로딩이 발생하면 이미 Next.js에서 로드된 <code>loading.js</code> 파일 기반 컴포넌트를 사용해 로딩 중임을 표시한다.
  - 데이터 로딩이 완료되면 해당 부분을 먼저 표시한다.

### 💫 Server-Centric Routing with Client-Side Navigation

- 서버 중심 라우팅을 사용하여 서버 컴포넌트 + 서버의 data fetching과 일치시킨다.

  - 클라이언트는 route map을 다운로드하지 않아도 된다.
  - 동일한 요청을 통해 서버 컴포넌트에서 경로를 탐색할 수 있다.
  - ➡️ **경로가 많은** 애플리케이션에 더 큰 영향을 미친다.

- Link Component에서는 SPA의 동작과 유사하게 클라이언트 측 네비게이션을 사용한다.

  - 사용자가 새 경로로 이동할 때 브라우저가 페이지를 다시 로드하지 않는다.
  - URL이 업데이트 되고, Next.js는 변경되는 segment만 렌더링한다.

- 사용자의 앱 탐색 시 라우터는 React 서버 구성요소 payload 값을 클라이언트 측 캐시에 저장한다.
  - 캐시는 경로 segment 별로 분할되어 모든 수준에서 무효화할 수 있다.
  - React의 동시 렌더링에 대한 일관성을 보장한다.
  - ➡️ 특정한 경우 이전 segment 캐시를 다시 사용하여 성능을 항샹시킬 수 있다.

### 🤖 Partial Rendering

- 형제 경로 간 탐색 시 Next.js는 변경되는 경로의 레이아웃과 페이지만 가져와서 렌더링한다.
  - 예: <code>/blog</code>, <code>/blog/post</code>
  - 하위 트리 segment 상위의 것은 다시 가져오거나 리렌더링하지 않는다.
  - ➡️ layout을 공유하는 경로에서는, 사용자가 형제 페이지 간 이동시 layout이 유지된다.

### 💡 Advanced Routes

> Parallel Routes

- 동일한 layout에서 하나 이상의 페이지를 동시(좌) 또는 조건부(우)로 렌더링할 수 있다.

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/282de60c-3dea-4c91-96a1-93268d7d67ec" width="40%"/>
<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/d9991f20-664d-42c2-bf97-1bfb947d0dd6" width="50%"/>

> Intercepting Routes

- 현재 페이지의 컨텍스트를 유지하면서도 현재 layout 내에서 경로를 로드할 수 있다.

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/f4eca71a-0fc3-4733-9c71-59ea36c531b2" width="50%"/>

- 예시 상황
  - 현재 페이지(/blog)에서 모달을 띄울 때, post 페이지를 유지하면서 모달의 경로(post/13)로 URL을 변경할 수 있다.

## 🤔 PageRouter와는 어떤 차이가 있을까?

|        특징        | App Router                                                                                                                                                        | Page Router                                                                                                                                                  |
| :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|        목적        | - 전체 애플리케이션에 대한 전반적인 라우팅과 탐색 처리 <br/> - URL에 기반하여 정확한 페이지를 렌더링하고, 페이지 간 이동을 관리한다.                              | - 개별 페이지 내의 라우팅을 처리한다. <br/> - 다이나믹 라우팅에 대한 정의와 페이지의 특별한 콘텐츠를 렌더링하기 위한 라우트 파라미터에 대한 접근을 지원한다. |
|    라우팅 유형     | 서버 중심                                                                                                                                                         | 클라이언트 중심                                                                                                                                              |
|    번들 사이즈     | 더 작다                                                                                                                                                           | 더 크다                                                                                                                                                      |
| 서버 컴포넌트 지원 | ⭕                                                                                                                                                                | ❌                                                                                                                                                           |
|       복잡성       | 더 복잡함                                                                                                                                                         | 더 단순함                                                                                                                                                    |
|        구조        | - 주로 <code>\_app.js</code> 또는 <code>\_app.tsx</code> 파일에 구현되어 있다. <br/> - 전체 애플리케이션을 감싸고 전반적인 페이지의 라우팅과 레이아웃을 제어한다. | - 개별 페이지 컴포넌트 내부에 구현되어 있다. <br/> - 라우팅 로직을 정의하고 현재 라우트에 기반하여 해당 콘텐츠가 렌더링 되어야 하는지 여부를 판단한다.       |

- Page Router에서는 SSR/SSG로 개발 시 React Query의 <code>Hydrate</code>를 <code>\_app.tsx</code>에서 쉽게 사용할 수 있었다.
  - App Router에서는 각 <code>page.tsx</code>마다 <code>Hydrate</code>에 매번 선언해주어야 한다.

### 🖼️ layout

> Page Router

- 전역으로 공유하는 layout 지정을 위해 <code>\_app</code> 파일을 사용한다.
- 여러 layout을 구성할 수 없다.
- data fetching과 컴포넌트를 함께 배치할 수 없다.

> App Router

- app 디렉토리 내에 **root layout**을 반드시 포함시켜야 한다.
- root layout 뿐만 아니라 각각의 layout을 구성할 수 있다.
- data fetching을 컴포넌트와 동시에 할 수 있다.

### 🌍 location

> Page Router

- pages 디렉토리를 사용한다.
- <code>디렉토리명/파일명</code>로 경로가 설정된다.
  - pages/index.js ➡️ <code>/</code>
  - pages/post.js ➡️ <code>/post</code>
  - pages/post/index.js ➡️ <code>/post</code>
  - pages/post/user/component.js ➡️ <code>/pose/user/component</code>
- 모든 파일이 경로가 되므로 <code>component.js</code> 등의 파일은 pages 디렉토리 밖에 위치시켜야 한다.

```
src/pages
├─_app.js // root layout
├─index.js // root page
└─post
  └─index.js
  └─user
    └─component.js // 라우팅과 관련없는 코드지만 post/user/component라는 경로가 생긴다.
```

> App Router

- app 디렉토리를 사용한다.

<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7c2298b9-795e-4909-86d7-c44cf196e149" width="50%"/></p>

- colocation
  - app 하위에 모든 파일을 함께 구성할 수 있다.
  - 디렉토리로 경로를 정의한다.
  - 페이지를 위한 파일은 <code>page.js</code>, server-side API를 위한 파일은 <code>route.js</code>에 정의하는 등의 방식을 사용한다. (아래의 file convention에서 더 자세히 다룰 예정)
- Page Router보다 우선 순위가 높다.

```
src/app
├─layout.js // root layout (필수)
├─page.js // root page
├─page_1
   └─page.js
└─page_2
  └─page.js
  └─component.js // 라우팅과 관련없는 코드이므로 라우팅의 대상이 되지 않는다.
    └─user
      └─page.js
```

### 📑 layout, loading, error 파일

- 페이지를 구성하기 위한 파일들(error, layout, ...)이 추가되었다.
- <code>Page</code>를 제외하면 페이지 구성에 필수적인 요소들은 아니나, 각 상황 및 상태에 대한 적절한 기능을 구현하기 위해서는 추가 파일들이 필요하다.
- 복잡해보일 수도 있지만 한 파일 내에 존재하는 코드가 분산된다는 장점도 있다.
  - Page Router에서는 <code>/pages/blog.tsx</code> 하나에 모두 포함되어 있었을 코드가 App Router에서는 layout, loading, error 등의 파일로 분산되며 코드 가독성이 좋아졌다.
  - 협업 과정에서는 한 파일 내에서 여러 기능을 구현할 필요 없이 기능 분산이 가능하므로 편리해진다.

```
👩‍🏫 코드 가독성이 높아지는 대신, 폴더가 복잡해졌다고 생각합시다!
```

### 🪄 Data Fetching

> Page Router

- <code>getInitialProps</code>
  - 이미 서버에 있는 데이터를 사용해서 server-side 렌더링을 할 때 사용한다.
- <code>getServerSideProps</code>
  - 페이지에 접근할 때마다 server-side 렌더링에 필요한 데이터를 가져오기 위해 사용한다.
  - 최신 데이터가 필요할 때
- <code>getStaticProps</code>
  - 정적 페이지 생성 시 필요한 데이터를 가져오기 위해 사용한다.

> App Router

- <code>getInitialProps</code>, <code>getServerSideProps</code>, <code>getStaticProps</code>와 같은 메서드를 더이상 사용하지 않는다.
- React Server Component에 기반하여 서버 데이터를 가져온다.
  - 서버 DB 리소스에 직접 접근이 가능하다.
  - 민감한 정보를 클라이언트 측에 노출시키지 않을 수 있다.
  - 이를 통해 성능이 향상된다.
  - 빌드 시 data fetching이 이루어지고, 캐싱된다.
  - <code>useEffect</code>를 사용하여 데이터를 패칭하고, 상태를 변경하는 방식을 사용하지 않을 수 있다.
- 또한 클라이언트 측에서 데이터를 가져오는 것도 여전히 가능하다.
- POST 요청을 제외하면 요청을 캐싱하고, 중복을 제거한다.

### 🗺️ metadata, sitemap 생성

- Page Router보다 간편한 방식으로 metadata와 sitemap을 생성할 수 있다.
- App Router에서는 layout이나 page에서 <code>metadata</code> 객체를 export 하거나 <code>generateMetadata</code> 함수가 반환하는 객체로 메타 태그들을 생성할 수 있다.
  - 덧붙여, 각 페이지 별로 정의된 metadata에 정의되지 않는 속성들은 root layout에 정의되어 있는 metadata로부터 상속받는 것처럼 동작한다.
  - ➡️ 이를 통해 중복 코드를 줄일 수 있다!

### 🚩 새롭게 바뀐 <code>useRouter</code>

- Page Router에서는 <code>next/router</code>에서 <code>useRouter</code>을 가져와서 사용했다.
  - App Router에서는 <code>next/navigation</code>에서 가져오도록 변경되었다.
- App Router의 <code>useRouter</code>은 기존 Page Router의 <code>useRouter</code>에서 제공하는 기능들 중 라우팅과 관련된 기능들만 담당한다.
  - pathname과 관련된 기능은 <code>usePathname</code>, query와 관련된 기능은 <code>useSearchParams</code>로 분리되었다.
  - 둘 다 <code>next/navigation</code>에서 가져올 수 있다.

> 숨겨진 쿼리와 <code>useSearchParams</code>

- 기존 Page Router의 <code>useRouter</code>에서는 URL과 query를 얻고, 라우팅도 가능했다.
  - App Router에서는 각 기능에 맞게 <code>useRouter</code>, <code>usePathname</code>, <code>useParams</code>, <code>useSearchParams</code>로 분리되었다.
- 변경 후, <code>useSearchParams</code>가 숨겨진 query를 가져오지 못한다.

  ```js
  import NextLink from "next/link";

  <NextLink href="/blog/tmp?disclosure=true" as="/blog/tmp">
    NEXT
  </NextLink>;
  ```

  - 위처럼 <code>disclosure=true</code>를 숨기면서 라우팅을 구현한 경우를 가정해보자.
  - Page Router에서는 <code>router.query</code>를 사용하여 숨겨진 disclosure의 값을 얻을 수 있었다.
  - App Router에서는 query를 얻는 훅인 <code>useSearchParams</code>를 사용하여도 이와 동일한 기능을 구현할 수 없다.

> [Router Events의 부재](https://github.com/vercel/next.js/discussions/41745#discussioncomment-3987025)

- Page Router에서는 router에 이벤트를 등록하여 라우팅 전후 등의 특정 시점에 특정 동작을 발생시킬 수 있었다.
- App Router에서도 이벤트 등록을 지원은 하고 있지만, 라우팅 전에는 동작하지 않는다.

### ⚠️ 내장 i18n 지원

- Page Router에서는 <code>next.config.js</code>에 간단한 설정 추가 시 내장된 i18n 기능을 사용할 수 있었다.
- App Router에서는 i18n 기능을 직접 구현해야 한다.
  - middleware를 직접 작성하여 locale 없을 경우 re-direction 시키기
  - <code>app/[locale]</code> 폴더를 통한 다이나믹 라우팅 구현으로 직접 locale 얻기

> 🌐 i18n (국제화)

- Internationalization의 축약형이다.
  - i와 n 사이에 18개의 알파벳이 있어서 위와 같이 축약되었다.
- SW 국제화
  - SW가 특정 지역이나 언어에 종속되지 않고 다양한 지역, 언어에서 정상 동작하도록 국제적으로 통용되는 SW를 설계하고 개발하는 과정
- SW 국제화에서 고려되어야 할 사항
  |주요 요소|설명|목적|
  |:--:|:--|:--|
  |유니코드|세계의 모든 문자를 컴퓨터에서 일관되게 표현하고 다룰 수 있도록 설계된 산업 표준|각 언어와 문자 체계에 따른 충돌 문제를 해결할 수 있다.|
  |리소스 외부화 및 관리|이미지, 소스코드 등으로부터 리소스를 분리하는 것|프로그램의 수정 없이도 다국어 지원을 가능케 한다.|
  |locale 대응|날짜/시간 형식, 달력, 통화 기호, 문자열 정렬 순서 등| 국제화 라이브러리를 이용하여 다수의 locale에 유연하게 대응할 수 있게 한다. |
  |Localizability|다국어로 번역될 경우 사용자 인터페이스에 미칠 영향을 분석하는 것|UI가 구성한 의도에 맞게 언어별로 처리 가능한지를 확인할 수 있다.|

### 🚨 App Router를 지원하지 않는 라이브러리들

> [msw](https://github.com/mswjs/msw/issues/1610)

- next.js에서 최상위 layout과 하위 children을 서로 다른 node 프로세스로 평가하고 있어 msw가 요청을 가로채지 못하는 것으로 추정된다고 한다.
- 서버 컴포넌트에서의 사용이 지원되지 않는 것이므로 현재는 클라이언트 측 data fetching에 대한 mocking 용도로만 사용 가능하다.

> [emotion](https://github.com/emotion-js/emotion/issues/2928)

- emotion과 이를 기반으로 한 Material UI는 아직 App Router를 지원하지 않고 있다.
- ➡️ emotion 대신 추가적인 로직을 통해 App Router에서도 사용 가능한 **styled-components**를 사용할 수 있다.

## 🧐 App Router와 Page Router의 렌더링 방식 차이

### 💡 SSG

> App Router

- 서버 컴포넌트/클라이언트 컴포넌트에서 다르게 동작한다.
- 서버 컴포넌트
  - 렌더링 될 때 HTML을 생성한다.
  - 관련 JS 코드가 클라이언트 측에 전송되지 않는다.
- 클라이언트 컴포넌트
  - HTML 및 JSON 데이터를 미리 렌더링하고, 서버에 캐싱한다.
  - 캐싱 결과는 클라이언트로 전송되어 hydration 된다.

> Page Router

- App Router의 클라이언트 컴포넌트와 동일하게 동작한다.

### 💡 ISR

> App Router

- ⚠️ 공식문서에서 언급이 삭제되었다!

> Page Router

- 최초 빌드 시 생성한 정적 페이지를 캐싱하고 계속 사용하는 SSG와 달리, ISR은 주기적으로 정적 페이지를 재생성한다.
- <code>getStaticProps</code>의 반환값에 revalidate 필드를 추가하여 구현한다.

### 💡 SSR

> App Router

- Dynamic Rendering이라는 명칭으로 사용된다.
- 정적 렌더링 과정에서 동적 기능 또는 동적 <code>fetch()</code>, <code>searchParams</code>의 prop 등이 감지되면 해당 경로를 Dynamic Rendering 적용이 필요한 대상으로 판단한다.
  - 동적 기능: 서버 컴포넌트의 <code>cookies( )</code>, <code>headers( )</code>
  - 동적 <code>fetch( )</code>: <code>no-store</code>이나 <code>revalidate: 0</code> 옵션이 있는 fetch

> Page Router

- 페이지에 접근할 때마다 필요한 데이터를 가져와 서버에서 렌더링한다.
- <code>getServerSideProps</code>를 사용한다.

## 🗂️ App Router에서 지원하는 File Convention의 종류와 활용도

```js
<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>
```

- App Router에서 페이지를 구성하기 위해서는 URL 경로와 동일한 이름의 폴더가 반드시 있어야 하며, 그 하위에 <code>Page</code> 파일이 있어야 한다.

```
👩‍🏫 추가된 파일들에 대해 자세히 알아봅시다!
```

### 📄 <code>page.js</code>

- 고유한 경로를 갖는 UI이다.

```ts
// app/blog/[slug]/page.tsx

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <h1>My Page</h1>;
}
```

- 항상 route subtree의 leaf이다.
<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/d93f6248-f2c8-4709-8497-4d03ffece92d" width="50%"/></p>
- 기본적으로 서버 컴포넌트이지만 <code>use client</code> 명령어를 사용하여 클라이언트 컴포넌트로 사용할 수 있다.
- data를 fetching 할 수 있다.

> params (optional)

- 루트 파일로부터 해당 페이지로까지의 동적 라우팅 경로를 나타내는 파라미터를 param으로 받을 수 있다.
  |예시|URL|params|
  |:--:|:--:|:--:|
  |<code>app/blog/[slug]/page.tsx</code>|<code>/blog/1</code>|{slug: "1"}|
  |<code>app/blog/[user]/[date]/page.tsx</code>|<code>/blog/1/0921</code>|{user: "1", date: "0921"}|
  |<code>app/blog/[...slug]/page.tsx</code>|<code>/blog/1/2</code>|{slug: ["1", "2"]}|

> serachParams (optional)

- 현재 URL의 파라미터 값을 받을 수 있다.
  |URL|searchParams|
  |:--:|:--:|
  |<code>/blog?a=1</code>|{a: "1"}|
  |<code>/blog?a=1&b=2</code>|{a: "1", b: "2"}|
  |<code>/blog?a=1&a=2</code>|{a: ["1", "2"]}|

### 📄 <code>layout.js</code>

- 여러 경로 간에 공유되는 UI이다.
- 네비게이션 시 상태를 보존하고, 상호작용을 유지하며, 리렌더링이 발생하지 않는다.
- 중첩이 가능하다.
- 각 route segment에 고유한 layout을 설정할 수 있으며, 이는 해당 segment의 모든 페이지에서 공유된다.
- 부모 layout과 자식 layout 간 데이터를 전달할 수 없다.
  - 하지만 라우터에서 동일한 데이터를 두 번 이상 가져올 수 있다.
  - React는 성능에 영향을 주지 않으면서 중복 요청을 자동 제거한다.

> 🌳 root layout (required)

- 루트 app 디렉토리에서 가장 최상위의 레이아웃 ➡️ app 디렉토리는 반드시 root layout을 포함해야 한다.
- 앱의 모든 페이지에서 공유된다.
- **_html_**과 **_body_** 태그 및 전역으로 공유되는 다른 UI를 정의하기 위해 사용된다.
  - 반드시 html과 body 태그를 정의해주어야 한다. (자동 생성 X)
- 기본적으로 서버 컴포넌트이며, 클라이언트 컴포넌트로 사용할 수 없다.
- 이를 통해 서버로부터 받는 초기 HTML 파일을 수정할 수 있다.
- 내장 SEO 지원을 사용해 head HTML 요소를 관리할 수 있다.

```ts
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 📄 <code>loading.js</code>

- Suspense에 기반한 로딩 상태를 생성할 수 있다.
- page 또는 자식 segment를 React Suspense Boundary로 감싼 후, 로딩 상태일 때 loading UI를 보여준다.
- 기본적으로 서버 컴포넌트이지만 <code>use client</code> 명령어를 사용하면 클라이언트 컴포넌트로서도 사용될 수 있다.
- Loading UI 컴포넌트는 어떠한 파라미터도 허용하지 않는다.

### 📄 <code>error.js</code>

- Route Segment의 에러 발생 시 UI 경계를 정의한다.
- 서버 컴포넌트와 클라이언트 컴포넌트에서 발생하는 예기치 못한 에러를 잡고, fallback UI를 화면에 보여줄 때 유용하다.
- 에러 컴포넌트는 클라이언트 컴포넌트에서 사용되어야 한다.
- 앱의 다른 기능을 유지하며 영향을 받는 segment에 대한 오류만 분리할 수 있다.

> 🧐 어떻게 동작할까?

- route segment와 중첩된 children을 <code>React Error Boundary</code>로 감싸서 사용한다.
- 자동으로 중첩된 child segment와 <code>page.js</code>를 감싸는 React Error Boundary를 만든다.
- fallback error component가 활성화되면, error boundary 상위의 layout은 상태를 유지하고 상호작용할 수 있다.
- error component는 오류 복구 기능을 제공한다.

```js
<Layout>
  <ErrorBoundary fallback={<Error />}>{...children}</ErrorBoundary>
</Layout>
```

> 🪄 Error 복구하기

- 전체 페이지를 리로드하지 않고도 오류 복구를 시도하게 할 수 있다.
- Error component에서는 <code>reset()</code > 기능을 사용하여 사용자에게 오류 복구 시도 요청 메시지를 표시할 수 있다.

```js
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // segment를 리렌더링함으로써 복구를 시도한다.
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
```

- 실행될 경우 Error Boundary의 내용을 리렌더링하려고 시도한다.
- ➡️ 성공 시 fallback error component가 리렌더링의 결과로 대체된다.

> ⚒️ layouts에서 에러 처리하기

- <code>error.js</code>의 바운더리는 동일한 segment 간 <code>layout.js</code>와 <code>template.js</code>에서 던져진 error를 캐치하지 않는다.
  - 대신 형제 간 공유되는 중요한 UI를 표시하고, 작동하도록 유지한다.
- 따라서 특정 layout이나 template에서 오류를 처리하기 위해서는 <code>error.js</code> 파일을 layouts의 부모 segment 위치에 두어야 한다.

> <code>global-error.js</code>

- <code>error.js</code>와 유사하나 **_root layout_**의 오류를 포착하기 위해 사용된다.
  - root의 <code>app/error.js</code>에서는 <code>app/layout.js</code>나 <code>app/template.js</code>의 에러를 잡아내지 않는다.
  - ➡️ <code>app/global-error.js</code>에서 이를 제어해야 한다.
- root layout 또는 root template의 오류를 핸들링하기 위해 변형하여 사용된다.

### 📄 <code>not-found.js</code>

- <code>notFound</code> 상황(route segment나 URL이 어떠한 route와도 매치되지 않는 경우) 보여줄 UI로 사용된다.
- 루트 <code>not-found.js</code> 파일은 전체 애플리케이션에서 연결되지 않은 URL들을 관리한다.
  - app에 의해 제어되지 않는 URL을 방문한 사용자는 <code>app/not-found.js</code> 파일에 대한 UI를 보게 된다.
- 기본적으로 서버 컴포넌트이므로 data fetching과 데이터 렌더링을 위해 이것을 async로 표시할 수 있다.

```ts
import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  const data = await getSiteData(domain);
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  );
}
```

### 📄 <code>route.js</code>

- 웹의 Request/Response API를 사용하여 주어진 경로에 대한 커스텀 요청 제어를 가능하게 한다.
- 라우트의 server-side API endpoint를 만들 수 있게 한다.
- API는 이 파일에 작성해야 하며, 추가적 설정이 없는 경우 API 결과를 캐싱한다.

### 📄 <code>template.js</code>

- 각 자식 layout이나 페이지를 감싼다는 점에서 <code>layout.js</code>와 비슷하다.
- 경로 간 상태를 유지하는 layout과 달리, template은 경로 이동에 대한 각 자식들마다 새로운 인스턴스를 생성한다.
  - 사용자가 template을 공유하는 경로를 이동할 때마다 컴포넌트의 새 인스턴스가 마운트되고, DOM 요소를 재생성하며 상태를 보존하지 않고 다시 동기화시킨다.

```
🧐 layout 대신 template을 사용해야 하는 경우도 있을까?
```

<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/e179b82e-1879-4b44-83e7-71ffa427b792" width="50%"/></p>

- <code>useEffect()</code>나 <code>useState</code>에 의존하는 기능들
  - 예: useEffect ➡️ 페이지 조회를 로깅하는 경우, useState ➡️ 페이지마다 피드백을 받는 양식
- 기본 프레임워크의 행동 양식을 변경하려고 하는 경우
  - layout 내부의 Suspense Boundary는 layout이 처음 로드될 때에만 fallback을 보여주고, 페이지를 전환하는 경우 보여주지 않는다.
  - template을 사용하면, fallback이 각 페이지 이동마다 보이게 된다.
- CSS 또는 애니메이션 라이브러리를 사용하여 애니메이션에 접속하거나 나갈 때

```
👩‍🏫 이처럼 특별한 경우가 아니라면 layouts를 사용합시다!
```

#### 🔎 References

- [NEXT.JS 13.4 문서 - 2(Routing - 1)](https://velog.io/@malza_0408/NEXT.JS-13.4-%EB%AC%B8%EC%84%9C-2Routing)
- [[Next JS] Pages Router 에서 App Router 전환기](https://www.timegambit.com/blog/blog-log/app-router)
- [[번역] Next.js 13.4](https://velog.io/@typo/next.js-13.4)
- [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)
- [Understanding the Next.js App Router](https://makerkit.dev/courses/nextjs-app-router/router)
- [(번역) Next.js의 app 디렉터리 아키텍처 이해하기](https://junghan92.medium.com/%EB%B2%88%EC%97%AD-next-js%EC%9D%98-app-%EB%94%94%EB%A0%89%ED%84%B0%EB%A6%AC-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-28672980d765)
- [How to Structure Your Next.js App With the New App Router](https://betterprogramming.pub/how-to-structure-your-next-js-app-with-the-new-app-router-61bf2bf5a20d)
- [[nextjs] 13.4.0부터 안정화된 App Router. Pages Router와 비교](https://velog.io/@jjunyjjuny/nextjs-13.4.0%EB%B6%80%ED%84%B0-%EC%95%88%EC%A0%95%ED%99%94%EB%90%9C-App-Router.-Pages-Router%EC%99%80-%EB%B9%84%EA%B5%90)
- [[ Next.js ] Next13의 주요 기능에 대해 알아보자.](https://d-dual.tistory.com/86)
- [Next.js 13 multiple layout 적용하기](https://velog.io/@brgndy/Next.js-13-multiple-layout-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
- [How to build Multiple layouts-based websites with nextjs?](https://medium.com/frontendweb/how-to-build-multiple-layouts-based-websites-with-nextjs-31743da1b71a)
- [Next.js 13부터의 App Router와 기존 Page Router의 차이 비교](https://www.jadru.com/diffrent-approuter-and-pagerouter)
- [What is different between App Router and Pages Router in Next.js?](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
- [i18n이 뭔가요? SW 국제화가 뭔가요? 현지화가 뭔가요?](https://miaow-miaow.tistory.com/32)
