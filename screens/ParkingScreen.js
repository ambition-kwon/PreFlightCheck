import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ParkListItem from '../components/parkingscreen/ParkListItem';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function ParkingScreen({route}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{height: 30}} />
      {route.params.item.departureAirport === 'GMP' ? (
        <>
          <ParkListItem
            name={'김포공항 국내선 제1주차장'}
            address={'서울특별시 강서구 하늘길 111 제1주차장'}
            full={route.params.GMPParking[0].full}
            possible={
              route.params.GMPParking[0].full - route.params.GMPParking[0].stay
            }
          />
          <ParkListItem
            name={'김포공항 국내선 제2주차장'}
            address={'서울특별시 강서구 하늘길 170 제2주차장'}
            full={route.params.GMPParking[1].full}
            possible={
              route.params.GMPParking[1].full - route.params.GMPParking[1].stay
            }
          />
          <ParkListItem
            name={'김포공항 국제선 주차타워'}
            address={'서울특별시 강서구 하늘길 77 주차타워입구'}
            full={route.params.GMPParking[2].full}
            possible={
              route.params.GMPParking[2].full - route.params.GMPParking[2].stay
            }
          />
          <ParkListItem
            name={'김포공항 국제선 지하주차장'}
            address={'서울특별시 강서구 하늘길 77 지하주차장 입구'}
            full={route.params.GMPParking[3].full}
            possible={
              route.params.GMPParking[3].full - route.params.GMPParking[3].stay
            }
          />
          <ParkListItem
            name={'김포공항 화물청사 주자창'}
            address={'서울특별시 강서구 하늘길 170-1 AAS정비동'}
            full={route.params.GMPParking[4].full}
            possible={
              route.params.GMPParking[4].full - route.params.GMPParking[4].stay
            }
          />
        </>
      ) : (
        <>
          <ParkListItem
            name={'제주공항 P1 주차장'}
            address={'제주특별자치도 제주시 도두이동 44'}
            full={route.params.CJUParking[0].full}
            possible={
              route.params.CJUParking[0].full - route.params.CJUParking[0].stay
            }
          />
          <ParkListItem
            name={'제주공항 P2 장기주차장'}
            address={'제주특별자치도 제주시 도두이동 34'}
            full={route.params.CJUParking[1].full}
            possible={
              route.params.CJUParking[1].full - route.params.CJUParking[1].stay
            }
          />
          <ParkListItem
            name={'제주공항 화물주차장'}
            address={'제주특별자치도 제주시 용담2동 731-3'}
            full={route.params.CJUParking[2].full}
            possible={
              route.params.CJUParking[2].full - route.params.CJUParking[2].stay
            }
          />
        </>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('ParkingFee');
        }}
        style={styles.button}>
        <Text style={styles.text1}>주차 요금 계산기</Text>
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
  text1: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    width: 130,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#273244',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default ParkingScreen;
