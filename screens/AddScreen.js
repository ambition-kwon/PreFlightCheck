import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ActionSheetIOS,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DataContext from '../contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function AddScreen({route}) {
  const navigation = useNavigation();
  const {onCreate} = useContext(DataContext);
  const [departureTime, onChangeDepartureTime] = useState('');
  const [arrivalTime, onChangeArrivalTime] = useState('');
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [airline, setAirline] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [bookingNumber, setBookingNumber] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [flight, setFlight] = useState('');
  //출발공항, 도착공항 자동 변경 함수
  useEffect(() => {
    if (departureAirport === 'CJU') {
      setArrivalAirport('GMP');
    } else if (departureAirport === 'GMP') {
      setArrivalAirport('CJU');
    }
  }, [departureAirport]);
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
    onChangeDepartureTime(koreaTime);
  };

  const onCancel1 = () => {
    setVisible1(false);
  };
  const onPressTime2 = () => {
    setVisible2(true);
  };
  const onConfirm2 = selectedTime => {
    setVisible2(false);
    const koreaTime = selectedTime.toLocaleTimeString('ko-KR', {
      timeZone: 'Asia/Seoul',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    onChangeArrivalTime(koreaTime);
  };

  const onCancel2 = () => {
    setVisible2(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{height: 50}} />
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>출발공항</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions(
                {
                  options: ['김포공항(GMP)', '제주공항(CJU)', '선택취소'],
                  cancelButtonIndex: 2,
                },
                buttonIndex => {
                  if (buttonIndex === 0) {
                    setDepartureAirport('GMP');
                  } else if (buttonIndex === 1) {
                    setDepartureAirport('CJU');
                  }
                },
              );
            }}>
            <Text style={styles.selectText}>{departureAirport}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>도착공항</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions(
                {
                  options: ['김포공항(GMP)', '제주공항(CJU)', '선택취소'],
                  cancelButtonIndex: 2,
                },
                buttonIndex => {
                  if (buttonIndex === 0) {
                    setArrivalAirport('GMP');
                  } else if (buttonIndex === 1) {
                    setArrivalAirport('CJU');
                  }
                },
              );
            }}>
            <Text style={styles.selectText}>{arrivalAirport}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>예약번호</Text>
          <TextInput
            style={styles.select}
            activeOpacity={0.7}
            placeholder={'(예)C42E41'}
            value={bookingNumber}
            onChangeText={setBookingNumber}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>항공사명</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={() => {
              ActionSheetIOS.showActionSheetWithOptions(
                {
                  options: [
                    '대한항공',
                    '아시아나항공',
                    '제주항공',
                    '티웨이항공',
                    '이스타항공',
                    '진에어',
                    '에어부산',
                    '에어서울',
                    '선택취소',
                  ],
                  cancelButtonIndex: 8,
                },
                buttonIndex => {
                  if (buttonIndex === 0) {
                    setAirline('대한항공');
                  } else if (buttonIndex === 1) {
                    setAirline('아시아나');
                  } else if (buttonIndex === 2) {
                    setAirline('제주항공');
                  } else if (buttonIndex === 3) {
                    setAirline('티웨이항공');
                  } else if (buttonIndex === 4) {
                    setAirline('이스타항공');
                  } else if (buttonIndex === 5) {
                    setAirline('진에어');
                  } else if (buttonIndex === 6) {
                    setAirline('에어부산');
                  } else if (buttonIndex === 7) {
                    setAirline('에어서울');
                  }
                },
              );
            }}>
            <Text style={styles.selectText}>{airline}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>항공편명</Text>
          <TextInput
            style={styles.select}
            activeOpacity={0.7}
            placeholder={'(예)JE341'}
            value={flight}
            onChangeText={setFlight}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>출발시각</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={onPressTime1}>
            <Text style={styles.selectText}>{departureTime}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.titleText}>도착시각</Text>
          <TouchableOpacity
            style={styles.select}
            activeOpacity={0.7}
            onPress={onPressTime2}>
            <Text style={styles.selectText}>{arrivalTime}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touch}
          onPress={() => {
            if (
              flight === '' ||
              departureTime === '' ||
              departureAirport === '' ||
              bookingNumber === '' ||
              arrivalTime === '' ||
              arrivalTime === '' ||
              arrivalAirport === '' ||
              airline === ''
            ) {
              Alert.alert('알림', '모든 정보를 기입해주세요', [{text: '확인'}]);
            } else {
              onCreate(
                route.params.startDate,
                bookingNumber,
                flight,
                airline,
                departureAirport,
                arrivalAirport,
                departureTime,
                arrivalTime,
              );
              // onLoad();
              navigation.reset({routes: [{name: 'Select'}]});
            }
          }}>
          <Text style={styles.text2}>일정 등록</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={visible1}
          mode={'time'}
          onConfirm={onConfirm1}
          onCancel={onCancel1}
          locale="ko"
        />
        <DateTimePickerModal
          isVisible={visible2}
          mode={'time'}
          onConfirm={onConfirm2}
          onCancel={onCancel2}
          locale="ko"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020812',
    alignItems: 'center',
  },
  subContainer: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleText: {
    color: '#BEC4CA',
    fontSize: 20,
  },
  select: {
    width: 197,
    height: 35,
    backgroundColor: '#BEC4CA',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  selectText: {
    color: 'black',
    textAlign: 'center',
  },
  touch: {
    backgroundColor: '#C02541',
    width: 150,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 70,
  },
  text2: {
    fontSize: 19,
    fontWeight: '600',
    color: 'white',
  },
});

export default AddScreen;
