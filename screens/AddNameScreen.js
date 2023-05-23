import React from 'react';
import {
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AddNameCustomInput from '../components/addnamescreen/AddNameCustomInput';
import AddNameCustomButton from '../components/addnamescreen/AddNameCustomButton';
import {useNavigation} from '@react-navigation/native';

function AddNameScreen() {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>사용자 이름을 입력해주세요</Text>
        <AddNameCustomInput
          placeholder={'사용자 이름'}
          value={null}
          onChangeText={null}
          onSubmitEditing={() => Keyboard.dismiss()}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <AddNameCustomButton title={'설정완료'} onPress={null} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020812',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#9CE6FC',
    paddingBottom: 150,
  },
});

export default AddNameScreen;
