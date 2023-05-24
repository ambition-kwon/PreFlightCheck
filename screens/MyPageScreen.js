import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {head} from 'axios';

function MyPageScreen() {
  return (
    <View style={styles.container}>
      <View style={{height: 36}} />
      <View style={styles.subContainer1}>
        <View style={styles.first}>
          <View style={styles.circle}>
            <Icon name={'person'} size={30} color={'black'} />
          </View>
          <Text style={styles.name}>안예원님</Text>
          <Text style={styles.enjoy}>{'  즐거운 비행 되십시오'}</Text>
        </View>
        <View style={{height: 20}} />
        <View style={styles.subContainer2}>
          <View style={styles.second}>
            <Text style={styles.text1}>예정된 일정</Text>
            <View style={{height: 6}} />
            <Text style={styles.text2}>1</Text>
          </View>
          <View style={styles.third}>
            <Text style={styles.text3}>완료된 일정</Text>
            <View style={{height: 6}} />
            <Text style={styles.text4}>2</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.logout}>로그아웃</Text>
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
});

export default MyPageScreen;
