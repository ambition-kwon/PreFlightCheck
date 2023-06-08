import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function LoadingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../asset/load.gif')} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default LoadingScreen;
