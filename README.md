# 🎯 MOYA (모두의 야구)

<div align="center">
  
![MOYA 로고](https://via.placeholder.com/150x150.png?text=MOYA)

**야구 팬들을 위한 종합 커뮤니티 & 티켓 거래 플랫폼**

</div>

## 📚 목차
- [소개](#소개)
- [기술 스택](#기술-스택)
- [주요 기능](#주요-기능)
- [페이지별 기능](#페이지별-기능)
- [설치 및 실행](#설치-및-실행)
- [프로젝트 구조](#프로젝트-구조)
- [API 문서](#api-문서)
- [협업 규칙](#협업-규칙)

## 🌟 소개

**MOYA**는 한국 프로야구 팬들을 위한 종합 플랫폼입니다. 티켓 거래, 동반 입장 모집, 소모임 개설, 야구장 정보 제공까지 야구 관람에 필요한 모든 것을 한 곳에서 해결할 수 있습니다. 안전한 거래 시스템과 신뢰도 기반 커뮤니티로 팬들에게 최적의 야구 경험을 제공합니다.

## 🛠️ 기술 스택

### 프론트엔드
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

### 백엔드
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

### 개발 도구
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)

## 🔥 주요 기능

### 1. 동반 입장 모집
- 원하는 경기의 동반 입장자 모집 게시글 작성
- 날짜, 구장, 경기, 연령대, 성별, 모집인원 필터링
- 댓글을 통한 소통 및 참여 신청

### 2. 정가 양도 게시판
- 티켓 정가 양도 글 작성 및 검색
- 암표 방지를 위한 가격 상한제 및 신뢰도 시스템
- 안전 거래를 위한 채팅 및 쪽지 기능

### 3. 소모임 개설 및 운영
- 지역별, 팀별 소모임 개설 및 가입
- 모임장/멤버 역할 분담 및 스탭 관리
- 모임 활동 후기 공유 (피드형)

### 4. 구장 정보 및 날씨
- 실시간 구장별 날씨 정보 제공
- 구장 주변 시설 및 맛집 정보 공유
- 좌석 뷰 미리보기 기능

### 5. 티켓 교환 게시판
- 같은 경기 다른 좌석 간 교환 게시판
- 교환 사유 및 조건 명시
- 채팅을 통한 빠른 거래 연결

## 📱 페이지별 기능

### 홈/메인
- 오늘 경기 일정 요약
- 실시간 동반입장 모집글 및 양도글 요약
- 관심 팀 기반 콘텐츠 필터링
- 구장별 날씨 정보

### 동반 입장 모집
- 필터링 및 정렬 기능
- 모집글 작성 및 상태 관리
- 댓글 및 참여 신청

### 정가 양도 게시판
- 날짜/구장/팀 필터링
- 티켓 정보 및 수령 방식 명시
- 거래 상태 관리

### 채팅/알림
- 실시간 채팅 시스템
- 거래 요청, 모임 가입 등 알림
- 읽음 상태 표시

### 소모임
- 모임 개설 및 관리
- 멤버 관리 및 스탭 지정
- 활동 후기 공유

### 마이페이지
- 내 활동 내역 관리
- 계정 정보 수정
- 관심 팀 설정

## ⚙️ 설치 및 실행

### 요구사항
- Node.js 18.0.0 이상
- PostgreSQL 14.0 이상
- Firebase 계정

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/your-username/moya.git
cd moya

# 프론트엔드 종속성 설치
cd frontend
npm install

# 백엔드 종속성 설치
cd ../backend
npm install

# 환경 변수 설정
cp .env.example .env
# .env 파일 편집하여 필요한 환경 변수 설정
```

### 개발 서버 실행

```bash
# 백엔드 실행
cd backend
npm run dev

# 프론트엔드 실행 (다른 터미널에서)
cd frontend
npm run dev

# Storybook 실행 (다른 터미널에서)
cd frontend
npm run storybook
```

## 📂 프로젝트 구조

```
moya/
├── frontend/              # 프론트엔드 (React + TypeScript + Vite)
│   ├── public/            # 정적 파일
│   ├── src/               # 소스 코드
│   │   ├── components/    # 재사용 가능한 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── hooks/         # 커스텀 훅
│   │   ├── services/      # API 서비스
│   │   ├── utils/         # 유틸리티 함수
│   │   ├── types/         # TypeScript 타입 정의
│   │   ├── contexts/      # 컨텍스트 API
│   │   ├── App.tsx        # 앱 컴포넌트
│   │   └── main.tsx       # 엔트리 포인트
│   ├── .storybook/        # Storybook 설정
│   └── stories/           # Storybook 스토리
│
├── backend/               # 백엔드 (Node.js + Express)
│   ├── src/               # 소스 코드
│   │   ├── controllers/   # 컨트롤러
│   │   ├── models/        # 데이터 모델
│   │   ├── routes/        # API 라우트
│   │   ├── services/      # 비즈니스 로직
│   │   ├── utils/         # 유틸리티 함수
│   │   ├── middlewares/   # 미들웨어
│   │   ├── config/        # 설정 파일
│   │   └── app.js         # 앱 설정
│   └── swagger/           # API 문서
│
└── shared/                # 프론트엔드와 백엔드 간 공유 코드
    └── types/             # 공유 타입 정의
```

## 📚 API 문서

API 문서는 Swagger를 통해 제공됩니다. 백엔드 서버 실행 후 아래 URL에서 확인할 수 있습니다.

```
http://localhost:3000/api-docs
```

## 🤝 협업 규칙

### 브랜치 전략
- `main`: 배포용 브랜치
- `develop`: 개발 통합 브랜치
- `feature/기능명`: 기능 개발 브랜치
- `fix/버그명`: 버그 수정 브랜치

### 커밋 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 작업, 패키지 매니저 설정 등
```

### 코드 리뷰
- 모든 PR은 최소 1명 이상의 리뷰를 받아야 합니다
- 코드 리뷰 시에는 Prettier, ESLint 규칙 준수 여부를 확인합니다

---

© 2025 MOYA Team. All rights reserved.
