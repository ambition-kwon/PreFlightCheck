import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParkListItem from '../components/parkingscreen/ParkListItem';

function ParkingScreen() {
  return (
    <View style={styles.container}>
      <View style={{height: 30}} />
      <ParkListItem
        name={'김포공항 국내선 제1주차장'}
        address={'서울특별시 강서구 하늘길 111 제1주차장'}
        full={350}
        possible={101}
      />
      <ParkListItem
        name={'김포공항 국내선 제2주차장'}
        address={'서울특별시 강서구 하늘길 170 제2주차장'}
        full={450}
        possible={231}
      />
      <ParkListItem
        name={'김포공항 국제선 지하주차장'}
        address={'서울특별시 강서구 하늘길 77 지하주차장 입구'}
        full={220}
        possible={54}
      />
      <ParkListItem
        name={'김포공항 국제선 주차타워'}
        address={'서울특별시 강서구 하늘길 77 주차타워입구'}
        full={150}
        possible={23}
      />
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
});

export default ParkingScreen;
