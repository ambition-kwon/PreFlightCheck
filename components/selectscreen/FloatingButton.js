import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingButton() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Icon name={'add'} size={40} color={'black'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 57,
    height: 57,
    borderRadius: 30,
    backgroundColor: '#9CE6FC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 1.5,
    position: 'absolute',
    bottom: 50,
    right: 30,
  },
});

export default FloatingButton;
