<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/74780a44-b979-48cc-8b8c-529aa170bffe" width="60%"/></p>

## 🧐 이미지 최적화, 왜 필요할까?

- Core Web Vitals(Font Optimization에서 상세 설명)의 **LCP**
  - 페이지가 처음 로드를 시작한 시점을 기준으로 화면에 있는 가장 큰 이미지 또는 텍스트블록의 렌더링 시간을 알려주는 지표
  - 텍스트보다 이미지의 사이즈, 개수, 레이아웃 및 로딩 우선 순위에 영향을 받는다.
  - ➡️ 따라서 이미지 최적화는 성능 최적화를 위해 필요한 여러 요소들 중 가장 먼저 고려된다.

<br/>

```
👩‍🏫 이미지 최적화는 투자 대비 성능 효율이 가장 좋지만 신경 쓰지 않을 경우 성능에 가장 악영향을 미칠 수 있습니다!
```

### 💡 이미지 최적화 전략

> webp ➡️ avif

- png, jpg 형식 이미지 파일의 용량 < webp 형식 이미지 파일의 용량
  - png: 무손실 압축 파일 (고품질을 유지한다.)
  - jpg: 손실 압축 파일 (용량의 이점이 있으나 저장하기만 해도 이미지에 손실이 생긴다.)
- webp
  - 2010년 구글이 만들고 무료로 배포한 이미지 형식
  - 고품질의 이미지를 표현하면서도 png, jpg 등 기존의 포맷보다 파일 크기가 작다.
  - png보다는 최대 **_26%_** 까지 줄일 수 있다.
- avif
  - AOMedia에서 2019년에 만들어진 이미지 형식
  - jpeg, webp 등보다 발전된 무손실 압축과 고품질을 자랑한다.
  - jpeg 파일과 비교했을 때, 동일 품질 대비 최대 **_10배_**나 적은 용량을 가진다.
  - avif를 사용하는 경우 webp보다 압축률이 **_20%_** 가 높다.

> Image Lazy Loading

- 화면에 나타나기 전에는 placeholder 이미지를 넣어 두었다가, 화면에 나타날 경우 리소스를 요청하도록 하는 방법
- 화면 전체에 있는 이미지를 **필요한 순간에만** 네트워크에서 요청하도록 만들 수 있다.

> 이미지 리사이징

- 모든 디바이스 화면에서 이미지를 같은 화질과 사이즈로 보여주지 않아도 된다.
- 필요 이상 크기의 이미지를 가져올 경우 네트워크 대역폭을 낭비할 수 있다.
- 디바이스의 크기에 따라 적절한 이미지를 보여줌으로써 성능을 최적화할 수 있다. ➡️ **_resolution switching_**

> ⚠️ 이미지 용량 압축하기

- 화질이 저하될 우려가 있으므로 주의해서 사용해야 하는 방법이다.
- [라이브러리](https://www.npmjs.com/package/browser-image-compression)나 이미지 압축 툴([TinyPNG](https://tinypng.com/), [Compressor.io](https://compressor.io/)) 등을 사용해 구현할 수 있다.

> 이미지 캐싱하기

- 이미지, 특히 다른 리소스에 비해 큰 용량을 차지하는 이미지를 캐싱하면 네트워크 요청 시 속도를 향상시킬 수 있다.
- 브라우저 캐시 및 CDN 서버에 캐싱해둘 수 있다.

## 🧐 <code>next/image</code>는 무엇일까?

- Next.js의 이미지 컴포넌트인 <code>next/image</code>는 모던 웹을 위해 진화한 HTML img 태그의 확장판

> <code>next/image</code>에 내장된 최적화 기능

```
1️⃣ 사이즈 최적화
    - WebP와 AVIF와 같은 이미지 형식을 사용하여 각 기기에 적절한 이미지 사이즈로 자동 변환한다.
2️⃣ 시각적 안정성
    - 이미지가 로드될 때 자동으로 layout shift를 방지해준다.
3️⃣ 더 빠른 페이지 로드 속도
    - 기본적으로 기존 페이지의 lazy loading을 사용하고 있어 뷰포트에 노출되었을 때 이미지를 로드한다.
    - 블러 처리한 이미지를 먼저 노출하는 기능도 선택적으로 사용 가능하다.
4️⃣ 리소스 유연성
    - 원격 서버에 저장된 이미지에 대해서도 필요한 크기로 사이즈 조정이 가능하다.
```

## ⚒️ next/image 사용법

- 이미지를 추가하기 위해, <code>next/image</code> 컴포넌트를 import 한다.

  ```js
  import Image from "next.image";

  const UserInfo = () => {
  	return (
  		<>
  			<h1>User Page</h1>
  			<Image
  				src={....}
  				alt="user profile image"
  			/>
  		</>
  	)
  }
  ```

  ➡️ 이를 통해 이미지의 src를 로컬 또는 원격으로 정의할 수 있다.

### 💫 로컬 이미지

- 로컬 이미지 사용을 위해 파일(<code>.jpg</code>, <code>.png</code>, <code>.webp</code>)을 import 한다.
  ```js
  import fakeProfile from "../public/image/fake.png";
  ```
- Next.js는 import 된 파일에 기반하여 이미지의 <code>width</code>와 <code>height</code>를 자동으로 판단한다.
  - 이 값은 이미지가 로드될 때 layout shift를 방지하기 위해 사용된다.

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
import Image from "next/image";
import profilePic from "./me.png";

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  );
}
```

</div>
</details>

> ⚠️ 주의사항

- 동적인 <code>awiat import( )</code> 또는 <code>require( )</code>은 지원되지 않는다.
- import는 빌드 시점에 분석될 수 있도록 정적이어야 한다.

### 🪐 원격 이미지

- 원격 이미지를 사용하려면, src 속성은 URL 문자열이 되어야 한다.
- Next.js가 빌드 과정에서 원격 파일에 접근할 수 없기 때문에, 수동으로 <code>width</code>, <code>height</code>, <code>blurDataURL</code> props를 제공해야 한다.
- <code>width</code>와 <code>height</code> 속성은 이미지의 적절한 종횡비를 추론하고 이미지가 로드될 때 layout shift를 막기 위해 사용된다.
  - <code>width</code>와 <code>height</code> 속성이 이미지 파일의 렌더링 된 사이즈를 판단하지는 않는다.

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
import Image from "next/image";

export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
```

