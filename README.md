# 사후평과 실습과제. 1주일 컨디션 체크 하기

> 1주일 컨디션 체크 하기


## 🚩 목차
- [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)
- [🎥 데모](#-데모)
- [⚙️ 주요 기능](#%EF%B8%8F-주요-기능)
- [🪝 사용한 리액트 훅](#-사용한-리액트-훅)
- [🎨 UI](#-ui)
- [📂 프로젝트 구조](#-프로젝트-구조)
- [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=flat-square&logo=html5&logoColor=white) [![Axios](https://img.shields.io/badge/Axios-%235A29E4?style=flat-square&logo=axios)](https://axios-http.com/kr/docs/intro)
- [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org) [![CRA](https://img.shields.io/badge/Create%20React%20App-09D3AC?style=flat-square&logo=createreactapp&logoColor=white)](https://create-react-app.dev/) [![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main) [![Redux](https://img.shields.io/badge/Redux-%23764ABC?style=flat-square&logo=redux&logoColor=white
)](https://react-redux.js.org/) [![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) & [React Portal](https://react.dev/reference/react-dom/createPortal)

## 🎥 데모
<img alt="Demo" src="https://github.com/NarciSource/Pre-Onboarding-FE--post-assessment/assets/26417221/12371914-7558-443b-b58f-7bf818f50dc5" width="30%" />

## ⚙️ 주요 기능

- 내 일주일 컨디션 리스트 페이지
   - 오늘 요일이 가장 위로 옴
- 컨디션 평점 매기기 페이지
   - 별을 클릭하면 왼쪽부터 클릭한 별까지 별의 색상이 채워짐
   - 저장하기를 누를 시 저장
- Redux 상태관리 라이브러리를 사용하여 일주일 평점 관리
- React-router-dom을 사용하여 네비게이션 처리
- Mock-api를 사용해서 데이터를 관리
- 이전주, 다음주를 추가로 보여줌
- 키보드(1~5까지 숫자) 누름 이벤트 사용하여 평점 입력 가능
- 평점 입력 후, 입력 되었다는 토스트를 보여줌

## 🪝 사용한 리액트 훅

- React hooks - useState, useEffect, useImperativeHandle
- React Redux hooks - useSelector, useDispatch
- React Router hooks - useParams, useLocation, useNavigate

## 🎨 UI
<img alt="리스트 페이지" src="https://github.com/NarciSource/Pre-Onboarding-FE--post-assessment/assets/26417221/08ae63bf-3b25-4a21-9e3a-6909ab8ecea9" width="30%" /> 
<img alt="컨디션 평점 매기기 페이지" src="https://github.com/NarciSource/Pre-Onboarding-FE--post-assessment/assets/26417221/93af9042-ecd9-4ba5-8029-6702c67690d7" width="30%" />

## 📂 프로젝트 구조
```
post-assessment
├─ .git
├─ .gitignore
├─ .gitmodules
├─ express-server
│  ├─ .env
│  ├─ .git
│  ├─ .gitignore
│  ├─ app.js
│  ├─ bin
│  │  └─ www
│  ├─ db
│  │  ├─ dbClient.js
│  │  ├─ dev.sqlite3
│  │  └─ knexfile.js
│  ├─ middlewares
│  │  └─ cors-headers.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  └─ routes
│     └─ index.js
├─ http-server
│  ├─ .env
│  ├─ .git
│  ├─ .gitignore
│  ├─ db.json
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
├─ json-server
│  ├─ .git
│  ├─ .gitignore
│  ├─ db.json
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.js
   ├─ App.test.js
   ├─ commons
   │  ├─ dayOfWeek.js
   │  ├─ extractForWeek.js
   │  ├─ formatDate.js
   │  └─ jumpDate.js
   ├─ components
   │  ├─ LoadExternalData.jsx
   │  ├─ modal
   │  │  └─ NoticeRating.js
   │  └─ RatingItem.jsx
   ├─ hooks
   │  └─ useReduxState.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ network
   │  ├─ getHistory.js
   │  └─ postHistory.js
   ├─ pages
   │  ├─ RatingPage.jsx
   │  └─ WeekPage.jsx
   ├─ redux
   │  ├─ slices
   │  │  └─ weeklyBio.js
   │  └─ store.js
   ├─ reportWebVitals.js
   ├─ router
   │  └─ router.js
   └─ setupTests.js

```

## 🚀 실행 방법

### 추가 정보

mock-api 서버 열어야 원활히 소통 가능

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

