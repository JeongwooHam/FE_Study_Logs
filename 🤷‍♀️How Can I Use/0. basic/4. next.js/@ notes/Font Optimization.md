<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/ccd20d8f-8889-4d73-b7e1-6bc5aae3b068" width="60%"/></p>

### [**_🤠 Next13에 <code>@next/font</code> 패키지가 새롭게 추가되었습니다!_**](https://github.com/vercel/next.js/tree/canary/packages/font)

## 🧐 Next12 ➡️ Next13, 무엇이 바뀌었을까?

```
👩‍🏫 무엇이 바뀌었는지 알아보기에 앞서, 알아두어야 할 개념이 있습니다.
```

### 📊 Core Web Vitals

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/697884ea-14b3-4daf-8d76-7e6a2aaf4653" width="70%"/>

- 웹 페이지 로딩 속도, 모바일 친화성, 암호화, 방해요소 유무 등 UX에 영향을 미치는 다양한 측정 가능한 값들 중 구글이 중요하게 강조하는 세 가지
- UX를 좌우하는 여러 요소 중 가장 기본이자 핵심 지표

> LCP (Largest Contentful Paint)

- 웹 페이지의 로딩 속도에 대한 지표
- 뷰포트(사용자가 스크롤하지 않고 볼 수 있는 영역)에 모든 HTML 요소들이 브라우저 화면에서 렌더링이 완료될 때까지 걸리는 시간의 길이
- 이미지, 이미지 태그, 비디오 썸네일, CSS가 있는 배경 이미지, 텍스트 요소의 로딩 속도 계산

> FID (First Input Delay)

- 응답성을 측정하는 항목
- 사용자가 처음 페이지와 상호작용을 시도할 때 느끼는 경험을 정량화한 것
- 브라우저에서 다음 액션이 가능하게 되는 시간까지의 길이
- 요청 받은 액션을 처리하게 걸리는 시간보다 입력 지연을 시키는 시간을 중요시

> **CLS** (Cumulative Layout Shift)

- 시각적 안정성을 측정하는 항목
- 눈에 보이는 페이지 콘텐츠의 예기치 않은 레이아웃 변화량을 정량화한 것
- 어떤 페이지에 들어갔을 떄 갑작스럽게 발생하는 레이아웃 이동의 정도를 '합산 이동 거리'를 통해 만들어낸 지표

> 👩‍💻 왜 SEO에 중요할까?

- Google의 연구 결과에 따르면, Core Web Vitals 기준을 충족한 웹 페이지가 그렇지 않은 페이지에 비해 방문자 페이지 이탈률이 **24%** 나 낮았다.
- 공식적으로 Google이 밝힌 랭킹 요소는 아니지만, 랭크 브레인은 소비자 피드백을 중시하는 랭킹 알고리즘이다.
  - 허밍버드: Google이 검색 결과를 분류하기 위해 AI 알고리즘을 이용하는 기술
  - 랭크 브레인: Google이 자체 검색 엔진인 허밍 버드에 새롭게 추가한 기술
  - 애매한 표현, 구어체 표현, 신규 쿼리로 검색해도 원하는 내용을 볼 수 있게 해준다.
  - Google 검색 결과에 영향을 미치는 200여 개의 요인 중 3위의 영향을 가진다.

➡️ 따라서 Core Web Vitals를 통한 UX 개선은 SEO에서 중요한 의미를 갖는다!

```
🤔 그런데 폰트가 Core Web Vitals와 무슨 연관이 있나요?
```

### 🔠 폰트와 Layout Shift

> ⚠️ 폰트마다 크기가 다르다!

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/e42279bc-e50c-457e-b00c-83f834f9974c" width="40%"/>

