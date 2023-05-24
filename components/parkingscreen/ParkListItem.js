import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function ParkListItem({name, address, possible, full}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>{name}</Text>
        <View style={styles.text4}>
          <Text style={styles.text2}>{'잔여  '}</Text>
          <Text style={styles.text3}>{possible}</Text>
          <Text style={styles.text2}>대</Text>
        </View>
      </View>
      <View style={styles.subContainer2}>
        <Text style={styles.text5}>{address}</Text>
        <Text style={styles.text6}>{`전체 ${full}대`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 92,
    borderRadius: 25,
    backgroundColor: '#273244',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    paddingVertical: 27,
  },
  subContainer1: {
    flexDirection: 'row',
    marginBottom: 8,
    position: 'relative',
  },
  subContainer2: {
    flexDirection: 'row',
    marginTop: 8,
    position: 'relative',
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    position: 'absolute',
    left: -171,
    bottom: -4,
  },
  text2: {fontSize: 13, fontWeight: '500', color: '#9CE6FC'},
  text3: {fontSize: 32, fontWeight: '600', color: '#9CE6FC'},
  text4: {
    position: 'absolute',
    flexDirection: 'row',
    right: -170,
    bottom: -12,
    alignItems: 'center',
  },
  text5: {
    fontSize: 11,
    color: '#BEC4CA',
    position: 'absolute',
    left: -170,
    bottom: -20,
  },
  text6: {
    fontSize: 11,
    color: '#BEC4CA',
    position: 'absolute',
    right: -170,
    bottom: -20,
  },
});

export default ParkListItem;
