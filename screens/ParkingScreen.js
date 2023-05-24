import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

function ParkingScreen() {
  const fetchApiData = async () => {
    fetch('')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={fetchApiData}>
        <Text>init</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ParkingScreen;
