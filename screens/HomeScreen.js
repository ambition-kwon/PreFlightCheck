import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.name}>안예원</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myBox} activeOpacity={0.7}>
            <Text style={styles.my}>내 일정</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.circle} activeOpacity={0.7}>
          <Icon name={'person'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
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
});

export default HomeScreen;
