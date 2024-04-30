# Express를 사용한 서버

## 🛠️ 기술 스택

-   [![Express](https://img.shields.io/badge/Express-%23000000?style=flat-square&logo=express)](https://expressjs.com/ko/) [![Node.js](https://img.shields.io/badge/Node.js-%235FA04E?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org) [![Knex.js](https://img.shields.io/badge/Knex.js-%23D26B38?style=flat-square&logo=knexdotjs&logoColor=white)](https://knexjs.org)

## 🗄️ 지원 데이터베이스

-   [![SQLite](https://img.shields.io/badge/SQLite-%23003B57?style=flat-square&logo=sqlite)](https://www.sqlite.org/) [![MySQL](https://img.shields.io/badge/MySQL-%234479A1?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)

## 🔀 REST API

### GET

`http://localhost:5001/biological-rhythm?key=${key}&gte=${gte}&lte=${lte}`

-   key: 검색하려는 컬럼
-   gte: 시작 범위
-   lte: 끝 범위

### POST

`http://localhost:5001/biological-rhythm?key=${key}`

-   Content-Type: application/json
-   data
    -   date: "2024-04-30" # 문자열
    -   rate: 5 # 숫자 0~5

## 🔧 환경변수

-   PORT=
-   MYSQL2_HOST=
-   MYSQL2_DATABASE=
-   MYSQL2_USER=
-   MYSQL2_PASSWORD=
-   NODE_ENV=

## 📂 프로젝트 구조

```
express-server
├─ .env
├─ .git
├─ .gitignore
├─ app.js
├─ bin
│  └─ www
├─ db
│  ├─ dbClient.js
│  ├─ dev.sqlite3
│  └─ knexfile.js
├─ middlewares
│  └─ cors-headers.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ routes
   └─ index.js

```

## 🚀 실행 방법

`npm run start`
