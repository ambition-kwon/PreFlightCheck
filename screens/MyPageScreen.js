import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {auth} from '../lib/firebase';
import DataContext from '../contexts/DataContext';
import {logout} from '../lib/login';
import {useNavigation} from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';

function MyPageScreen() {
  const navigation = useNavigation();
  const {Data} = useContext(DataContext);
  const today = new Date();
  let beforeSchedule = 0;
  let afterSchedule = 0;
  Data.forEach(item => {
    const itemDate = new Date(item.startDate);
    if (itemDate < today) {
      afterSchedule++;
    } else {
      beforeSchedule++;
    }
  });
  return (
    <View style={styles.container}>
      <View style={{height: 36}} />
      <View style={styles.subContainer1}>
        <View style={styles.first}>
          <View style={styles.circle}>
            <Icon name={'person'} size={30} color={'black'} />
          </View>
          <Text style={styles.name}>{auth.currentUser.displayName}님</Text>
          <Text style={styles.enjoy}>{'  즐거운 비행 되십시오'}</Text>
        </View>
        <View style={{height: 20}} />
        <View style={styles.subContainer2}>
          <View style={styles.second}>
            <Text style={styles.text1}>예정된 일정</Text>
            <View style={{height: 6}} />
            <Text style={styles.text2}>{beforeSchedule}</Text>
          </View>
          <View style={styles.third}>
            <Text style={styles.text3}>완료된 일정</Text>
            <View style={{height: 6}} />
            <Text style={styles.text4}>{afterSchedule}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => {
          logout(navigation);
        }}>
        <Text style={styles.logout}>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('notice');
        }}>
        <Text style={styles.text5}>오픈소스 라이선스</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020812',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subContainer1: {
    width: 380,
    height: 160,
    borderRadius: 25,
    backgroundColor: '#273244',
  },
  first: {
    flexDirection: 'row',
    width: 380,
    height: 40,
    alignItems: 'center',
    marginLeft: 18,
    marginTop: 18,
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
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    marginLeft: 8,
  },
  enjoy: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
    paddingTop: 5,
  },
  subContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 54,
  },
  second: {
    alignItems: 'center',
  },
  third: {
    alignItems: 'center',
  },
  text1: {color: '#9CE6FC', fontSize: 18, fontWeight: '700'},
  text2: {color: '#9CE6FC', fontSize: 36, fontWeight: '700'},
  text3: {color: '#BEC4CA', fontSize: 18, fontWeight: '700'},
  text4: {color: '#BEC4CA', fontSize: 36, fontWeight: '700'},
  button: {
    backgroundColor: '#1A407F',
    width: 254,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 360,
  },
  logout: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  text5: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    position: 'relative',
    top: 60,
  },
});

export default MyPageScreen;
