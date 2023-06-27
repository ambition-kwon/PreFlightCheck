# PreFlightCheck

**2023오픈소스프로젝트**



[프로토타입 바로가기](https://www.figma.com/proto/FHKA7XKusg2gJTw7tNCYab/CodingHoliday_PreFlightCheck?type=design&node-id=36-307&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A307)

[피피티 바로가기](https://www.canva.com/design/DAFlVSvWag8/PR6kFJ5NJDO14f23SrzRug/view?utm_content=DAFlVSvWag8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)



### 배경:

- 공항을 거쳐야 하는 일정이라면 공항의 상황을 먼저 파악하고 있는 것이 도움이 됩니다.

- 이런 니즈를 고려해 저희 팀은 '**현재 내 도착 예정 공항의 상황은?**'이라는 주제로 프로젝트를 진행했습니다. 

- 탑승 당일의 날씨, 공항 혼잡도/소요 시간, 주차 정보 제공 기능을 주요 서비스로 삼았습니다. 



### 목표:

1. 공항을 이용하는 사용자들의 편의에 도움을 줄 수 있는 **모바일 앱**을 개발
2. **GitHub를 통한** 버전관리와 충돌관리, 브랜치 등의 대해 실전적으로 협업 학습



### 일정 계획:

![image-20230627135751416](C:\Users\yuiha\AppData\Roaming\Typora\typora-user-images\image-20230627135751416.png)



### Stack:

- React-Native
- Node.js
- Java
- Firebase 





### 디자인:

![image-20230627141009549](C:\Users\yuiha\AppData\Roaming\Typora\typora-user-images\image-20230627141009549.png)





### 구현:

**React-Native를 활용한 APP 개발**

- 

**Firebase Firestore을 이용한 DB연동** 

- 

**API서버 구현**

- [sever 바로가기](https://github.com/kangdaelyeol/sever?utm_source=canva&utm_medium=iframely)



 **주차장 정보 API**

- ![image-20230627141850584](C:\Users\yuiha\AppData\Roaming\Typora\typora-user-images\image-20230627141850584.png)

**기상청 단기 API / 기상청 초단기 API / 항공기 운항정보 API/ 공항 소요시간 API**

- ![image-20230627141833859](C:\Users\yuiha\AppData\Roaming\Typora\typora-user-images\image-20230627141833859.png)







![image-20230627141315790](C:\Users\yuiha\AppData\Roaming\Typora\typora-user-images\image-20230627141315790.png)



### 사용한 Open API:

- 공항 혼잡도 정보 API (한국공항공사 제공)
- 공항 소요시간 정보 API (한국공항공사 제공)
- 기상청 초단기 예보 API (기상청 제공)
- 기상청 단기 예보 API (기상청 제공)
- 기상청 중기 예보 API (기상청 제공)
- 국내 항공운항정보 API (국토교통부 제공)
- 전국공항 실시간 주차 정보 API (한국공항공사 제공)



### 사용 라이브러리:

- @react-navigation/native
- react-native-screens
- react-native-safe-area-context
- @react-navigation/native-stack
- react-native-vector-icons
- firebase
- axios
- react-native-calendars
- react-native-modal-datetime-picker 
- @react-native-community/datetimepicker
- react-native-config



### 프로그램:

- Watchman
