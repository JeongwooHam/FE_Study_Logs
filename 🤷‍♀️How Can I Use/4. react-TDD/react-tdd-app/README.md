### REACT TDD

1. CRA로 React 애플리케이션 생성

```
npx create-react-app react-tdd-app
```

2. 애플리케이션 실행 후 기본 테스트를 진행

```
npm test
```

- a를 누르면 테스트가 시작된다.
- q를 누르면 테스트를 중단할 수 있다.

3. Prettier, ESLint 설치 및 설정

- ESLint Testing Plugins 설치하기

```
npm install -D eslint-plugin-testing-library eslint-plugin-jest-dom
```

- 내부 설정해주기

```js
plugins: ['react', 'testing-library', 'jest-dom'],
extends: [
	'react-app',
	'react-app/jest',
	'plugin:testing-library/react',
	'plugin:jest-dom/recommended',
],
```

### 추가로 사용한 스택