</div>
</details>

> ⚠️ 안전하게 이미지를 최적화하려면

- 안전한 이미지 최적화를 허용하기 위해, <code>next.config.js</code> 파일에 지원하는 URL 패턴의 목록을 정의하면 좋다.
- 악의적 사용을 방지하기 위해 가능한 한 구체적으로 설명해야 한다.

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
module.exports = {
  images: {
    // 특정한 AWS S3 bucket에서 가져온 이미지만 허용한다.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
      },
    ],
  },
};
```

</div>
</details>

## 🌍 도메인

- 원격 이미지를 최적화하고 싶지만 내장된 Next.js 이미지 최적화 API를 사용하려는 경우
  - <code>loader</code>를 기본 설정으로 남겨두고 Image의 src prop에 절대 URL 경로를 입력하면 된다.
- 악성 사용자를 막기 위해, <code>next/image</code> 컴포넌트에서 사용하고자 의도하는 원격 hostname의 목록을 정의해주어야 한다!

## 💻 로더

```js
import Image from "next/image";
import profilePic from "./me.png"; // 부분 URL

export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" />;
}
```

### 🤔 위의 코드에서 부분 URL이 허용되는 이유가 무엇일까?

- 로컬 이미지에 대해 부분 URL이 가능한 것은 local architecture 덕분이다.
- <code>Loader</code>
  - 이미지의 URL을 생성하는 함수
  - 제공된 src를 수정해서 다양한 크기의 이미지를 요청하기 위한 다수의 URL을 생성한다.
  - 이 다수의 URL은 자동 srcset 생성에 사용된다.
    - srcset: 각각 다른 환경에서 사용될 이미지 소스
  - ➡️ 이를 통해 사이트 방문자들은 그들의 뷰포트 크기에 맞는 적절한 사이즈의 이미지를 제공받는다.
- Next.js 애플리케이션의 기본 loader은 내장된 이미지 최적화 API이다.
  - 이는 웹의 어디서든 이미지를 최적화하며, 그것들을 Next.js의 웹 서버에 직접 제공한다.
- 이미지를 CDN이나 이미지 서버에서 직접 제공하려 한다면, JS로 구현된 loader 함수를 [직접 구현](https://nextjs.org/docs/app/api-reference/components/image#loader)할 수 있다.

## 💡 우선순위

### 📢 각 페이지의 LCP 요소가 될 이미지에 우선순위 속성을 추가해야 합니다!

```js
import Image from "next/image";
import profilePic from "../public/me.png";