- [이미지 출처](https://velog.io/@ckstn0777/%ED%8F%B0%ED%8A%B8-CLSCumulative-Layout-Shift-%EC%B5%9C%EC%A0%81%ED%99%94-)

- 폰트의 크기가 동일하더라도 고유한 폰트의 크기가 다를 수 있다.

> [FOUT](https://fonts.google.com/knowledge/glossary/fout) (Flash Of Unstyled Text)

- fallback font
  - 기본 폰트가 아직 로드되지 않았더가 페이지 내용을 렌더링할 때 필요한 자체(glyphs)가 없을 때 사용되는 font-face
  - 텍스트를 더 빨리 렌더링해서 더 빠르게 페이지 내용을 읽을 수 있게 하지만 레이아웃을 불안정하게 만든다.
  - 폰트마다 자체 크기가 다르므로 그냥 사용할 경우 swap 때문에 불안정한 레이아웃이 된다.
- 웹 폰트가 적용되기 전, 스타일이 적용되지 않은 기본 폰트인 **fallback font** 가 먼저 적용되는 것
  - 웹 폰트가 로딩이 완료되었을 떄에야 **swap**이 발생하면서 원하는 폰트로 변경된다.
    ➡️ 이 과정에서 깜빡임이 발생하기 때문에 **Flash Of Unstyled Text**라고 부른다.

> 💡 해결 방법

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/9f336ea6-8312-47a8-aa5b-82219d79def6" width="40%"/>

```css
@font-face {
  font-family: "HomemadeApple";
  font-style: normal;
  font-weight: 400;
  size-adjust: 68.5%;
  ascent-override: 120.6633866%;
  descent-override: 60%;
  src: url("./font/HomemadeApple-Regular.ttf") format("truetype");
}
```

- Font-Metric-Overrides
  - 폰트의 ascent, descent, line-gap을 재정의하는 방법
    - ascent: baseline을 기준으로 위로 확장되는 가장 먼 거리
    - descent: baseline을 기준으로 아래로 확장되는 가장 먼 거리
    - line gap(=leading): 텍스트 줄 사이 간격
  - web font의 상승, 하강 및 선 간격과 일치하도록 fallback font의 상승, 하강 및 선 간격을 재정의한다.
    - 이를 통해 web font와 fallback font는 항상 동일한 치수를 가질 수 있다.
- Size-Adjust
  - 폰트 자체(glyphs)의 너비와 높이를 비례적으로 조정한다.
- size-adjust와 font-metric-overrides를 결합하여 두 글꼴의 수평 및 수직을 일치시킬 수 있다.

  - 두 방식을 결합하여 web font와 fallback font의 비율을 맞출 수 있다.

```
👩‍🏫 그리고, Next13에서 우리는 기본적으로 폰트의 CLS를 최적화할 수 있게 되었습니다!
```

### 🪄 Zero Layout Shift

> <code>adjustFallbackFont</code>

- Next 13에서는 <code>adjustFallbackFont</code> 기능을 통해 기존 fallback font의 **size-adjust** 속성을 조정한다.
- 이를 통해 web font와 fallback font 사이의 크기 차이를 없애고, layout shift가 발생하지 않는다.

### 📥 Pre-download Google Font

- Next 12

  - [Google Fonts](https://fonts.google.com/)에서 원하는 폰트를 선택한 뒤 아래와 같이 적용하여 사용했다.

    ```js
    import Head from "next/head";
    const FontGoogle = () => {
      return (
        <>
          <Head>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
            </style>
          </Head>

          <div style={{ fontFamily: `'Noto Sans KR', sans-serif` }}>
            <h2>Font Google Page</h2>
          </div>
        </>
      );
    };

    export default FontGoogle;
    ```

  - HTML 파일이 로드된 후 이 파일에 링크된 <code>font.googleapis.com</code>에서 폰트를 다운로드 한다.

- Next 13
  - 빌드 타임에 미리 Google Font를 다운로드해 로컬 디렉토리에 저장해둔다.
  - 브라우저에서 Google로 요청을 보내는 대신, HTML 파일에는 위의 로컬 파일이 링크된다.
  - 이를 통해 서로 다른 도메인 간 연결을 위한 handshaking 과정 없이 HTML 파일을 다운로드하기 위해 생성했던 연결을 그대로 사용할 수 있게 되어 파일 다운로드가 빨라진다.

## 🧐 <code>@next/font</code>, 어떻게 구현되었을까?

> <code>nextFontLoader</code>

- next-font-loader은 두 가지 부분으로 구성된다.

1. Google Fonts를 다운로드 받고 fallback을 처리하는 부분

- <code>downloadGoogleFonts</code> 함수를 호출해서 빌드 타임에 Google Fonts를 다운로드 받고 zero layout shift를 위한 size-adjust를 진행한다.
<details>
<summary>구현 코드</summary>
<div markdown="1">

```ts
export default async function nextFontLoader(this: any) {
...
    try {
      const fontLoader: FontLoader = require(path.join(
        this.resourcePath,
        '../loader.js'
      )).default
      let { css, fallbackFonts, adjustFontFallback, weight, style, variable } =
        await fontLoader({
          functionName,
          variableName,
          data,
          config: fontLoaderOptions,
          emitFontFile,
          resolve: (src: string) =>
            promisify(this.resolve)(
              path.dirname(
                path.join(this.rootContext, relativeFilePathFromRoot)
              ),
              src.startsWith('.') ? src : `./${src}`
            ),
          isDev,
          isServer,
          loaderContext: this,
        };
```

- <code>nextFontLoader</code> 함수에서는 비동기로 fontLoader 함수를 호출하는데, googleFont의 경우 이 함수는 <code>downloadGoogleFonts</code>를 의미하게 된다.
  - [<code>packages/font/src/google/loader.ts</code>](https://github.com/vercel/next.js/blob/canary/packages/font/src/google/loader.ts)를 빌드한 결과물이기 때문이다.

</div>
</details>

2. 이를 바탕으로 className을 만들고, font-family, font-weight, font-style-css를 적용하는 부분

> <code>downloadGoogleFonts</code>

#### 1. size-adjust 수행

- <code>aboutFontFallbackMetrics</code>를 계산하는 부분
- <code>@next/font</code>가 zero-layout-shift를 구현하는 핵심 로직
- 동작 과정

  ```
  1️⃣ google-font-metrics.json이라는 Map을 불러와 font-family를 key로 준 값을 읽어온다.
  2️⃣ 이 값을 calculateSizeAdjustValues에 넣어 fallback font를 조정하기 위한 값을 계산한다.
    - fontMetrics의 category 값이 'serif'면 Time New Roman을 fallback으로 설정한다.
    - category 값이 'sans serif'나 'serif'가 아닐 경우 Arial을 fallback으로 설정한다.

  ➡️ Next.js는 size-adjust 수행을 위해 필요한 값들을 미리 지정한 fallback font인 Times New Roman과 Arial에 대해 모두 기록해놓고, 빌드 시 해당 값을 불러와 size-adjust 값을 계산한 뒤 사용하는 것!
  ```

- web font와 fallback font(**_serif or sans-serif_**)를 결정
  - ➡️ web font와 fallback font 간 크기 차이를 비교
  - ➡️ size-adjust 속성을 조정하여 layout shift를 방지

#### 2. 폰트 다운로드

- size-adjust 과정이 마무리 된 후, 실제 web font를 빌드 타임에 다운로드 받아 <code>.next/static/media </code> 하위에 저장한다.

```
1️⃣ Map 객체로 구성된 cssCache map에서 해당 폰트에 대한 캐시가 있는지 확인한다.
2️⃣ 캐시가 없는 경우, @font-face로 구성된 CSS 파일을 다운받는다.
3️⃣ @font-face CSS 파일을 바탕으로 해당 파일에 명시된 실제 폰트들을 다운로드 받아야 한다.
4️⃣ 다운로드 받은 파일을 로컬 디렉토리인 .next/static/media 하위에 저장한다.
5️⃣ fontFaceDeclarations(@font-face css파일)의 Google 도메인을 해당 로컬 디렉토리로 수정한다.
6️⃣ 해당 값을 반환한다.
```

#### 3. 결과 생성

```
👩‍🏫 아래의 postcssnNextFontPlugin 함수를 통해 결과를 생성하는 과정을 살펴봅시다!
```

> <code>postcssNextFontPlugin</code>

- <code>postcssNextFontPlugin</code> 함수를 통해 생성된 @font-face css파일은 HTML head 파일에 link로 들어가게 된다.
  - 생성된 CSS 파일은 로컬 파일 시스템에 다운로드 된 Google Font를 가리킨다.
  - 해당 CSS 파일에 들어 있는 미리 계산된 size-adjust와 같은 값들이 zero-layout-shift를 가능케 한다.
- <code>postcssNextFontPlugin</code> 함수는 <code>downloadGoogleFonts</code>의 결과로부터 실행된다.

- 동작 과정

  ```
  1️⃣ nextFontLoader에서 fontFamilyHash 값을 생성한다.
  2️⃣ postcssNextFontPlugin은 fontFamilyHash와 fontFamilyName을 사용하여 가공된 이름을 생성한다.
    - 이 값은 CSS의 font-family 값으로 사용되는 hash 값이 된다.
  3️⃣ 이전 downloadGoogleFonts에서 처리한 size-adjust와 같은 값들을 CSS에 반영한다.
  4️⃣ font-family, font-weight, font-style 값을 모두 CSS에 반영한다.
  5️⃣ 해당 값을 반환한다.

  ➡️ 이 함수는 fontFamily의 hash 값과 이전 단계에서 계산한 adjustFallbackFont의 여러 값을 CSS에 매핑하는 역할을 한 것이다!
  ```

## 🧐 <code>@next/font</code>, 어떻게 사용할까?

### 🌍 Google Fonts

- 어떤 Google Font든 자동으로 자체 호스팅이 가능해졌다.
  - 브라우저에서 Google로 요청을 보내지 않는다.
  - 폰트는 배포에 포함되어 배포와 동일한 도메인에서 제공된다.

> <code>next/font/google</code>

- 최상의 성능과 유연성을 위해 [Variable Fonts](https://fonts.google.com/variablefonts)를 사용하는 것이 좋다.
- 모든 페이지에서 폰트를 사용하려면 <code>app</code> 폴더의 <code>layout.tsx</code> 파일에 추가해주면 된다.

    <details>
    <summary>코드 예시</summary>
    <div markdown="1">

  ```js
  import { Inter } from "next/font/google";

  // variable font를 사용하는 경우, font weight를 특정하지 않아도 된다.
  const inter = Inter({
    subsets: ["latin"],
    display: "swap",
  });

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang="en" className={inter.className}>
        <body>{children}</body>
      </html>
    );
  }
  ```

    </div>
    </details>

- Variable Fonts를 사용할 수 없는 경우 ➡️ font weight 지정 필요

    <details>
    <summary>코드 예시</summary>
    <div markdown="1">

  ```js
  import { Roboto } from "next/font/google";

  const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
  });

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang="en" className={roboto.className}>
        <body>{children}</body>
      </html>
    );
  }
  ```

    </div>
    </details>

- 배열을 사용하여 다수의 font weight과 스타일을 지정해줄 수도 있다.

    <details>
    <summary>코드 예시</summary>
    <div markdown="1">

  ```js
  const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
  });
  ```

    </div>
    </details>

- 폰트 이름에 공백이 있는 경우 \_를 사용할 수 있다.

> 하위 집합 지정하기

- Google Fonts에서는 자동으로 subset을 만들어 폰트 파일의 크기를 줄이고, 성능을 개선한다.
  - 이를 위해서는 preload할 하위 집합을 명시적으로 지정해야 한다.
  - <code>preload: true</code>인 상태에서 하위 집합을 지정하지 않을 경우 경고가 표시된다.
- 함수 호출 시 하위 집합을 추가하면 된다.

```js
const inter = Inter({ subsets: ["latin"] });
```

> 여러 폰트 사용하기

1. 폰트를 export하는 유틸 함수를 생성하기

   - 이를 통해 필요할 때마다 className을 적용할 수 있게 한다.
   - 폰트가 렌더링 될 때에만 preload 되도록 보장한다.
   <details>
    <summary>코드 예시</summary>
    <div markdown="1">

   ```js
   // app/fonts.ts에 함수 생성
   import { Inter, Roboto_Mono } from "next/font/google";

   export const inter = Inter({
   subsets: ["latin"],
   display: "swap",
   });

   export const roboto_mono = Roboto_Mono({
   subsets: ["latin"],
   display: "swap",
   });

   // app/layout.tsx에서 Inter 폰트 사용하기
   import { inter } from "./fonts";

   export default function Layout({ children }: { children: React.ReactNode }) {
   return (
       <html lang="en" className={inter.className}>
       <body>
           <div>{children}</div>
       </body>
       </html>
   );
   }

   // app/page.tsx에서 Roboto_mono 폰트 사용하기
   import { roboto_mono } from "./fonts";

   export default function Page() {
   return (
       <>
       <h1 className={roboto_mono.className}>My page</h1>
       </>
   );
   }
   ```

   - 위의 예시에서 Inter 폰트는 전역으로 적용되고, Roboto Mono는 필요할 때만 적용된다.
   </div>
   </details>

- 여러 폰트를 지정하는 경우 클라이언트가 추가적으로 다운로드해야 하는 요소가 되므로, 주의해서 사용하면 좋다!

### 🪐 Local Fonts

- <code>next/font/local</code>를 import하고 로컬 폰트 파일의 src를 특정해준다.

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
// app/layout.tsx
import localFont from "next/font/local";

// 폰트 파일을 app 내부에 배치할 수 있다.
const myFont = localFont({
  src: "./my-font.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
```

</div>
</details>

- 하나의 font-family에 대해 여러 파일을 사용하고 싶은 경우, src는 배열이 될 수 있다.

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
const roboto = localFont({
  src: [
    {
      path: "./Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
```

</div>
</details>

```
👩‍🏫 로컬 폰트 적용이 가능하긴 하지만, 더 나은 성능과 유연성을 위해 Variable Fonts를 사용할 것을 권장합니다!
```

### 💫 Preloading

- 사이트의 페이지에서 폰트 함수가 호출되었을 때, 이는 전역적으로 접근 가능하거나 모든 경로에서 preload된 상태가 아니다.
- 이 폰트는 사용된 파일의 타입에 기반하여 연관된 경로에서만 preload 된다.

> unique page에 사용된 경우

- 해당 페이지의 고유한 경로에서만 preload 된다.

> layout에 사용된 경우

- 해당 layout으로 감싸진 경로에서만 preload 된다.

> root layout에 사용된 경우

- 모든 경로에서 preload 된다.

### ⚒️ Reusing Fonts

- <code>localFont</code>나 Google Font 함수를 호출할 때마다, 해당 폰트는 애플리케이션 내부에서 하나의 인스턴스로서 호스팅된다.
  - 그러므로 여러 파일에서 동일한 폰트 함수를 로드할 경우, 동일한 폰트에 대해 여러 인스턴스가 호스팅된다.
- 이때, 아래와 같은 방법을 사용하자!

```
1️⃣ 하나의 공유된 파일에서 폰트 로드 함수 호출하기
2️⃣ 상수로 export 하기
3️⃣ 해당 폰트를 사용하고자 하는 파일에서 상수로 import 하기
```

#### 🔎 References

- [Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [How @next/font works](https://blog.mathpresso.com/how-next-font-works-8bb72c2bae39)
- [next.js v13 @next/font 적용기](https://velog.io/@sangbooom/nextfont-%EC%A0%81%EC%9A%A9)
- [NextJS: 폰트 최적화](https://velog.io/@hwisaac/NextJS-%ED%8F%B0%ED%8A%B8-%EC%B5%9C%EC%A0%81%ED%99%94)
- [Next13의 새로운 기능 알아보기 (3) - Font](https://jforj.tistory.com/338)
- [Next.js 9-3 Font Optimization](https://anhyang.tistory.com/120)
- [폰트 CLS(Cumulative Layout Shift) 최적화](https://velog.io/@ckstn0777/%ED%8F%B0%ED%8A%B8-CLSCumulative-Layout-Shift-%EC%B5%9C%EC%A0%81%ED%99%94-)
- [Next JS 13: New Image, Link and Font ](https://www.youtube.com/watch?v=lQsB0nZ8Bdo)
- [Web Vitals 소개: 건강한 사이트를 위한 필수적인 측정항목](https://developers-kr.googleblog.com/2020/05/Introducing-Web-Vitals.html)
- [코어 웹 바이탈(Core web Vitals)이란 무엇인가? [2021년 5월에 시작된 구글 SERP의 변화를 이해하자]](https://www.ascentkorea.com/core-web-vitals/)
- [랭크브레인(RankBrain)이란?](https://feastforall.tistory.com/40)
