import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ListItem({one, two, three, four, five, end}) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <Text style={styles.text1}>
          {one}({two})
        </Text>
        <Text style={styles.text2}>{`${three}  →  ${four}`}</Text>
        <Text style={styles.text3}>{five}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 90,
    borderRadius: 14,
    backgroundColor: '#1A407F',
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
});

export default ListItem;