export default function Page() {
  return <Image src={profilePic} alt="Picture of the author" priority />;
}
```

- 이를 통해 Next.js로 하여금 preload 태그 및 우선순위 힌트를 사용해 로딩에 대해 특별한 우선순위를 부여할 수 있게 한다.
  - ➡️ 이는 **LCP**에 대한 의미있는 향상을 가져올 수 있다!
- LCP 요소는 페이지 뷰포트 내의 가장 큰 이미지 또는 텍스트 블록이다.
  - <code>next dev</code>를 실행할 때, 우선순위 속성이 없는 이미지가 LCP 요소일 경우 콘솔창에 경고가 출력된다.

## 🪄 이미지 크기 조정

- 이미지가 성능을 저해하는 방식 중 가장 빈번한 것이 **layout shift**이다.
  - 이미지가 로드되면서 페이지 내 다른 요소들을 밀어내는 현상을 의미한다.
  - 이는 **CLS**라고 불리는 자체 Core Web Vital을 가지며, 사용자를 불편하게 만든다.
- 이미지 기반의 layout shift를 피하기 위해서는 항상 이미지의 사이즈를 조정해야 한다.
  - 이를 통해 브라우저가 이미지가 로드 되기 전 충분한 공간을 미리 할당해두도록 할 수 있다.
- <code>next/image</code>는 좋은 성능 결과를 보장하기 위해 구현되었다.
  - 따라서 layout shift에 기여하는 방법으로 사용될 수 없으며, 아래의 방식들로 크기를 조정해야 한다.
  ```
  1️⃣ 자동으로 정적 import 사용하기
  2️⃣ width와 height 속성을 포함하여 명시적으로 조정하기
  3️⃣ 이미지가 부모 요소를 채우도록 확장되게 하는 fill을 사용하여 암시적으로 조정하기
  ```

```
👩‍🏫 위의 방식들 중 어느 것도 이미지의 크기를 조정하지 못한다면, next/image 컴포넌트는 표준 <img/> 요소와 함께 페이지에서 잘 작동하게 됩니다!
```

### 🤔 내 이미지의 사이즈를 알지 못한다면?

- 이미지의 크기를 알지 못한 채 소스에서 이미지에 접근하는 경우 아래와 같은 방식을 사용할 수 있다.

> fill 사용하기

- fill prop은 부모 요소에 이미지의 크기를 맞추도록 한다.

```
1️⃣ CSS를 통해 이미지의 부모 요소에 페이지 상 공간을 할당한다.
2️⃣ sizes 속성을 사용하여 media-query의 breakpoint와 일치하도록 크기를 지정한다.
3️⃣ object-fit 속성의 fill, contain, cover와 object-position 속성을 사용한다.
  - 이를 통해 이미지가 공간을 어떻게 차지할지 정의할 수 있다.
```

> 이미지 표준화하기

- 제어할 수 있는 소스에서 이미지를 제공하는 경우, 특별한 크기로 이미지를 표준화하기 위해 이미지의 파이프라인을 수정하는 방법을 고려할 수 있다.

> API 호출을 수정하기

- CMS와 같은 API 호출을 통해 이미지 URL을 가져오는 경우, URL과 함께 이미지의 크기를 반환하도록 API 요청을 수정할 수 있다.

## 🖌️ 스타일링

```
👩‍🏫 이미지 컴포넌트를 스타일링하는 방법은 일반적인 <img/> 요소 스타일링 방법과 유사하지만,
    몇 가지 염두에 두어야 할 지침 사항이 존재합니다!
```

### ⚠️ <code>styled-jsx</code>가 아닌 className이나 style을 사용하자!

- 대부분의 경우에, <code>className</code> prop을 사용할 것을 권장한다.
  - 이는 import 된 CSS 모듈이나 전역 스타일시트가 될 수 있다.
- 인라인 스타일에 대해서는 <code>style</code> prop도 사용할 수 있다.
- <code>styled-jsx</code>는 사용할 수 없다.
  - 스타일을 <code>global</code>로 표시하지 않는 한, 현재 컴포넌트에 대해 스코프가 지정되어 있기 때문이다.

### ⚠️ fill을 사용할 때 주의할 점

> 부모 요소는 <code>position: relative</code>여야 한다!

- 이는 layout 모드에서 이미지 요소가 올바르게 렌더링되기 위해 필요하다.

> 부모 요소는 <code>display: block</code>을 가져야 한다!

- div 태그의 기본 값이긴 하지만, 아닐 경우 명시해주어야 한다.

#### 🔎 References

- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Next.js Image 컴포넌트 완벽 가이드](https://mycodings.fly.dev/blog/2022-09-08-all-about-nextjs-image-component)
- [NEXT.JS의 이미지 최적화는 어떻게 동작하는가?](https://oliveyoung.tech/blog/2023-06-09/nextjs-image-optimization/)
- [이미지 최적화를 위한 전략 feat.Nextjs](https://velog.io/@yesbb/Nextjs%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0)
- [NextJS: 이미지 최적화](https://velog.io/@hwisaac/NextJS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94)
- [Next/Image를 활용한 이미지 최적화](https://fe-developers.kakaoent.com/2022/220714-next-image/)
