# PreFlightCheck
> 한국공항공사, 기상청 API를 활용한 항공권 통합 관리 플랫폼

## 🎯 요약
- **한 줄 소개**: 항공편 출발 전 필요한 모든 정보를 한 곳에서 확인할 수 있는 통합 항공권 관리 서비스
- **핵심 성과**: 
  - 실시간 항공편 정보 + 날씨 + 공항 혼잡도 + 주차 정보를 종합 제공
  - Firebase 기반 사용자 인증 및 일정 관리 시스템 구현
  - 한국공항공사 API와 기상청 API를 활용한 실시간 데이터 연동

![Landing Page](https://github.com/user-attachments/assets/a7e5b026-9db1-4e24-9d03-70b4ea85c035)



## 📌 프로젝트 개요

### 개발 동기와 목적
- 공항을 거쳐야 하는 일정이라면 공항의 상황을 먼저 파악하고 있는 것이 도움이 됩니다.
- 이런 니즈를 고려해 저희 팀은 '현재 내 도착 예정 공항의 상황은?'이라는 주제로 프로젝트를 진행했습니다.
- 탑승 당일의 날씨, 공항 혼잡도/소요 시간, 주차 정보 제공 기능을 주요 서비스로 삼았습니다.

### 개발 정보
- **개발 기간**: 2023.04 ~ 2023.06(약 3개월)
- **팀 구성**: APP 1명, BackEnd 3명
- **개발 환경**: React Native, Firebase, node.js, spring-boot


## 🎬 데모 및 디자인

**📱 프로토타입**: [Figma 바로가기](https://www.figma.com/proto/FHKA7XKusg2gJTw7tNCYab/CodingHoliday_PreFlightCheck?type=design&node-id=36-307&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A307)

**🌐 발표자료**: [PPT 바로가기](https://www.canva.com/design/DAFlVSvWag8/PR6kFJ5NJDO14f23SrzRug/view?utm_content=DAFlVSvWag8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)


## ✨ 주요 기능

### 🔐 인증 시스템
- Firebase Authentication을 활용한 이메일/비밀번호 로그인
- 익명 로그인 지원으로 계정 없이도 앱 이용 가능

### 📅 항공편 일정 관리
- 달력 기반 직관적인 일정 추가/삭제
- 예약번호, 항공사, 항공편명 등 상세 정보 저장

### ✈️ 실시간 항공편 정보
- 한국공항공사 API 연동을 통한 실시간 항공편 상태 확인
- 탑승 게이트 정보 제공

### 🌤️ 날씨 정보 서비스
- 초단기(당일), 단기(2일), 중기(7일) 예보 지원
- 강수확률 및 하늘 상태 아이콘으로 시각화

### 🚗 공항 주차장 실시간 정보
- 김포공항/제주공항 주차장 실시간 잔여 공간 확인
- 주차장별 상세 위치 및 요금 정보


## 🛠 기술 스택

### FrontEnd
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Navigation](https://img.shields.io/badge/React_Navigation-E91E63?style=for-the-badge&logo=react&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Context API](https://img.shields.io/badge/Context_API-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

**선택 이유**: 크로스 플랫폼 개발을 통한 개발 효율성과 네이티브 성능을 동시에 확보

### External API
- **한국공항공사 API**: 실시간 항공편 정보, 공항 혼잡 상황, 주차장 현황
- **기상청 API**: 초단기/단기/중기 날씨 예보


## 📁 프로젝트 구조

```
PreFlightCheck/
├── App.js                  # 앱 진입점, Context Provider 설정
├── screens/                # 화면 컴포넌트
├── components/             # 재사용 가능한 UI 컴포넌트
│   ├── loginscreen/        # 로그인 관련 컴포넌트
│   ├── selectscreen/       # 일정 선택 관련 컴포넌트
│   └── parkingscreen/      # 주차장 관련 컴포넌트
├── contexts/               # Context-API 상태 관리
│   ├── LoginContext.js     # 사용자 인증 상태
│   └── DataContext.js      # 앱 데이터 상태
├── lib/                    # 비즈니스 로직 및 API
├── asset/                  # 이미지 및 정적 자산
└── proxy-server.js         # 외부 API CORS 해결을 위한 프록시 서버
```


## 💡 기술적 의사결정 및 trade-off

### 🤔 주요 기술적 선택과 이유

#### 1. React Native vs Flutter
**선택**: React Native  
- Flutter에 대한 별도 학습 시간이 주어지지 않아, 기존에 학습이 완료된 javascript로 개발 

#### 2. Firebase vs 자체 백엔드
**선택**: Firebase  
- 한정된 기간내에 완성도 있는 프로덕션을 제작하기 위해
- 인증 시스템의 보안성과 안정성
- 백엔드 개발자와의 별도 협업 없이도 독립적 개발 가능 

#### 3. Context API vs Redux
**선택**: Context API  
- React Native 내장 기능으로 별도 라이브러리 의존성 X
- 간단한 상태 관리로도 충분한 규모로 판단


## 🚨 주요 문제 해결 경험

### 직면한 문제: CORS 정책으로 인한 외부 API(기상청, 한국공항공사) 호출 제한

#### 문제 상황
React Native에서 한국공항공사 및 기상청 공공 API 직접 호출 시 CORS 오류 발생

#### 해결 과정
1. **원인 분석**: 브라우저 보안 정책과 공공 API의 CORS 설정 이슈 파악
2. **해결책 검토**: 
   - CORS 우회 패키지 사용 ❌(보안 위험)
   - **프록시 서버 구축** ✅
3. **구현**: Express.js 기반 프록시 서버 도입
   ```javascript
   app.use('/api', createProxyMiddleware({
     target: 'https://apis.data.go.kr',
     changeOrigin: true,
     pathRewrite: {'^/api': ''}
   }));
   ```

#### 배운 점
- CORS에 대한 이론 습득
- 공공 API 연동 시 보안 정책 사전 검토의 중요성
- 프론트엔드 중심 사고에서 벗어나 백엔드 관점에서의 시스템 설계 경험(백엔드 관심⬆)


## 📈 개선 사항

### 🔧 현재 한계점
- **오프라인 지원 부족**: 네트워크 연결이 되지 않았을 경우에 대한 예외처리 부족
- **알림 시스템(FCM) 미구현**: 푸시 알림 부재(기술적 한계)

## 👥 팀 구성 및 역할
|<img src="https://avatars.githubusercontent.com/u/44336444?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/27201345?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/126761282?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/5442985?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|
|안예원<br/>PM / BackEnd|강대렬<br/>BackEnd|김한율<br/>BackEnd|권혁원<br/>UI·UX / APP / Firebase|

## 🏆 성과
- 2023 교내 오픈소스개발론 팀 프로젝트 **1위**
<img width="348" height="278" alt="image" src="https://github.com/user-attachments/assets/24985da6-f95b-4dae-b5c6-548cfae1a5c7" />


---

## 💭 개발 회고

이 프로젝트는 **인생에서 두 번째 프로젝트**로, 당시 첫 번째 프로젝트와 개발 기간이 완전히 겹치는 상황이었습니다. 두 개의 프로젝트를 동시에 진행하며 **극도의 시간 압박과 스트레스** 속에서 개발을 진행해야 했습니다.

### 위기의 순간: CORS와의 첫 만남
프로젝트 중반, 공공 API 연동 과정에서 **CORS 오류를 처음 마주했을 때의 당황스러움**은 지금도 생생합니다.

> *"API 호출이 왜 안 되지? 개발자 도구에서는 정상인데..."*

**당시 상황:**
- 프론트엔드(앱) 지식만 갖고 있던 상태
- CORS라는 개념 자체를 처음 접함
- 구글링을 해도 정확한 해결 방법을 찾기 어려운 상황(일반적으로 API는 백엔드를 거쳐 호출하기 때문)

### 전환점: 백엔드 세계로의 첫 발걸음
CORS 문제를 해결하기 위해 **프록시 서버**라는 개념을 처음 접하게 되었습니다. 구글링을 통해 찾은 Express.js를 사용해 간단한 서버를 구축하면서:

```javascript
// 인생 첫 백엔드 코드
const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://openapi.airport.co.kr/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  }),
);

app.listen(3000, () => {
  console.log('프록시 서버가 실행되었습니다.');
});
```

**이 작은 코드 조각이 가져온 변화:** ⭐ 결국 현재는 백엔드 개발자로서 커리어를 쌓고 있음 ⭐
> *"가장 큰 위기가 가장 큰 기회가 되었던 프로젝트"*
