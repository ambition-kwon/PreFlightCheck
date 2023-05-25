import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ListItem({one, two, three, four, five, onPress1, onPress2, end}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={end ? onPress2 : onPress1}>
      <View style={end ? styles.container2 : styles.container1}>
        <Text style={end ? styles.text4 : styles.text1}>
          {one}({two})
        </Text>
        <Text
          style={
            end ? styles.text5 : styles.text2
          }>{`${three}  →  ${four}`}</Text>
        <Text style={end ? styles.text6 : styles.text3}>{five}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.icon}
          onPress={onPress2}>
          <Icon name={'delete'} size={26} color={'white'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 370,
    height: 90,
    borderRadius: 14,
    backgroundColor: '#1A407F',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  container2: {
    width: 370,
    height: 90,
    borderRadius: 14,
    backgroundColor: '#273244',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 2,
  },
  text2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 27,
    letterSpacing: 2,
    paddingVertical: 2,
  },
  text3: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 21,
    paddingVertical: 2,
  },
  text4: {
    color: '#BEC4CA',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 2,
  },
  text5: {
    color: '#BEC4CA',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 27,
    letterSpacing: 2,
    paddingVertical: 2,
  },
  text6: {
    color: '#BEC4CA',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 21,
    paddingVertical: 2,
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 6,
  },
});

export default ListItem;
