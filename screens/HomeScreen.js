import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {auth} from '../lib/firebase';
import {useNavigation} from '@react-navigation/native';
function HomeScreen({route}) {
  const navigation = useNavigation();
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const to = new Date();
  const year = to.getFullYear();
  const month = String(to.getMonth() + 1).padStart(2, '0');
  const day = String(to.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;
  const timeDiff =
    new Date(today).getTime() - new Date(route.params.item.startDate).getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const [time, setTime] = useState('00:00');
  const [visible1, setVisible1] = useState(false);
  const onPressTime1 = () => {
    // 시간 클릭 시
    setVisible1(true); // 모달 open
  };
  const onConfirm1 = selectedTime => {
    setVisible1(false);
    const koreaTime = selectedTime.toLocaleTimeString('ko-KR', {
      timeZone: 'Asia/Seoul',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(koreaTime);
  };

  const onCancel1 = () => {
    setVisible1(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('MyPage');
            }}>
            <Text style={styles.name}>{auth.currentUser.displayName}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myBox}
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate('Select');
            }}>
            <Text style={styles.my}>내 일정</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.circle}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('MyPage');
          }}>
          <Icon name={'person'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <View style={{height: 15}} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Select');
        }}>
        <View style={styles.schedule}>
          <Text style={styles.scheduleText}>
            {route.params.item.startDate}(
            {daysOfWeek[new Date(route.params.item.startDate).getDay()]})
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{height: 20}} />
      <View style={styles.ticketContainer}>
        <View style={styles.ticketBox1}>
          <View style={styles.ticketSubBox1}>
            <Text style={styles.ticketText1}>예약번호</Text>
            <Text style={styles.ticketText1}>항공사명</Text>
            <Text style={styles.ticketText1}>항공편명</Text>
          </View>
          <View style={styles.ticketSubBox2}>
            <Text style={styles.ticketText2}>
              {route.params.item.bookingNumber}
            </Text>
            <Text style={styles.ticketText2}>{route.params.item.airline}</Text>
            <Text style={styles.ticketText2}>{route.params.item.flight}</Text>
          </View>
        </View>
        <View style={styles.ticketBox2}>
          <Text style={styles.ticketText3}>비행기 탑승까지</Text>
          <Text style={styles.ticketText4}>
            D-{dayDiff === 0 ? 'day' : -dayDiff}
          </Text>
        </View>
      </View>
      <View style={{height: 15}} />
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerBox1}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'wb-sunny'} size={26} color={'#BEC4CA'} />
            <Text style={{fontSize: 14, fontWeight: '600', color: '#BEC4CA'}}>
              {' N%'}
            </Text>
          </View>
          <View
            style={{
              width: 82,
              height: 46,
              borderRadius: 12,
              backgroundColor: '#475E83',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 23, color: 'white', fontWeight: '800'}}>
              {route.params.item.departureAirport === 'GMP' ? '김포' : '제주'}
            </Text>
            <Text style={{fontSize: 14, color: 'white', fontWeight: '800'}}>
              {route.params.item.departureAirport}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp1}>{route.params.item.departureTime}</Text>
            <Text style={styles.temp2}> → </Text>
            <Text style={styles.temp3}>NN:NN</Text>
          </View>
          <Icon name={'mood-bad'} size={26} color={'white'} />
          <Text style={{fontSize: 12, fontWeight: '600', color: 'white'}}>
            공항 NN NN
          </Text>
        </View>
        <View style={styles.mainContainerBox2}>
          <Text style={{fontSize: 16, fontWeight: '800', color: '#BEC4CA'}}>
            N시간 N분
          </Text>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
            →
          </Text>
        </View>
        <View style={styles.mainContainerBox3}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'wb-cloudy'} size={26} color={'#BEC4CA'} />
            <Text style={{fontSize: 14, fontWeight: '600', color: '#BEC4CA'}}>
              {' N%'}
            </Text>
          </View>
          <View
            style={{
              width: 82,
              height: 46,
              borderRadius: 12,
              backgroundColor: '#475E83',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 23, color: 'white', fontWeight: '800'}}>
              {route.params.item.arrivalAirport === 'GMP' ? '김포' : '제주'}
            </Text>
            <Text style={{fontSize: 14, color: 'white', fontWeight: '800'}}>
              {route.params.item.arrivalAirport}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.temp1}>{route.params.item.arrivalTime}</Text>
            <Text style={styles.temp2}> → </Text>
            <Text style={styles.temp3}>NN:NN</Text>
          </View>
          <Icon name={'mood'} size={26} color={'white'} />
          <Text style={{fontSize: 12, fontWeight: '600', color: 'white'}}>
            공항 NN NN
          </Text>
        </View>
      </View>
      <View style={{height: 12}} />
      <TouchableOpacity activeOpacity={0.7} onPress={onPressTime1}>
        <View style={styles.timeContainer}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '800',
              color: '#FC9898',
              textAlign: 'center',
              marginTop: 6,
            }}>
            NN NNN
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: '#9CE6FC',
              textAlign: 'right',
              marginRight: 10,
              marginBottom: 4,
            }}>
            GATE%
          </Text>
          <View
            style={{
              flexDirection: 'row',
              height: 84,
              justifyContent: 'space-between',
            }}>
            <View style={styles.subTimeContainer1}>
              <View style={styles.littleBox}>
                <Text style={styles.littleText}>공항</Text>
                <Text style={styles.littleText}>도착</Text>
              </View>
              <Text style={styles.littleText1}>{time}</Text>
            </View>
            <View style={styles.subTimeContainer2}>
              <Text style={{fontSize: 10, fontWeight: '600', color: '#9CE6FC'}}>
                예상 소요시간
              </Text>
              <Text style={{fontSize: 21, fontWeight: '800', color: '#9CE6FC'}}>
                NN분
              </Text>
            </View>
            <View style={styles.subTimeContainer3}>
              <View style={styles.littleBox}>
                <Text style={styles.littleText}>면세지역</Text>
                <Text style={styles.littleText}>도착</Text>
              </View>
              <Text style={styles.littleText1}>NN:NN</Text>
            </View>
            <View style={styles.subTimeContainer4}>
              <Text style={{fontSize: 10, fontWeight: '600', color: 'white'}}>
                예상 여유시간
              </Text>
              <Text style={{fontSize: 21, fontWeight: '800', color: 'white'}}>
                NN분
              </Text>
            </View>
            <View style={styles.subTimeContainer5}>
              <View style={styles.littleBox}>
                <Text style={styles.littleText}>탑승</Text>
                <Text style={styles.littleText}>시작</Text>
              </View>
              <Text style={styles.littleText1}>NN:NN</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{height: 12}} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('Parking', {item: route.params.item});
        }}>
        <View style={styles.parkingContainer}>
          <View style={styles.subParkingContainer1}>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'white'}}>
              주차 여유 공간
            </Text>
          </View>
          <View style={styles.subParkingContainer2}>
            <View style={styles.text4}>
              <Text style={styles.text2}>{'잔여  '}</Text>
              <Text style={styles.text3}>NNN</Text>
              <Text style={styles.text2}>{' 대'}</Text>
            </View>
            <Text style={{fontSize: 13, fontWeight: '500', color: '#BEC4CA'}}>
              전체 NNNN대
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={visible1}
        mode={'time'}
        onConfirm={onConfirm1}
        onCancel={onCancel1}
        locale="ko"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020812',
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 19,
    color: '#9CE6FC',
    fontWeight: '800',
    paddingRight: 5,
  },
  my: {
    fontSize: 9,
    fontWeight: '600',
  },
  myBox: {
    width: 38,
    height: 17,
    backgroundColor: 'white',
    borderRadius: 6.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 360,
  },
  schedule: {
    width: 150,
    height: 30,
    backgroundColor: '#1A407F',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleText: {color: 'white', fontSize: 13, fontWeight: 'bold'},
  ticketContainer: {
    flexDirection: 'row',
    width: 360,
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ticketBox1: {
    width: 170,
    height: 170,
    backgroundColor: '#273244',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ticketBox2: {
    width: 170,
    height: 170,
    backgroundColor: '#273244',
    borderRadius: 25,
  },
  ticketText1: {
    fontSize: 14,
    fontWeight: '600',
    color: '#BEC4CA',
    paddingVertical: 15,
    paddingLeft: 10,
  },
  ticketText2: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    paddingVertical: 10,
    paddingRight: 10,
  },
  ticketText3: {
    fontSize: 13,
    fontWeight: '700',
    color: '#BEC4CA',
    marginTop: 12,
    marginLeft: 12,
  },
  ticketText4: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 25,
  },
  ticketSubBox1: {
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketSubBox2: {
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    width: 358,
    height: 170,
    backgroundColor: '#273244',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainerBox1: {
    width: 120,
    height: 170,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainerBox2: {
    width: 80,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainerBox3: {
    width: 120,
    height: 170,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp1: {fontSize: 16, fontWeight: '800', color: '#BEC4CA'},
  temp2: {fontSize: 16, fontWeight: '800', color: 'white'},
  temp3: {fontSize: 16, fontWeight: '800', color: '#9CE6FC'},
  timeContainer: {
    width: 358,
    height: 140,
    backgroundColor: '#273244',
    borderRadius: 25,
  },
  subTimeContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
  },
  subTimeContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  subTimeContainer3: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTimeContainer4: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  subTimeContainer5: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 6,
  },
  littleBox: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#475E83',
    alignItems: 'center',
    justifyContent: 'center',
  },
  littleText: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  littleText1: {
    fontSize: 13,
    fontWeight: '800',
    color: 'white',
    paddingTop: 4,
  },
  parkingContainer: {
    width: 358,
    height: 90,
    backgroundColor: '#273244',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  subParkingContainer1: {},
  subParkingContainer2: {alignItems: 'flex-end'},
  text2: {fontSize: 13, fontWeight: '500', color: '#9CE6FC'},
  text3: {fontSize: 32, fontWeight: '600', color: '#9CE6FC'},
  text4: {flexDirection: 'row', alignItems: 'center'},
});

export default HomeScreen;
