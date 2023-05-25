import React from 'react';
import {View, StyleSheet} from 'react-native';
import ParkListItem from '../components/parkingscreen/ParkListItem';

function ParkingScreen({route}) {
  return (
    <View style={styles.container}>
      <View style={{height: 30}} />
      {route.params.item.departureAirport === 'GMP' ? (
        <>
          <ParkListItem
            name={'김포공항 국내선 제1주차장'}
            address={'서울특별시 강서구 하늘길 111 제1주차장'}
            full={'NNN'}
            possible={'NNN'}
          />
          <ParkListItem
            name={'김포공항 국내선 제2주차장'}
            address={'서울특별시 강서구 하늘길 170 제2주차장'}
            full={'NNN'}
            possible={'NNN'}
          />
          <ParkListItem
            name={'김포공항 국제선 지하주차장'}
            address={'서울특별시 강서구 하늘길 77 지하주차장 입구'}
            full={'NNN'}
            possible={'NNN'}
          />
          <ParkListItem
            name={'김포공항 국제선 주차타워'}
            address={'서울특별시 강서구 하늘길 77 주차타워입구'}
            full={'NNN'}
            possible={'NNN'}
          />
        </>
      ) : (
        <>
          <ParkListItem
            name={'제주공항 국내선 주차장'}
            address={'서울특별시 강서구 제주로 77 지하주차장 입구'}
            full={'NNN'}
            possible={'NNN'}
          />
          <ParkListItem
            name={'제주공항 국제선 주차장'}
            address={'서울특별시 강서구 제주로 77 제주입구'}
            full={'NNN'}
            possible={'NNN'}
          />
        </>
      )}
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
