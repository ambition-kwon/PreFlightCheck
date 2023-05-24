import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars/src/index';

function CalendarScreen() {
  const [selectDate, setSelectDate] = useState('');
  const markedDates = {
    [selectDate || '']: {
      selected: true,
      selectedColor: '#9CE6FC', // 선택된 날짜의 색상
    },
  };
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={day => {
          setSelectDate(day.dateString);
        }}
        markedDates={markedDates}
        theme={{
          calendarBackground: '#020812',
          dayTextColor: 'white',
          todayTextColor: 'white',
          monthTextColor: 'white',
          textSectionTitleColor: '#9CE6FC',
        }}
      />
      {selectDate === '' ? (
        <>
          <Text style={styles.text1}>일정을 선택해 주세요</Text>
        </>
      ) : (
        <>
          <Text style={styles.text1}>선택된 일정 : {selectDate}</Text>
        </>
      )}
      <View style={styles.under}>
        <TouchableOpacity activeOpacity={0.7} style={styles.touch}>
          <Text style={styles.text2}>세부 일정 추가</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020812',
  },
  text1: {
    fontSize: 24,
    color: '#9CE6FC',
    textAlign: 'center',
    marginVertical: 50,
  },
  under: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default CalendarScreen;
