import React from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingButton from '../components/selectscreen/FloatingButton';
import ListItem from '../components/selectscreen/ListItem';
import {useNavigation} from '@react-navigation/native';
function SelectScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ListItem
        one={'2023-05-12'}
        two={'금'}
        three={'김포'}
        four={'제주'}
        five={'LJ304'}
        end={false}
      />
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
});

export default SelectScreen;
