import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function AddNameCustomButton({onPress, title}) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: '#6200ee',
    borderRadius: 24,
    marginTop: 50,
    marginBottom: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddNameCustomButton;
