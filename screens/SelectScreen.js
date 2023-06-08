import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import FloatingButton from '../components/selectscreen/FloatingButton';
import ListItem from '../components/selectscreen/ListItem';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../contexts/DataContext';
import {deleteDocument} from '../lib/post';
function SelectScreen() {
  const navigation = useNavigation();
  const {Data, onLoad} = useContext(DataContext);
  const arrayData = Data.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate),
  );
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const to = new Date();
  const year = to.getFullYear();
  const month = String(to.getMonth() + 1).padStart(2, '0');
  const day = String(to.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;

  useEffect(() => {
    onLoad();
  }, []);
  const renderItem = ({item}) => {
    const end = new Date(today) > new Date(item.startDate);
    return (
      <ListItem
        one={item.startDate}
        two={daysOfWeek[new Date(item.startDate).getDay()]}
        three={
          item.departureAirport === 'GMP'
            ? '김포'
            : item.departureAirport === 'CJU'
            ? '제주'
            : ''
        }
        four={
          item.arrivalAirport === 'GMP'
            ? '김포'
            : item.arrivalAirport === 'CJU'
            ? '제주'
            : ''
        }
        five={item.flight}
        onPress1={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
                params: {
                  item: item,
                },
              },
            ],
          });
        }}
        onPress2={() => {
          Alert.alert(
            '알림',
            '해당 일정을 삭제하시겠습니까?',
            [
              {
                text: '취소',
                style: 'cancel',
                onPress: () => {},
              },
              {
                text: '삭제',
                style: 'destructive',
                onPress: () => {
                  deleteDocument('ticket', item.documentID);
                  onLoad();
                },
              },
            ],
            {cancelable: true},
          );
        }}
        end={end}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={arrayData} renderItem={renderItem} />
      <FloatingButton
        onPress={() => {
          navigation.navigate('Calendar');
        }}
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
  seperator: {},
  list: {flex: 1},
});

export default SelectScreen;
