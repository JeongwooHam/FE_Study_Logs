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

> .eslintrc.json

```json
{
	"plugins": ["testing-library", "jest-dom"],
	"extends": [
		"react-app",
		"plugin:testing-library/react",
		"plugin:jest-dom/recommended"
	]
}
```

> package.json

```json
{
	...
	"eslintConfig": {
		"extends": [
			"react-app",
			"react-app/jest"
		]
	},
}
```

### 사용한 스택

| 스택                                                                                                                   | 사용             |
| :--------------------------------------------------------------------------------------------------------------------- | :--------------- |
| <img src="https://img.shields.io/badge/emotion-C43BAD?style=for-the-badge&logo=emotion&logoColor=white">               | CSS              |
| <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">       | CSS              |
| <img src="https://img.shields.io/badge/twin.macro-7071E8?style=for-the-badge&logo=twin.macro&logoColor=white">         | CSS              |
| <img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">                 | state management |
| <img src="https://img.shields.io/badge/testinglibrary-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white"> | testing          |
| <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white">                     | testing          |
| <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">             | code formatter   |
| <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">                 | code linter      |
