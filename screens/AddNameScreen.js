import React, {useState} from 'react';
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
import {auth} from '../lib/firebase';
import {updateProfile} from 'firebase/auth';

function AddNameScreen() {
  const navigation = useNavigation();
  const [nickName, setNickName] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>사용자 이름을 입력해주세요</Text>
        <AddNameCustomInput
          placeholder={'사용자 이름'}
          value={nickName}
          onChangeText={setNickName}
          onSubmitEditing={() => Keyboard.dismiss()}
          autoComplete={'off'}
          keyboardType={'default'}
          secureTextEntry={false}
        />
        <AddNameCustomButton
          title={'설정완료'}
          onPress={() => {
            updateProfile(auth.currentUser, {displayName: nickName}).then(
              () => {
                console.log('사용자 이름 반영 완료');
                navigation.reset({routes: [{name: 'Select'}]});
              },
            );
          }}
        />
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
